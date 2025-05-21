import Header from "@/components/layout/header/header";
import Sidebar from "@/components/layout/sidebar/sidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* SideBar */}
      <Sidebar />
      {/* Right Section */}
      <main className="container pl-64 pt-10 min-h-screen">
        {/* Header */}
        <Header />

        {/* Main content */}
        {children}
      </main>
    </>
  );
}
