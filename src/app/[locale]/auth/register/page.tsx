import { useTranslations } from "next-intl";
import RegisterForm from "./_components/register-form";

export default function Page() {
  //Translations
  const t = useTranslations();

  return (
    <>
      {/* Title */}
      <h2 className="font-bold text-2xl mb-3">{t("sign-up")}</h2>

      {/* Form */}
      <RegisterForm />
    </>
  );
}
