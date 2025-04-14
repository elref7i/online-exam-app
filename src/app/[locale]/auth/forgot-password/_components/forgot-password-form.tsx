"use client";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import ContinueWith from "@/components/features/continue/continue-with";
import {
  ForgotPasswordFields,
  forgotPasswordSchema,
} from "@/lib/schemes/auth.schemes";
import { useTranslations } from "next-intl";
import useForgotPassword from "../_hooks/use-fotgot-passeord";

export default function ForgotPassword() {
  // Translations
  const t = useTranslations();

  // Mutation
  const { forgotPassword, isPending } = useForgotPassword();

  // Form
  const form = useForm<ForgotPasswordFields>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  //Functions
  const onSubmit: SubmitHandler<ForgotPasswordFields> = async (values) => {
    await forgotPassword(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] space-y-5"
      >
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">{t("email")}</FormLabel>

              {/* Field */}
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder={t("email")}
                />
              </FormControl>

              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          disabled={
            isPending || (form.formState.isSubmitted && !form.formState.isValid)
          }
          type="submit"
          className="bg-hiro w-full h-14 shadow-primary-shadow rounded-[20px] mb-8 hover:bg-hiro/90"
        >
          {t("send")}
        </Button>

        {/* Contuinue with */}
        <ContinueWith />
      </form>
    </Form>
  );
}
