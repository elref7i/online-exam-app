import { AnswerFields } from "@/lib/schemes/exam.schemes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { checkQuestionsAction } from "../_actions/exam.action";
import { toast } from "sonner";

// Get questions
export default function useQuestionOnExam() {
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

// Check Questions
export function useCheckQuestions() {
  const {
    mutateAsync: checkQuestions,
    error,
    isPending,
    isSuccess,
    data: payload,
  } = useMutation({
    mutationFn: async (values: AnswerFields) =>
      await checkQuestionsAction(values),
    onSuccess: (data) => {
      console.log(data);

      toast.success(data.message);
    },
    onError: (error) => toast.error(error.message),
  });

  return { isPending, error, checkQuestions, isSuccess, payload };
}

//Single Question
export function useSingleQuestion(id: string) {
  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["questionsOnExam"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API!}/${id}`);
      const payload: APIResponse<Questions> = await response.json();
      if ("code" in payload) throw new Error(payload.message);
      return payload;
    },
  });

  return { payload, isLoading, error };
}
