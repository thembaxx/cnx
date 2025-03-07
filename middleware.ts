import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextResponse, type NextRequest } from "next/server";
import { NextURL } from "next/dist/server/web/next-url";
import { isOnboardingComplete } from "./actions";

type Session = typeof auth.$Infer.Session;

export default async function authMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const { data, error } = await betterFetch<Session>("/api/auth/get-session", {
    baseURL: request.nextUrl.origin,
    headers: {
      //get the cookie from the request
      cookie: request.headers.get("cookie") || "",
    },
  });

  const session = data?.session;

  if (!session && pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (session && !error) {
    if (pathname === "/") {
      if (data.user) {
        const email = data.user.email;
        const onboardingComplete = await isOnboardingComplete(email);
        if (onboardingComplete) {
          const url = new NextURL("/dashboard", request.url);
          return NextResponse.redirect(url);
        } else {
          const url = new NextURL("/onboarding", request.url);
          return NextResponse.redirect(url);
        }
      } else {
        const url = new NextURL("/", request.url);
        return NextResponse.redirect(url);
      }
    }
  }

  return NextResponse.next();
}

// Protect sub-routes
export const config = {
  matcher: ["/login", "/dashboard", "/jobs", "/onboarding"],
};
