import React from "react";
import Statistics from "./_components/statistics";
import Subjects from "./_components/subjects";

export default function Page() {
  return (
    <section className="space-y-10 mb-8 mx-auto">
      {/* Statistics  */}
      <Statistics />

      {/* Subjects */}
      <Subjects />
    </section>
  );
}
