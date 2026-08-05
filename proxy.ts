import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const pathname = request.nextUrl.pathname;
  const language = pathname === "/en" || pathname.startsWith("/en/")
    ? "en"
    : pathname === "/ge" || pathname.startsWith("/ge/")
      ? "ka"
      : "ru";

  requestHeaders.set("x-sweet-home-lang", language);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"]
};
