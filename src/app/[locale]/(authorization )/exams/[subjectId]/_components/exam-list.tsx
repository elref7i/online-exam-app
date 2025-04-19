"use client";

import React from "react";
import useExamOnSubject from "../../_hooks/use-exams-subject";
import ExamComponent from "@/components/features/exam-component/exams-component";

export default function ExamsList({ subjectId }: { subjectId: string }) {
  const { payload, isLoading, error } = useExamOnSubject(subjectId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {payload?.exams.map((exam) => (
        <ExamComponent
          key={exam._id}
          check={true}
          dataInfo={exam}
        />
      ))}
    </div>
  );
}
