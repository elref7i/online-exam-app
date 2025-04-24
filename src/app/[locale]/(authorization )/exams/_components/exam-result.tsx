"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
type ExamResultProps = {
  questions: Question[];
  payload: CheckResponse;
};
export default function ExamResult({ questions, payload }: ExamResultProps) {
  console.log(questions);

  return (
    <div className="question grid grid-cols-12 gap-5 overflow-auto ">
      {/* Question */}
      {questions.map((question) => (
        <div
          key={question._id}
          className="col-span-6 bg-slate-100 shadow-lg p-2 rounded-md"
        >
          <h1 className="mb-2">{question.question}</h1>
          {question.answers.map((answer) => (
            <div
              key={answer.key}
              className="flex items-center space-x-2 space-y-2"
            >
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {answer.answer}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
