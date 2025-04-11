import LeftAuth from "@/components/layout/left-auth";
import HeaderAuth from "@/components/layout/nav-auth";
import { LayoutProps } from "@/lib/types/common";

export default function LayoutAuth({
  children,
  params: { locale },
}: LayoutProps) {
  return (
    <main className="flex min-h-screen max-h-screen items-center h-screen gap-32">
      {/* Left Section */}
      <LeftAuth locale={locale} />

      <section className="auth-action">
        {/* Header */}
        <HeaderAuth locale={locale} />

        {/* Form */}
        {children}
      </section>
    </main>
  );
}
