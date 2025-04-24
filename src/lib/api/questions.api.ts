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
