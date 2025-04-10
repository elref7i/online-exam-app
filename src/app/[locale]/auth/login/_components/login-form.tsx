"use client";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFields, loginSchema } from "@/lib/schemes/auth.schemes";
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
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";

export default function LoginForm() {
  //Translations
  const t = useTranslations();
  const locale = useLocale();

  //Form
  const form = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  //Functions
  const onSubmit: SubmitHandler<LoginFields> = async (values) => {
    const response = await signIn("credentials", {
      callbackUrl: "/",
      redirect: false,
      email: values.email,
      password: values.password,
    });
    if (response?.ok) {
      //عشان Session تتحدث in sever and client side
      setTimeout(() => {
        window.location.href = response.url || "/";
      }, 2000);
      toast.success(response.status);
      return;
    }
    toast.error(response?.error);
    console.error(response?.error);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] space-y-3"
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

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">{t("password")}</FormLabel>

              {/* Field */}
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder={t("password")}
                />
              </FormControl>

              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Link recover */}
        <Link
          className={`text-base ${
            locale === "ar" ? `text-start` : `text-end`
          } block text-hiro`}
          href={"/auth/forgot-password"}
        >
          {t("recover-password")}
        </Link>

        {/* Submit */}
        <Button
          disabled={form.formState.isSubmitted && !form.formState.isValid}
          type="submit"
          className="bg-hiro w-full h-14 shadow-primary-shadow rounded-[20px] mb-8 hover:bg-hiro/90"
        >
          {t("sign-in")}
        </Button>

        {/* Continue with */}
        <ContinueWith />
      </form>
    </Form>
  );
}
