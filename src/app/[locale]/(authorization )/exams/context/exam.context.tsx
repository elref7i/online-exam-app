"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type ExamContextType = {
  duration: number | undefined;
  setDusration: React.Dispatch<React.SetStateAction<number | undefined>>;
};

type ExamProviderProps = {
  children: ReactNode;
};

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export default function ExamProvider({ children }: ExamProviderProps) {
  const [duration, setDusration] = useState<number | undefined>(undefined);
  console.log(duration);

  return (
    <ExamContext.Provider value={{ duration, setDusration }}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error("useExam must be used within an ExamProvider");
  }
  return context;
}
