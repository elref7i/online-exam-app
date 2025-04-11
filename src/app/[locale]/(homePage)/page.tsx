import { RouteProps } from "@/lib/types/common";
import { useFormatter, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function Page({ params: { locale } }: RouteProps) {
  //Translations
  const t = useTranslations();
  const format = useFormatter();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <div>{t("hello")}</div>
      <div>{t("welcome-user", { user: "refai" })}</div>
      <div>{t("cart-product", { count: 2 })}</div>
      <p>{t("user-comments", { user: "Doaa", gender: "female" })}</p>
      <p>
        {t.rich("product-price", {
          span: (value) => (
            <span className="text-blue-600 font-bold">{value}</span>
          ),
          price: 600,
        })}
      </p>
      <p className="text-red-600 font-semibold">
        {t.rich("error-message", {
          br: (value) => (
            <>
              {value} <br />
            </>
          ),
        })}
      </p>

      <p>
        {format.number(1000, {
          style: "currency",
          currency: "EGP",
          maximumFractionDigits: 0,
          numberingSystem: locale === "ar" ? "arab" : "latn",
        })}
      </p>
      <p>{t("price-in-msg", { price: 200 })}</p>
      <p>{t("rate-percent", { rate: 0.25 })}</p>
      <p>{format.number(0.6, "percentage-base")} co</p>
    </>
  );
}
