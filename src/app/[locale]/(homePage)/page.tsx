import { useTranslations } from 'next-intl';

export default function Page() {
  //Translations
  const t = useTranslations();

  return <div>{t('hello')}</div>;
}
