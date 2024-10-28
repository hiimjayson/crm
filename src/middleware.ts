import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authApi } from "./remote/auth";

export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("session-token");

  if (!sessionToken) {
    if (request.nextUrl.pathname === "/login") {
      return NextResponse.next();
    }
    // 세션 정보가 없는 경우
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const isValidSession = await authApi.checkAuth();

  if (!isValidSession) {
    // 세션 정보가 존재하지만 유효하지 않은 경우
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 세션 정보가 존재하며 유효한 경우
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
