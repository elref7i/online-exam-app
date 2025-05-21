"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { RegisterFields } from "@/lib/schemes/auth.schema";

export const registerAction = async (RegisterFields: RegisterFields) => {
  const response = await fetch(`${process.env.API!}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(RegisterFields),
    headers: {
      ...JSON_HEADER,
    },
  });
  const payload: APIResponse<RegisterResponse> = await response.json();

  if ("code" in payload) {
    const errorMessage =
      payload.message || "Something went wrong during registration.";
    throw new Error(errorMessage);
  }
  return payload;
};
