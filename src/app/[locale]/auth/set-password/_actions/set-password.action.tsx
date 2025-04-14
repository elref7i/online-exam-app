"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { SetPassswordFields } from "@/lib/schemes/auth.schemes";

export const setPasswordAction = async (
  SetPassswordFields: SetPassswordFields
) => {
  const response = await fetch(`${process.env.API!}/auth/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(SetPassswordFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<SetPasswordResponse> = await response.json();
  console.log(process.env.API!);
  console.log(payload);

  if ("code" in payload) {
    const errorMessage =
      payload.message || "Something went wrong during registration.";
    throw new Error(errorMessage);
  }
  return payload;
};
