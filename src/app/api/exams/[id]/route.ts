import { JSON_HEADER } from "@/lib/constants/api.constants";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

type Params = { params: { id: string } };

export async function GET(req: NextRequest, { params }: Params) {
  const token = await getToken({ req });
  const response = await fetch(
    `${process.env.API!}/exams?subject=${params.id}`,
    {
      headers: {
        ...JSON_HEADER,
        token: token?.token || "",
      },
    }
  );

  const payload: APIResponse<SuccessfulResponse<Subjects>> =
    await response.json();

  return NextResponse.json(payload, { status: response.status });
}
