import { useTranslations } from "next-intl";
import SetPasswordForm from "./_components/set-password-form";

export default function Page() {
  //Translations
  const t = useTranslations();

  return (
    <>
      {/* Title */}
      <h2 className="font-bold text-2xl mb-3">{t("set-password")}</h2>

      {/* Form */}
      <SetPasswordForm />
    </>
  );
}
