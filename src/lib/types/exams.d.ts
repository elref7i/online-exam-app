declare type Exams = {
  metadata: MetadataType;
  exams: Exam[];
};

declare type Exam = {
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
} & DatabaseProperties;
