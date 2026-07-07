import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const allowedPaths = ["/", "/blog", "/showcase"];

  if (allowedPaths.includes(pathname) || pathname.startsWith("/blog/")) {
    return NextResponse.next();
  }

  const metadataRouteNames = [
    "opengraph-image",
    "twitter-image",
    "icon",
    "apple-icon",
    "manifest",
  ];
  const lastSegment = pathname.split("/").pop() ?? "";

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    metadataRouteNames.some((name) => lastSegment.startsWith(name))
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
