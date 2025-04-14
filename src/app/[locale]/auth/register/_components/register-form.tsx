"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterFields, registerSchema } from "@/lib/schemes/auth.schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ContinueWith from "@/components/features/continue/continue-with";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import useRegister from "../_hooks/use-register";

export default function RegisterForm() {
  //Translations
  const t = useTranslations();
  const locale = useLocale();

  // Form
  const form = useForm<RegisterFields>({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

  //Mutation
  const { register, isPending, errorMessage } = useRegister();
  // Functions
  const onSumbit: SubmitHandler<RegisterFields> = async (values) => {
    await register(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSumbit)}
        className="w-[500px] space-y-3"
      >
        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">{t("user-name")}</FormLabel>

              {/*Field  */}
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder={t("user-name")}
                />
              </FormControl>

              {/* FeedBack */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Fields name */}
        <div className="block md:flex items-center gap-2">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                {/* Label */}
                <FormLabel className="sr-only">{t("first-name")}</FormLabel>

                {/* Field */}
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder={t("first-name")}
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1">
                {/* Label */}
                <FormLabel className="sr-only">{t("last-name")}</FormLabel>

                {/* Field */}
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder={t("last-name")}
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

        {/* Passwrod */}
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

        {/* Confirm Passsword */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">
                {t("confirm-passsword")}
              </FormLabel>

              {/* Field */}
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder={t("confirm-passsword")}
                />
              </FormControl>

              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">{t("phone")}</FormLabel>

              {/* Field */}
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  className={`${locale === "ar" ? "text-end" : "text-start"}`}
                  placeholder={t("phone")}
                />
              </FormControl>

              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Link recover */}
        <p className="text-base text-center font-medium">
          {t.rich("already-account", {
            Link: (value) => (
              <Link
                className="text-hiro ml-1"
                href={"/auth/login"}
              >
                {value}
              </Link>
            ),
          })}
        </p>

        <p>{errorMessage?.message}</p>
        {/* Submit */}
        <Button
          disabled={
            isPending || (form.formState.isSubmitted && !form.formState.isValid)
          }
          type="submit"
          className="bg-hiro w-full h-14 shadow-primary-shadow rounded-[20px] mb-8 hover:bg-hiro/90"
        >
          Create Account
        </Button>

        {/* Contuinue with */}
        <ContinueWith />
      </form>
    </Form>
  );
}
