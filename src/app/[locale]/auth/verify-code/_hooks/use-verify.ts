import { VerifyFields } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { verifyAction } from "../_actions/verify-code.action";
import { useRouter } from "@/i18n/navigation";
import { toast } from "sonner";

export default function useVerify() {
  // Navigation
  const router = useRouter();

  //Mutation
  const { mutateAsync: verifyCode, isPending } = useMutation({
    mutationFn: async (fields: VerifyFields) => await verifyAction(fields),
    onSuccess: (data) => {
      toast.success(data.status);
      setTimeout(() => {
        router.push("/auth/set-password");
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { verifyCode, isPending };
}
