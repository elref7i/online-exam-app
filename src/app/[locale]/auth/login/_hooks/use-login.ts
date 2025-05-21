import { LoginFields } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function useLogin() {
  const { isPending, mutate: login } = useMutation({
    mutationFn: async (loginField: LoginFields) => {
      const response = await signIn("credentials", {
        callbackUrl: '/',
        redirect: false,
        email: loginField.email,
        password: loginField.password,
      });

      if (response?.error) throw new Error(response.error);

      return response;
    },
    onSuccess: () => {
      toast.success("Logged in successfully");
      setTimeout(() => (window.location.href = '/'), 1000);
    },
  });

  return { isPending, login };
}
