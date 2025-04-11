import Link from "next/link";
import { Button } from "@/components/ui/button";
import SelectLanguage from "./components/select-language";
import { useLocale, useTranslations } from "next-intl";

/**
 * A functional component that renders a navigation bar for authentication.
 *
 * @component
 * @example
 * return (
 *   <HeaderAuth />
 * )
 *
 * @returns `JSX.Element` The HeaderAuth component displaying authentication links and language selection.
 */

export default function HeaderAuth() {
  //Translations
  const t = useTranslations();
  const locale = useLocale();

  return (
    <nav
      className={`flex fixed top-5 ${
        locale === "ar" ? "left-10" : "right-10"
      } justify-end items-center gap-2`}
    >
      {/* Select */}
      <SelectLanguage />

      {/* Button */}
      <Button
        variant="ghost"
        className="font-bold text-xl"
      >
        <Link href={"/auth/login"}>{t("sign-in")}</Link>
      </Button>

      {/* Button */}
      <Button
        variant="outline"
        className="shadow-primary-shadow"
      >
        <Link href={"/auth/register"}>{t("register")}</Link>
      </Button>
    </nav>
  );
}
