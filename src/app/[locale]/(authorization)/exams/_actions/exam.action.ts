"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { AnswerFields } from "@/lib/schemes/exam.schema";
import { getAuthHeaders } from "@/lib/utils/auth-headers";

export async function checkQuestionsAction(values: AnswerFields) {
  const response = await fetch(`${process.env.API!}/questions/check`, {
    method: "POST",
    headers: {
      token: (await getAuthHeaders()).token,
      ...JSON_HEADER,
    },
    body: JSON.stringify(values),
  });

  const payload: APIResponse<CheckResponse> = await response.json();

  if ("code" in payload) throw new Error(payload.message);

  return payload;
}
