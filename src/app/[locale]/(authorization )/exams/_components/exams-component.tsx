import QuestionsDialog from "./questions-dialog";

type ExamsProps = {
  dataInfo: Exam;
};
export default function ExamComponent({ dataInfo }: ExamsProps) {
  const { duration, title, numberOfQuestions, _id: id } = dataInfo;
  return (
    <div className="flex  justify-between items-center shadow-md p-4 rounded-md">
      {/* About exam */}
      <div>
        {/* Name exam */}
        <h2 className="font-medium mb-1">{title}</h2>

        {/* Number questions */}
        <h3 className="text-sm text-first-lead  mb-4">
          {numberOfQuestions} Question
        </h3>
      </div>

      {/* Action exam */}
      <div>
        {/* Duration */}
        <h4 className="text-sm mb-2">{duration} Minutes</h4>

        {/* // Start exam */}
        <QuestionsDialog examId={id} />
      </div>
    </div>
  );
}
