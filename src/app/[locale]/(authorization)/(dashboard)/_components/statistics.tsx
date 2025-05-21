import { Progress } from "@/components/ui/progress";
import { FaFlag } from "react-icons/fa";
import person from "../../../../../../public/assets/images/Frame 40.png";
import Image from "next/image";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export default async function Statistics() {
  const session = await getServerSession(authOptions);

  return (
    <section className="grid grid-cols-12 space-x-5 space-y-2 justify-items-center lg:justify-items-stretch shadow-box-shadow rounded-[20px] py-8 px-4">
      {/* Image */}
      <div className="h-48 col-span-12 lg:col-span-2 rounded-md overflow-hidden ">
        <Image
          src={person}
          sizes="20vw"
          alt="person"
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="col-span-12 lg:col-span-10 text-center lg:text-start">
        {/*  Data person */}
        <div className="mb-6 space-y-1">
          {/* Name  */}
          <h1 className="font-bold text-hiro text-3xl">
            {session?.user.firstName}
            {""}
            {session?.user.lastName}
          </h1>

          {/* Email */}
          <p className="text-xl text-second-lead font-normal">
            {session?.user.email}
          </p>
        </div>

        {/* Range */}
        <Progress
          value={60}
          className="text-hiro mb-6"
        />

        {/* Statistics */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Quiz passed  */}
          <li className="flex items-center gap-3 p-1">
            <div className="bg-white shadow-box-shadow size-16 flex justify-center items-center rounded-sm">
              <FaFlag className="text-3xl text-hiro  " />
            </div>
            <div className="result text-first-lead">
              {/* Number */}
              <h3 className="font-bold text-2xl">27</h3>

              {/* Description */}
              <h4>Quiz Passed</h4>
            </div>
          </li>

          {/* Fastest time  */}
          <li className="flex items-center gap-3 p-1">
            {/* Icon */}
            <div className="bg-white shadow-box-shadow size-16 flex justify-center items-center rounded-sm">
              <FaFlag className="text-3xl text-hiro  " />
            </div>

            {/* Statistic Time */}
            <div className="result text-first-lead">
              {/* Number */}
              <h3 className="font-bold text-2xl">27 min</h3>

              {/* Description */}
              <h4>Fastest Time</h4>
            </div>
          </li>

          {/* Correct  answers  */}
          <li className="flex items-center gap-3 p-1">
            {/* Icon */}
            <div className="bg-white shadow-box-shadow size-16 flex justify-center items-center rounded-sm">
              <FaFlag className="text-3xl text-hiro  " />
            </div>

            {/* Statistic Time */}
            <div className="result text-first-lead">
              {/* Number */}
              <h3 className="font-bold text-2xl">27 min</h3>

              {/* Description */}
              <h4>Fastest Time</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
