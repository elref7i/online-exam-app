import ExamsList from "./_components/exam-list";

type Params = { params: { subjectId: string } };

export default function Page({ params }: Params) {
  const { subjectId } = params;

  return (
    <div>
      {/* Title */}
      <h1>Front-End Quiz</h1>

      {/* Content */}
      <ExamsList subjectId={subjectId} />
    </div>
  );
}
