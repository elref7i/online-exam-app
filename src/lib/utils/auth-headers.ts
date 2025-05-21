import { cookies } from "next/headers";
import "server-only";
import {
  AUTH_COOKIE,
  AUTH_COOKIE_VERCEL,
} from "../constants/auth-cookie.constant";
import { decode, JWT } from "next-auth/jwt";

export async function getAuthHeaders() {
  const tokenCookie =
    cookies().get(AUTH_COOKIE)?.value ||
    cookies().get(AUTH_COOKIE_VERCEL)?.value;

  let JWT: JWT | null = null;

  try {
    JWT = await decode({
      token: tokenCookie,
      secret: process.env.NEXTAUTH_SECRET!,
    });
  } catch (error) {
    void error;
  }

  return {
    token: JWT?.token || "",
  };
}
