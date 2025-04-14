import Header from "@/components/layout/header/header";
import Sidebar from "@/components/layout/sidebar/sidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="grid grid-cols-[1fr_4fr] gap-9">
        {/* SideBar */}
        <Sidebar />

        {/* Right Section */}
        <div className="container pt-10">
          {/* Header */}
          <Header />

          {/* Main content */}
          {children}
        </div>
      </div>
    </>
  );
}
