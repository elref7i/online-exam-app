"use client";
import useExamOnSubject from "../_hooks/use-exams-subject";

type Params = { params: { id: string } };

export default function Page({ params }: Params) {
  const { id } = params;
  console.log(id);

  const { payload } = useExamOnSubject(id);
  console.log(payload);

  return (
    <div>
      Subject
      <p>{params.id}</p>
    </div>
  );
}
