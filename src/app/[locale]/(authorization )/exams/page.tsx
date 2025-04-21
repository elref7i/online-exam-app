import { getExams } from "@/lib/api/exams.api";
import ExamList from "./_components/exam-list";
import { Suspense } from "react";

export default async function Page() {
  // Fetch data
  const payload = await getExams();
  // console.log(payload);

  return (
    <main>
      {/* Title */}
      <h1 className="font-[500] text-[18px] mb-6">Front-End Quiz</h1>

      {/* Content */}
      <Suspense fallback={<div>Loading...</div>}>
        <ExamList exams={payload.exams} />
      </Suspense>
    </main>
  );
}
