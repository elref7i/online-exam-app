import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { getToken } from "next-auth/jwt";

const authPages = [
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/set-password",
  "/auth/verify-code",
];
const publicPages = [...authPages];

const handleI18nRouting = createMiddleware(routing);

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/auth/login",
    },
  }
);

// Function
function localesRegex(routes: string[]) {
  return RegExp(
    `^(/(${routing.locales.join("|")}))?(${routes
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
}

export default async function middleware(req: NextRequest) {
  const publicPathnameRegex = localesRegex(publicPages);
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    const token = await getToken({ req });
    const redirectURL = new URL('/dashboard', req.nextUrl.origin);

    if (token) return NextResponse.redirect(redirectURL);

    return handleI18nRouting(req);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
