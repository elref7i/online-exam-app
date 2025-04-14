import { useMutation } from "@tanstack/react-query";
import { SetPassswordFields } from "@/lib/schemes/auth.schemes";
import { useRouter } from "@/i18n/navigation";
import { toast } from "sonner";
import { setPasswordAction } from "../_actions/set-password.action";

export default function useSetPassword() {
  // Naviagation
  const router = useRouter();

  // Mutation
  const { isPending, mutateAsync: setPassword } = useMutation({
    mutationFn: async (fields: SetPassswordFields) =>
      await setPasswordAction(fields),
    onSuccess: () => {
      toast.success("succes set Password");
      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPending, setPassword };
}
