"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { ForgotPasswordFields } from "@/lib/schemes/auth.schema";

export const forgotPasswordAction = async (
  ForgotPasswordFields: ForgotPasswordFields
) => {
  const response = await fetch(`${process.env.API!}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(ForgotPasswordFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<ForgotPasswordResponse> = await response.json();

  if ("code" in payload) throw new Error(payload.message);

  return payload;
};
