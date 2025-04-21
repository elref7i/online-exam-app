import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export default function useQuestionOnExam() {
  //Navigation
  const searchParams = useSearchParams();
  console.log(searchParams.toString());

  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["questionsOnExam"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API!}/questions?${searchParams.toString()}`
      );

      const payload: APIResponse<Questions> = await response.json();
      if ("code" in payload) throw new Error(payload.message);
      return payload;
    },
  });

  return { payload, isLoading, error };
}
