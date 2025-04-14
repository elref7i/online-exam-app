import Image from "next/image";
import React from "react";
import { quizes } from "../_constants/quize.constant";

export default function Quizes() {
  return (
    <section className="shadow-box-shadow rounded-[20px] py-8 px-4">
      {/* Title */}
      <header className="font-[500] text-2xl text-hiro flex justify-between items-center mb-6">
        <h2>Qizes</h2>
        <h3>View All</h3>
      </header>

      {/* Quizes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizes.map((quize) => (
          <div
            key={quize.name}
            className="rounded-md overflow-hidden shadow-md relative"
          >
            {/* Image Quiz */}
            <Image
              src={quize.image}
              width={330}
              height={293}
              alt="image-quiz"
            />

            {/* Content */}
            <div className="absolute inset-0  flex flex-col justify-end items-center mb-7 text-md ">
              <article className="bg-[#1935CA66] p-2 rounded-md text-white">
                {/* Quiz name */}
                <h4 className="font-bold">{quize.name}</h4>

                {/* Quiz description */}
                <p>{quize.discription}</p>
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
