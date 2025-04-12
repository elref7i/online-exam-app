import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,

    //Global configuration
    formats: {
      number: {
        "currency-base": {
          numberingSystem: locale === "ar" ? "arab" : "latn",
          currency: "EGP",
          style: "currency",
          maximumFractionDigits: 0,
        },
        "percentage-base": {
          numberingSystem: locale === "ar" ? "arab" : "latn",
          style: "percent",
          maximumFractionDigits: 0,
        },
      },
      dateTime: {
        "data-base": {
          numberingSystem: locale === "ar" ? "arab" : "latn",
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        },
        "relative-time-base": {
          numberingSystem: locale === "ar" ? "arab" : "latn",
          unit: "day",
        },
      },
    },
  };
});
