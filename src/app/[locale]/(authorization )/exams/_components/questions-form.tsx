"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AnswerFields, AnswerSchema } from "@/lib/schemes/exam.schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/tailwind-merge";
import TimerExam from "./timer-exam";
import { useCheckQuestions } from "../_hooks/use-questions";
import ExamScore from "./exam-score";
import ExamResult from "./exam-result";

type QuestionsFomrProps = {
  questions: Question[];
};
export default function QuestionsForm({ questions }: QuestionsFomrProps) {
  //States
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState("answer".toLowerCase());

  //Mutation
  const { isPending, checkQuestions, payload } = useCheckQuestions();

  // Variables
  const currentQuestion = questions[step];
  const numberQuestions = questions.length - 1;

  // Form
  const form = useForm<AnswerFields>({
    resolver: zodResolver(AnswerSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<AnswerFields> = async (values) => {
    await checkQuestions(values);
    setShow("score".toLowerCase());
  };

  return (
    <>
      {/* Exam */}
      {show === "answer".toLowerCase() && (
        <>
          {/* Header */}
          <header className="text-sm flex justify-between items-center mt-5 mb-0">
            {/* Number questions */}
            <p className="text-hiro">
              Questions {step + 1} of {questions.length}
            </p>

            {/* Timer */}
            <TimerExam
              duration={questions[step].exam.duration}
              onTimeChange={(date) => form.setValue("time", date.getMinutes())}
            />
          </header>

          {/* Steps */}
          <ul className="flex justify-between items-center">
            {Array.from({ length: questions.length }, (_, i) => i + 1).map(
              (i) => (
                <li
                  className={cn(
                    "size-3 mb-3 rounded-full bg-gray-500",
                    step + 1 >= i ? "bg-hiro" : "bg-gray-400"
                  )}
                  key={i}
                />
              )
            )}
          </ul>

          {/* Questions */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col"
            >
              <FormField
                control={form.control}
                name={`answers.${step}`}
                render={({ field }) => (
                  <FormItem className="gorw">
                    {/* Question */}
                    <FormLabel className="font-semibold text-xl relative">
                      {currentQuestion.question}
                    </FormLabel>

                    {/* Chosses */}
                    <FormControl className="mt-6">
                      <RadioGroup
                        value={answer}
                        onValueChange={(value) => {
                          setAnswer(value);
                          field.onChange({
                            questionId: currentQuestion._id,
                            correct: value,
                          });
                        }}
                        name={currentQuestion._id}
                        className="flex flex-col"
                      >
                        {currentQuestion.answers.map((answer) => (
                          <FormItem
                            key={answer.key}
                            className="flex items-center gap-3 p-2 rounded-md bg-[#EDEFF3] font-normal text-xl"
                          >
                            <FormControl>
                              <RadioGroupItem value={answer.key} />
                            </FormControl>
                            <FormLabel className="text-2xl pb-3">
                              {answer.answer}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>

                    {/* Feedback */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Buttons */}
              <div className="*:px-14 *:py-5 flex text-2xl font-bold justify-between items-center mt-5">
                <Button
                  type="button"
                  disabled={step === 0 || isPending}
                  onClick={() => {
                    const prevAnswer = form.getValues(`answers.${step - 1}`);

                    if (!prevAnswer?.correct) {
                      setAnswer("");
                    } else {
                      setAnswer(prevAnswer.correct);
                    }

                    setStep((prev) => prev - 1);
                  }}
                  variant={"outline"}
                >
                  Back
                </Button>
                <Button
                  type={numberQuestions > step ? "button" : "submit"}
                  disabled={(() => {
                    if (isPending) return true;

                    const currentAnswer = form.getValues(`answers.${step}`);

                    if (currentAnswer?.correct) return false;

                    return true;
                  })()}
                  onClick={() => {
                    form.setValue(`answers.${step}`, {
                      questionId: currentQuestion._id,
                      correct: answer,
                    });

                    const nextAnswer = form.getValues(`answers.${step + 1}`);
                    setAnswer(nextAnswer?.correct || ""); // حط القيمة لو موجودة

                    setStep((cur) =>
                      numberQuestions <= step ? step : cur + 1
                    );
                  }}
                  variant={"outline"}
                >
                  {numberQuestions === step ? "submit" : "Next"}
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}

      {/* Score */}
      {/*  */}
      {payload &&
        (show === "score".toLowerCase() ? (
          <ExamScore
            payload={payload}
            setShow={setShow}
          />
        ) : (
          <ExamResult
            questions={questions}
            payload={payload}
          />
        ))}
    </>
  );
}
