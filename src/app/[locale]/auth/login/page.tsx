import { useTranslations } from "next-intl";
import LoginForm from "./_components/login-form";
import { RouteProps } from "@/lib/types/common";

export default function Page({ params: { locale } }: RouteProps) {
  //Translations
  const t = useTranslations();

  return (
    <>
      {/* Title */}
      <h2 className="font-bold text-2xl mb-3">{t("sign-in")}</h2>

      {/* Form */}
      <LoginForm locale={locale} />
    </>
  );
}
