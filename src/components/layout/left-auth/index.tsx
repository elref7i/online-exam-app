import Image from "next/image";

import broImage from "../../../../public/assets/images/bro.png";
import { useLocale, useTranslations } from "next-intl";

export default function LeftAuth() {
  //Translations
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section
      className={`left-auth shadow-custom-section pt-16 ${
        locale === "ar" ? "rounded-l-[100px]" : "rounded-r-[100px]"
      } bg-[#F0F4FC] ps-20 w-[600px] h-full`}
    >
      <div className="w-[482px]">
        {/* Header */}
        <header className="pb-16">
          {/* Logo */}
          <h1 className="text-[50px] font-bold w-80 mb-2 leading-[150%]">
            {t.rich("welcomw-elevate", {
              span: (value) => <span className="text-[#122D9C]">{value}</span>,
            })}
          </h1>

          {/* Description */}
          <p className="text-lg leading-10">{t("welcome-message")}</p>
        </header>

        {/* Image */}
        <Image
          width={300}
          src={broImage}
          alt="bro"
        ></Image>
      </div>
    </section>
  );
}
