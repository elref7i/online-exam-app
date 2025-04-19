declare type Exams = {
  metadata: MetadataType;
  exams: Exam[];
};

declare type Exam = {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
};
