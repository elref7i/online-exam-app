"use client";
export default function QuestionsForm({ questions }: Questions) {
  return (
    <>
      <header className="text-sm flex justify-between items-center mb-2">
        <p className="text-hiro">Questions 1 of 20</p>
        <p className="text-green-700">14:59</p>
      </header>

      {/* Steps */}
      <ul className="flex justify-between items-center">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <li
            className="size-2 rounded-full bg-hiro"
            key={i}
          />
        ))}
      </ul>

      {/* Questions */}
      <div className="flex gap-1">
        {" "}
        {questions.map((question) => (
          <p key={question._id}>{question.exam.title}</p>
        ))}
      </div>
    </>
  );
}
