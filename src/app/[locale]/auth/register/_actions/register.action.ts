"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { RegisterFields } from "@/lib/schemes/auth.schemes";

export const registerAction = async (RegisterFields: RegisterFields) => {
  const response = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(RegisterFields),
    headers: {
      ...JSON_HEADER,
    },
  });
  const payload: APIResponse<RegisterResponse> = await response.json();
  console.log(payload);

  if ("code" in payload) {
    // لو الـ API رجعت error message من السيرفر
    const errorMessage =
      payload.message || "Something went wrong during registration.";
    throw new Error(errorMessage);
  }
  return payload;
};
