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
const publicPages = ["/home", ...Array.from(authPages)];

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
    const authPathnameRegex = localesRegex(authPages);
    const isAuthPage = authPathnameRegex.test(req.nextUrl.pathname);

    if (token && isAuthPage) {
      const redirectUrl = new URL("/dashboard", req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }

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

// import { getToken } from 'next-auth/jwt';
// import { NextRequest, NextResponse } from 'next/server';

// const authPages = new Set([
//   '/auth/login',
//   '/auth/register',
//   '/auth/forgot-password',
//   '/auth/set-password',
//   '/auth/verify-code',
// ]);
// const publicPages = new Set(['/home', ...Array.from(authPages)]);

// export default async function middleware(req: NextRequest) {
//   const token = await getToken({ req });

//   if (publicPages.has(req.nextUrl.pathname)) {
//     if (!token) return NextResponse.next();
//     if (authPages.has(req.nextUrl.pathname)) {
//       const redirectUrl = new URL('/', req.nextUrl.origin);
//       return NextResponse.redirect(redirectUrl);
//     }
//   }
//   if (token) return NextResponse.next();
//   const redirectUrl = new URL('/auth/login', req.nextUrl.origin);
//   return NextResponse.redirect(redirectUrl);
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
//   ],
// };
