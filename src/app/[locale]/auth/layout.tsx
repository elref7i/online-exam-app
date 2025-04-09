import LeftAuth from '@/components/layout/left-auth';
import HeaderAuth from '@/components/layout/nav-auth';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
// import { Toaster } from 'sonner';

export default function LayoutAuth({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen max-h-screen items-center h-screen gap-32">
      {/* Left Section */}
      <LeftAuth />

      <section className="auth-action">
        {/* Header */}
        <HeaderAuth />

        {/* Form */}
        {children}

        <Toaster />
      </section>
    </main>
  );
}
