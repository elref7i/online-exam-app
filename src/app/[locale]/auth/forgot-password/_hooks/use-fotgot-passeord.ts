import { ForgotPasswordFields } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { forgotPasswordAction } from "../_actions/forgot-pass.action";
import { toast } from "sonner";
import { useRouter } from "@/i18n/navigation";

export default function useForgotPassword() {
  // Navigation
  const router = useRouter();

  // Mutation
  const { mutateAsync: forgotPassword, isPending } = useMutation({
    mutationFn: async (fields: ForgotPasswordFields) =>
      await forgotPasswordAction(fields),
    onSuccess: (data) => {
      toast.success(data.message);
      setTimeout(() => {
        router.push("/auth/verify-code");
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { forgotPassword, isPending };
}
