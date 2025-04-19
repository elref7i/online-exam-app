import { useQuery } from "@tanstack/react-query";

export default function useExamOnSubject(id?: string) {
  const {
    isLoading,
    error,
    data: payload,
  } = useQuery({
    queryKey: ["Exams", id],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/exams/${id}`
      );
      const payload: APIResponse<SuccessfulResponse<Exams>> =
        await response.json();

      if ("code" in payload) throw new Error(payload.message);
      return payload;
    },
  });

  return { isLoading, error, payload };
}
