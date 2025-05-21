import { getExams } from "@/lib/api/exams.api";
import ExamList from "./_components/exam-list";
import { Suspense } from "react";
import catchError from "@/lib/utils/catch-error";

type PageProps = {
  searchParams: SearchParams;
};

export default async function Page({ searchParams }: PageProps) {
  // Fetch data
  const [payload, error] = await catchError(getExams);

  return (
    <main>
      {/* Title */}
      <h1 className="font-[500] text-[18px] mb-6">Front-End Quiz</h1>

      {/* Content */}
      {payload && (
        <Suspense fallback={<div>Loading...</div>}>
          <ExamList
            exams={payload.exams}
            searchParams={searchParams}
          />
        </Suspense>
      )}

      {/* Error */}
      {error && <p className="text-red-600 text-center py-6">{error}</p>}
    </main>
  );
}
