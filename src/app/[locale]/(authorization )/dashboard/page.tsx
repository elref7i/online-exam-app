import React from "react";
import Statistics from "./_components/statistics";
import Quizes from "./_components/quizes";

export default function Page() {
  return (
    <main className="space-y-10 mb-8">
      <Statistics />
      <Quizes />
    </main>
  );
}
