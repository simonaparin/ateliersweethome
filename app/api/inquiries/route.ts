import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILES = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const allowedTypes = new Set([
  "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/acad", "application/dxf", "image/vnd.dwg"
]);
const requests = new Map<string, number[]>();

function text(formData: FormData, key: string) { return String(formData.get(key) ?? "").trim(); }
function escapeHtml(value: string) { return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"); }
function safeName(name: string) { return name.replace(/[^a-zA-Z0-9а-яА-ЯёЁ._() -]/g, "_").slice(0, 120) || "attachment"; }
function isAllowed(file: File) { return file.type.startsWith("image/") || file.type.startsWith("video/") || allowedTypes.has(file.type) || /\.(dwg|dxf)$/i.test(file.name); }

function isRateLimited(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for") ?? "unknown";
  const key = forwarded.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const active = (requests.get(key) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW);
  if (active.length >= RATE_LIMIT_MAX) return true;
  active.push(now); requests.set(key, active); return false;
}

async function telegram(token: string, method: string, body: BodyInit, json = false) {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: json ? { "content-type": "application/json" } : undefined,
    body
  });
  if (!response.ok) throw new Error(`Telegram ${method} failed: ${response.status}`);
}

async function sendAttachment(token: string, chatId: string, file: File) {
  const payload = new FormData();
  payload.set("chat_id", chatId);
  payload.set("document", file, safeName(file.name));
  await telegram(token, "sendDocument", payload);
}

export async function POST(request: Request) {
  if (isRateLimited(request)) return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  const formData = await request.formData();
  if (text(formData, "website")) return NextResponse.json({ ok: true });
  const message = text(formData, "message");
  const contact = text(formData, "contact");
  const pageTitle = text(formData, "pageTitle");
  const pageUrl = text(formData, "pageUrl");
  const files = formData.getAll("attachments").filter((value): value is File => value instanceof File && value.size > 0);
  if (!message || !contact) return NextResponse.json({ ok: false, error: "Missing message or contact" }, { status: 400 });
  if (message.length > 6000 || contact.length > 300 || files.length > MAX_FILES) return NextResponse.json({ ok: false, error: "Request is too large" }, { status: 400 });
  if (files.some((file) => file.size > MAX_FILE_SIZE || !isAllowed(file))) return NextResponse.json({ ok: false, error: "Unsupported attachment" }, { status: 400 });
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return NextResponse.json({ ok: false, error: "Delivery is not configured" }, { status: 503 });
  const submittedAt = new Intl.DateTimeFormat("ru-RU", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Tbilisi" }).format(new Date());
  const telegramMessage = [
    "<b>Новая заявка с сайта Atelier Sweet Home</b>", "",
    `<b>Страница:</b> ${escapeHtml(pageTitle || "не указана")}`,
    `<b>URL:</b> ${escapeHtml(pageUrl || "не указан")}`,
    `<b>Дата и время:</b> ${escapeHtml(submittedAt)}`,
    `<b>Контакт:</b> ${escapeHtml(contact)}`, "",
    "<b>Сообщение:</b>", escapeHtml(message), "",
    `<b>Вложения:</b> ${files.length}`
  ].join("\n");
  try {
    await telegram(token, "sendMessage", JSON.stringify({ chat_id: chatId, text: telegramMessage, parse_mode: "HTML", disable_web_page_preview: true }), true);
    for (const file of files) await sendAttachment(token, chatId, file);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry delivery failed", error);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }
}
