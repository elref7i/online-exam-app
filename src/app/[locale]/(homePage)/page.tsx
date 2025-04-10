import { RouteProps } from '@/lib/types/common';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function Page({ params: { locale } }: RouteProps) {
  //Translations
  const t = useTranslations();

  // Enable static rendering
  setRequestLocale(locale);

  return <div>{t('hello')}</div>;
}
