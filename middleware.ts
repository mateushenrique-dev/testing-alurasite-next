import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const abTestCookie = request.cookies.get("ab_test_cookie");

  if (abTestCookie) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  const value = Math.random() < 0.5 ? "A" : "B";

  response.cookies.set("ab_test_cookie", value);

  return response;
}

