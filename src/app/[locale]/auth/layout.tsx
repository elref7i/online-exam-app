import LeftAuth from "@/components/layout/left-auth";
import HeaderAuth from "@/components/layout/nav-auth";
import { LayoutProps } from "@/lib/types/common";

export default function LayoutAuth({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen max-h-screen justify-center lg:justify-start items-center h-screen gap-32">
      {/* Left Section */}
      <LeftAuth />

      <section className="auth-action">
        {/* Header */}
        <HeaderAuth />

        {/* Form */}
        {children}
      </section>
    </main>
  );
}
