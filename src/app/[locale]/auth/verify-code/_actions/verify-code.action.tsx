"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { VerifyFields } from "@/lib/schemes/auth.schema";

export const verifyAction = async (VerifyFields: VerifyFields) => {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(VerifyFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: CodeResponse = await response.json();

  if ("code" in payload) throw new Error(payload.message);
  return payload;
};
