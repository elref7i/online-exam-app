import React, { Suspense } from "react";
import SubjectsList from "./subjects-list";

export default function Subjects() {
  return (
    <section className="shadow-box-shadow rounded-[20px] py-8 px-4">
      {/* Title */}
      <header className="font-[500] text-2xl text-hiro flex justify-between items-center mb-6">
        <h2>Qizes</h2>
        <h3 className="cursor-pointer">View All</h3>
      </header>

      {/* Subjects */}
      <Suspense fallback={"loading"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SubjectsList />
        </div>
      </Suspense>
    </section>
  );
}
