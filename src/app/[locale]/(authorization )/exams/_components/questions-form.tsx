"use client";
import useQuestionOnExam from "../_hooks/use-questions";

export default function QuestionsForm() {
  //Queris
  const { payload } = useQuestionOnExam();
  console.log(payload);

  return (
    <div>
      ExamForm
      {payload?.questions.map((quesstion) => (
        <li key={quesstion._id}>{quesstion._id}</li>
      ))}
    </div>
  );
}
