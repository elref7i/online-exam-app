import ExamComponent from "@/components/features/exam-component/exams-component";

type ExamProps = {
  exams: Exam[];
};

export default function ExamList({ exams }: ExamProps) {
  return (
    <section className="space-y-6">
      {exams.map((exam) => (
        <ExamComponent
          key={exam._id}
          check={true}
          dataInfo={exam}
        />
      ))}
    </section>
  );
}
