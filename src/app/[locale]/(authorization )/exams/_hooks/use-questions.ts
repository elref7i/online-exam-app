import { AnswerFields } from "@/lib/schemes/exam.schemes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { checkQuestionsAction } from "../_actions/exam.action";
import { toast } from "sonner";

// Get questions on exam
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
  const { mutate, error, isPending } = useMutation({
    mutationFn: async (values: AnswerFields) =>
      await checkQuestionsAction(values),
    onSuccess: (data) => toast.success(data.message),
    onError: (error) => toast.error(error.message),
  });

  return { isPending, error, mutate };
}
