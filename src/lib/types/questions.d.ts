// Questions
declare type Questions = {
  questions: Question[];
};

// Question
declare type Question = {
  answers: Answers[];
  type: "single_choice" | "multiple_choice";
  question: string;
  correct: string;
  subject: Subject;
  exam: Exam;
} & DatabaseProperties;

// Answers Question
declare type Answers = {
  answer: string;
  key: string;
};

declare type QuestionResult = {
  QID: string;
  Question: string;
  inCorrectAnswer: string;
  correctAnswer: string;
  answers: Record<string, string>; // أو ممكن تزود التفاصيل حسب المحتوى المتوقع
};

declare type CheckResponse = {
  correct: number;
  wrong: number;
  total: string;
  WrongQuestions: QuestionResult[];
  correctQuestions: QuestionResult[];
};
