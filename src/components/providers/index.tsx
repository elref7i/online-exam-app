import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from 'next-intl';
import NextAuthProvider from './components/next-auth-provider';

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  //Translations
  const messages = useMessages();
  const locale = useLocale();
  const timeZone = useTimeZone();
  const now = useNow();

  return (
    <NextAuthProvider>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        now={now}
        timeZone={timeZone}
      >
        {children}
      </NextIntlClientProvider>
    </NextAuthProvider>
  );
}
