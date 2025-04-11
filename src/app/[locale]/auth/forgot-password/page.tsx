import { useTranslations } from "next-intl";
import ForgotPassword from "./_components/forgot-password-form";

export default function Page() {
  // Translations
  const t = useTranslations();

  return (
    <>
      {/* Title */}
      <h2 className="font-bold text-2xl mb-3">{t("forgot-password")}</h2>

      {/* Form */}
      <ForgotPassword />
    </>
  );
}
