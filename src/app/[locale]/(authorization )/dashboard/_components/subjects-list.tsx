import Image from "next/image";
import React from "react";
import useSubjects from "../_hooks/use-subjects";
import { useRouter } from "@/i18n/navigation";

export default function SubjectsList() {
  // Navigation
  const router = useRouter();

  // Quieris
  const { error, payload, isLoading } = useSubjects();
  console.log(payload?.subjects);

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      {payload?.subjects.map((subject: Subject) => (
        <div
          key={subject._id}
          className="h-72 rounded-md overflow-hidden shadow-md relative"
        >
          {/* Image subject */}
          <Image
            src={subject.icon}
            sizes="100vw"
            fill
            className="object-cover"
            alt={subject.name}
          />

          {/* Content */}
          <div className="absolute inset-0  flex flex-col justify-end items-center mb-7 text-md ">
            <article className="bg-[#1935CA66] p-2 rounded-md text-white">
              {/* Subject name */}
              <h4
                onClick={() => router.push(`/dashboard/${subject._id}`)}
                className="font-bold cursor-pointer"
              >
                {subject.name}
              </h4>

              {/* Subject description */}
              <p>Voluptatem aut ut dignissimos blanditiis</p>
            </article>
          </div>
        </div>
      ))}
    </>
  );
}
