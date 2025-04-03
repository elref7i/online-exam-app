'use server';

import { JSON_HEADER } from '@/lib/constants/api.constants';
import { VerifyFields } from '@/lib/schemes/auth.schemes';

export const verifyAction = async (VerifyFields: VerifyFields) => {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: 'POST',
    body: JSON.stringify(VerifyFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: CodeResponse = await response.json();
  console.log(payload);
};
