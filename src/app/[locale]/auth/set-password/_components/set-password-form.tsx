"use client";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SetPassswordFields,
  setPassworsSchema,
} from "@/lib/schemes/auth.schema";
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
import { useTranslations } from "next-intl";
import useSetPassword from "../_hooks/use-set-password";

export default function SetPasswordForm() {
  // Translations
  const t = useTranslations();

  // Mutation
  const { setPassword, isPending } = useSetPassword();

  // Form
  const form = useForm<SetPassswordFields>({
    defaultValues: {
      email: "",
      newPassword: "",
    },
    resolver: zodResolver(setPassworsSchema),
  });

  //Functions
  const onSubmit: SubmitHandler<SetPassswordFields> = async (values) => {
    await setPassword(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] space-y-3"
      >
        {/* email */}
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

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">{t("new-password")}</FormLabel>

              {/* Field */}
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder={t("new-password")}
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
          {t("change-password")}
        </Button>

        {/* Contuinue with */}
        <ContinueWith />
      </form>
    </Form>
  );
}
