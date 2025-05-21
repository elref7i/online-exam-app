import { JSON_HEADER } from "@/lib/constants/api.constant";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  // Variables
  const token = await getToken({ req });

  // Fetch Data
  const response = await fetch(`${process.env.API!}/subjects`, {
    headers: {
      ...JSON_HEADER,
      token: token?.token || "",
    },
  });


  const payload: APIResponse<Subjects> = await response.json();

  return NextResponse.json(payload, { status: response.status });
}
