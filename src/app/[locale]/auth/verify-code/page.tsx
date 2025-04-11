import { useTranslations } from "next-intl";
import VerifyCodeForm from "./_components/verify-code-form";

export default function Page() {
  //Translations
  const t = useTranslations();

  return (
    <>
      {/* Title */}
      <h2 className="font-bold text-2xl mb-3">{t("verify-code")}</h2>

      {/* Form */}
      <VerifyCodeForm />
    </>
  );
}
