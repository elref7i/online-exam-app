declare type Subjects = {
  metadata: MetadataType;
  subjects: Subject[];
};

declare type Subject = {
  name: string;
  icon: string;
} & DatabaseProperties;
