import Providers from "@/components/providers";
import { routing } from "@/i18n/routing";
import { LayoutProps } from "@/lib/types/common";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) return notFound();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body>
        <Providers>
          {/* main */}
          {children}
        </Providers>

        {/* Toaster */}
        <Toaster />
      </body>
    </html>
  );
}
