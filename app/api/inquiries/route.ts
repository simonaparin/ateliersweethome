import { NextResponse } from "next/server";

export const runtime = "nodejs";

function getText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildTelegramMessage(formData: FormData, files: File[]) {
  const lines = [
    "<b>Новая заявка с сайта Atelier Sweet Home</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(getText(formData, "name"))}`,
    `<b>Контакт:</b> ${escapeHtml(getText(formData, "contact"))}`,
    `<b>Место:</b> ${escapeHtml(getText(formData, "location"))}`,
    `<b>Задача:</b> ${escapeHtml(getText(formData, "task"))}`,
    `<b>Желаемый старт:</b> ${escapeHtml(getText(formData, "start") || "не указан")}`,
    `<b>Бюджет:</b> ${escapeHtml(getText(formData, "budget") || "не указан")}`,
    `<b>Фотографии:</b> ${files.length}`
  ];

  return lines.join("\n");
}

async function sendTelegramMessage(token: string, chatId: string, text: string) {
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true
    })
  });

  if (!response.ok) {
    throw new Error(`Telegram sendMessage failed: ${response.status}`);
  }
}

async function sendTelegramPhoto(token: string, chatId: string, file: File, caption?: string) {
  const payload = new FormData();
  payload.set("chat_id", chatId);
  payload.set("photo", file, file.name || "site-photo.jpg");

  if (caption) {
    payload.set("caption", caption);
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
    method: "POST",
    body: payload
  });

  if (!response.ok) {
    throw new Error(`Telegram sendPhoto failed: ${response.status}`);
  }
}

async function sendTelegramDocument(token: string, chatId: string, file: File, caption?: string) {
  const payload = new FormData();
  payload.set("chat_id", chatId);
  payload.set("document", file, file.name || "site-file");

  if (caption) {
    payload.set("caption", caption);
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
    method: "POST",
    body: payload
  });

  if (!response.ok) {
    throw new Error(`Telegram sendDocument failed: ${response.status}`);
  }
}

async function sendTelegramFile(token: string, chatId: string, file: File, caption?: string) {
  try {
    await sendTelegramPhoto(token, chatId, file, caption);
  } catch {
    await sendTelegramDocument(token, chatId, file, caption);
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const requiredFields = ["name", "contact", "location", "task"];
  const missing = requiredFields.filter((field) => !getText(formData, field));
  const files = formData
    .getAll("photos")
    .filter((value): value is File => value instanceof File && value.size > 0);

  if (missing.length > 0) {
    return NextResponse.json({ ok: false, error: "Missing required fields", missing }, { status: 400 });
  }

  if (files.length > 10) {
    return NextResponse.json({ ok: false, error: "Too many files" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        message: "Telegram transport is not configured yet. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID."
      },
      { status: 501 }
    );
  }

  try {
    await sendTelegramMessage(token, chatId, buildTelegramMessage(formData, files));

    for (const [index, file] of files.entries()) {
      await sendTelegramFile(token, chatId, file, index === 0 ? "Фотографии к заявке с сайта" : undefined);
    }

    return NextResponse.json({ ok: true, configured: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Telegram delivery failed" }, { status: 502 });
  }
}
