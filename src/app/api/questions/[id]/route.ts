import { JSON_HEADER } from "@/lib/constants/api.constants";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, id: string) {
  // Variables
  const token = await getToken({ req });

  // Fetch Data
  const response = await fetch(`${process.env.API!}/questions/${id})}`, {
    headers: {
      token: token?.token || "",
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<Questions> = await response.json();

  return NextResponse.json(payload, { status: response.status });
}
