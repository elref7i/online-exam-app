import { getExamsOnSubject } from "@/lib/api/exams.api";
import { Suspense } from "react";
import ExamList from "../_components/exam-list";

type Params = { params: { examonsubjectid: string } };

export default async function Page({ params }: Params) {
  // Params
  const { examonsubjectid } = params;

  // Fetch data
  const payload = await getExamsOnSubject({ subjectId: examonsubjectid });
  // console.log(payload);

  return (
    <div>
      {/* Title */}
      <h1>Front-End Quiz</h1>

      {/* Content */}
      <Suspense fallback={<div>Loading...</div>}>
        <ExamList exams={payload.exams} />
      </Suspense>
    </div>
  );
}
