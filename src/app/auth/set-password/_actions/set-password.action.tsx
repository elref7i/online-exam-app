'use server';

import { JSON_HEADER } from '@/lib/constants/api.constants';
import { SetPassswordFields } from '@/lib/schemes/auth.schemes';

export const setPasswordAction = async (
  SetPassswordFields: SetPassswordFields
) => {
  const response = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: 'POST',
    body: JSON.stringify(SetPassswordFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<SetPasswordResponse> = await response.json();
  console.log(payload);
};
