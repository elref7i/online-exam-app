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
