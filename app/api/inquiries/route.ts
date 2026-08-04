import { NextResponse } from "next/server";

export const runtime = "nodejs";

const maxFiles = 10;
const maxFileSize = 10 * 1024 * 1024;
const windowMs = 10 * 60 * 1000;
const maxRequests = 5;
const attempts = new Map<string, number[]>();
const allowedTypes = new Set([
  "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/acad", "application/dxf", "image/vnd.dwg", "image/vnd.dxf"
]);

function text(data: FormData, name: string) { return String(data.get(name) ?? "").trim(); }
function escapeHtml(value: string) { return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"); }
function safeFileName(name: string) { return name.replace(/[^a-zA-Z0-9._() -]/g, "_").slice(0, 120) || "attachment"; }
function isAllowed(file: File) { return file.type.startsWith("image/") || file.type.startsWith("video/") || allowedTypes.has(file.type) || /\.(dwg|dxf)$/i.test(file.name); }

function allowedRequest(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const key = forwarded || "unknown";
  const now = Date.now();
  const active = (attempts.get(key) ?? []).filter((time) => now - time < windowMs);
  if (active.length >= maxRequests) return false;
  active.push(now);
  attempts.set(key, active);
  return true;
}

async function telegram(token: string, method: string, body: BodyInit, json = false) {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: json ? { "content-type": "application/json" } : undefined,
    body
  });
  if (!response.ok) throw new Error(`Telegram ${method} failed: ${response.status}`);
}

export async function POST(request: Request) {
  if (!allowedRequest(request)) return NextResponse.json({ ok: false }, { status: 429 });
  const data = await request.formData();
  if (text(data, "website")) return NextResponse.json({ ok: true });
  const message = text(data, "message");
  const contact = text(data, "contact");
  const pageTitle = text(data, "pageTitle");
  const pageUrl = text(data, "pageUrl");
  const files = data.getAll("attachments").filter((value): value is File => value instanceof File && value.size > 0);
  if (!message || !contact || !pageTitle || !pageUrl || message.length > 6000 || contact.length > 300) return NextResponse.json({ ok: false }, { status: 400 });
  if (files.length > maxFiles || files.some((file) => file.size > maxFileSize || !isAllowed(file))) return NextResponse.json({ ok: false }, { status: 400 });
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return NextResponse.json({ ok: false }, { status: 503 });
  const sentAt = new Intl.DateTimeFormat("ru-RU", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Tbilisi" }).format(new Date());
  const telegramMessage = ["<b>Новая заявка с сайта Atelier Sweet Home</b>", "", `<b>Страница:</b> ${escapeHtml(pageTitle)}`, `<b>URL:</b> ${escapeHtml(pageUrl)}`, `<b>Дата и время:</b> ${escapeHtml(sentAt)}`, `<b>Контакт:</b> ${escapeHtml(contact)}`, "", "<b>Сообщение:</b>", escapeHtml(message), "", `<b>Вложений:</b> ${files.length}`].join("\n");
  try {
    await telegram(token, "sendMessage", JSON.stringify({ chat_id: chatId, text: telegramMessage, parse_mode: "HTML", disable_web_page_preview: true }), true);
    for (const file of files) {
      const payload = new FormData();
      payload.set("chat_id", chatId);
      payload.set("document", file, safeFileName(file.name));
      await telegram(token, "sendDocument", payload);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry delivery failed", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
