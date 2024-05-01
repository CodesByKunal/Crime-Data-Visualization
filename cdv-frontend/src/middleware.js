import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import verifyToken from "./helper/verifyToken";

export async function middleware(request) {
  try {
    const cookie = cookies().get("access_token");
    const path = request.nextUrl.pathname;
    const isPublic = path === "/signup" || path === "/login";

    // -> If Public Routes and No-Cookies
    if (isPublic && !cookie) {
      return NextResponse.next();
    }

    // -> If Cookies and Public Routes
    if (isPublic && cookie) {
      // | Verify Cookie from server
      const { token_valid, username } = await verifyToken(cookie);

      // | If Cookie is valid and userid is present in response
      if (token_valid && username) {
        return NextResponse.redirect(new URL(`/user/${username}`, request.url));
      }

      // | Forward to Public route if above condition false
      return NextResponse.next();
    }

    // -> If Private Routes and No-Cookies
    if (!isPublic && !cookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // -> If Private Routes and Cookies
    if (!isPublic && cookie) {
      // | Verify Cookie from server
      const { token_valid, username } = await verifyToken(cookie);

      // | If Path is /user/:id
      if (request.nextUrl.pathname.startsWith("/user")) {
        // | Get User id from url parameters
        const urlUserid = request.nextUrl.pathname.split("/")[2];

        if (token_valid && username && username === urlUserid) {
          return NextResponse.next();
        } else {
          return NextResponse.redirect(
            new URL(`/user/${username}`, request.url)
          );
        }
      }

      // | If Cookie is valid and userid is present in response
      if (token_valid && username) {
        return NextResponse.next();
      }
      // | If Cookie is invalid or userid not present then redirect to ('/login')
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error) {
    console.error(error);
  }
}

export const config = {
  matcher: ["/login", "/signup", "/records"],
};
