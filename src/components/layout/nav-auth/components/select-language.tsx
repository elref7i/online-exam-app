import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";

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

  return (
    <Select>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={t("english")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("english")}</SelectLabel>
          <SelectItem value="English">{t("english")}</SelectItem>
          <SelectItem value="Arabic">{t("arabic")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
