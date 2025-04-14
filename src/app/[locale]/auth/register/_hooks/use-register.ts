import { useMutation } from "@tanstack/react-query";
import { registerAction } from "../_actions/register.action";
import { RegisterFields } from "@/lib/schemes/auth.schemes";
import { useRouter } from "@/i18n/navigation";
import { toast } from "sonner";

export default function useRegister() {
  // Naviagation
  const router = useRouter();

  // Mutation
  const {
    isPending,
    mutateAsync: register,
    error: errorMessage,
  } = useMutation({
    mutationFn: async (fields: RegisterFields) => await registerAction(fields),
    onSuccess: () => {
      toast.success("succes register");
      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPending, errorMessage, register };
}
