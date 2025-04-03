'use server';

import { JSON_HEADER } from '@/lib/constants/api.constants';
import { ForgotPasswordFields } from '@/lib/schemes/auth.schemes';

export const forgotPasswordAction = async (
  ForgotPasswordFields: ForgotPasswordFields
) => {
  const response = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: 'POST',
    body: JSON.stringify(ForgotPasswordFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<ForgotPasswordResponse> = await response.json();
  console.log(payload);
};
