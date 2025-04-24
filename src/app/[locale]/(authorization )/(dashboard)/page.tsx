import React from "react";
import Statistics from "./_components/statistics";
import Subjects from "./_components/subjects";

export default function Page() {
  return (
    <main className="space-y-10 mb-8">
      {/* Statistics  */}
      <Statistics />

      {/* Subjects */}
      <Subjects />
    </main>
  );
}
