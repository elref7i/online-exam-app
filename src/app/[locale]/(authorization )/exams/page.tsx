import Exams from "@/components/features/exam-component/exams-component";

export default function Page() {
  return (
    <main>
      {/* Title */}
      <h1 className="font-[500] text-[18px] mb-6">Front-End Quiz</h1>

      {/* Exams */}
      <Exams check={true} />
    </main>
  );
}
