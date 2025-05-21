import { getAuthHeaders } from "../utils/auth-headers";

export default async function getQuestions(searchParams: string) {
  const response = await fetch(
    `${process.env.API!}/questions?${searchParams}`,
    {
      headers: {
        token: (await getAuthHeaders()).token,
      },
    }
  );

  const payload: APIResponse<Questions> = await response.json();

  return payload;
}

export async function getSingleQuestion(id: string) {
  const response = await fetch(`${process.env.API!}/questions/${id}`, {
    headers: {
      token: (await getAuthHeaders()).token,
    },
  });

  const payload: APIResponse<Questions> = await response.json();

  return payload;
}
