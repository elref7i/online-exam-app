import { getAuthHeaders } from "../utils/auth-headers";

export async function getExams() {
  const response = await fetch(`${process.env.API!}/exams`, {
    method: "GET",
    headers: {
      token: (await getAuthHeaders()).token,
    },
  });
  const payload: APIResponse<Exams> = await response.json();

  return payload;
}

export async function getExamsOnSubject({ subjectId }: { subjectId: string }) {
  const response = await fetch(
    `${process.env.API!}/exams?subject=${subjectId}`,
    {
      method: "GET",
      headers: {
        token: (await getAuthHeaders()).token,
      },
    }
  );
  const payload: APIResponse<SuccessfulResponse<Exams>> = await response.json();

  if ("code" in payload) throw new Error(payload.message);
  return payload;
}
