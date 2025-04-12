"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Locale, useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

/**
 * A functional component that provides a language selection dropdown.
 *
 * @component
 * @example
 * return (
 *   <SelectLanguage />
 * )
 *
 * @returns `JSX.Element` The SelectLanguage component allowing users to choose a language.
 */

export default function SelectLanguage() {
  //Translations
  const t = useTranslations();
  const myLocale = useLocale();

  // Nvaigation
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  console.log(typeof myLocale);

  const language: Record<Locale, string> = {
    en: t("english"),
    ar: t("arabic"),
  };

  // Functions
  const toggleLocale = (locale: Locale) => {
    router.push(`${pathName}?${searchParams.toString()}`, {
      locale,
    });
    console.log(locale);
  };
  return (
    <Select onValueChange={toggleLocale}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={language[myLocale] ?? "Language"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {routing.locales.map((locale) => (
            <SelectItem
              key={locale}
              value={locale}
            >
              {language[locale]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
