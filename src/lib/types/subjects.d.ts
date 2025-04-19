declare type Subjects = {
  metadata: Metadata;
  subjects: Subject[];
};

// meta data
declare type Metadata = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
};

declare type Subject = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
};
