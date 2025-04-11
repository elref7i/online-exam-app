import { Locale } from "next-intl";
import { ReactNode } from "react";

declare type SearchParams = string | string[] | undefined;

declare type LocaleType = {
  locale: Locale;
};

declare type RouteProps = {
  params: LocaleType;
  searchParams: SearchParams;
};

declare type LayoutProps = {
  children: ReactNode;
} & Pick<RouteProps, "params">;

declare type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
