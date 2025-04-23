import { useQuery } from "@tanstack/react-query";

export default function useQuestionOnExam() {
  //Navigation

  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["questionsOnExam"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API!}/questions`);

      const payload: APIResponse<Questions> = await response.json();
      if ("code" in payload) throw new Error(payload.message);
      return payload;
    },
  });

  return { payload, isLoading, error };
}
