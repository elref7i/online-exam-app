import ExamComponent from "./exams-component";

type ExamProps = {
  exams: Exam[];
  searchParams: SearchParams;
};

export default function ExamList({ exams, searchParams }: ExamProps) {
  return (
    <section className="space-y-6">
      {exams.map((exam) => (
        <ExamComponent
          searchParams={searchParams}
          key={exam._id}
          dataInfo={exam}
        />
      ))}
    </section>
  );
}
