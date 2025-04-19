import { JSON_HEADER } from "@/lib/constants/api.constants";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  console.log(token?.token);

  const response = await fetch(`${process.env.API!}/subjects`, {
    headers: {
      ...JSON_HEADER,
      token: token?.token || "",
    },
  });

  const payload: APIResponse<SuccessfulResponse<Subjects>> =
    await response.json();

  return NextResponse.json(payload, { status: response.status });
}
