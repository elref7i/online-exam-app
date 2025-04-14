import { Progress } from "@/components/ui/progress";
import { FaFlag } from "react-icons/fa";
import person from "../../../../../../public/assets/images/Frame 40.png";
import Image from "next/image";
export default function Statistics() {
  return (
    <section className="grid grid-cols-[1fr_3fr] shadow-box-shadow rounded-[20px] py-8 px-4">
      <Image
        src={person}
        height={216}
        width={216}
        alt="person"
      ></Image>
      <div>
        {/*  Name person */}
        <div className="mb-6 space-y-1">
          <h1 className="font-bold text-hiro text-3xl">Ahmed Khaled Refai</h1>
          <p className="text-xl text-second-lead font-normal">Voloptatem aut</p>
        </div>

        {/* Range */}
        <Progress
          value={60}
          className="text-hiro mb-6"
        />

        {/* Statistics */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li className="flex items-center gap-3 p-1">
            <div className="bg-white shadow-box-shadow size-16 flex justify-center items-center rounded-sm">
              <FaFlag className="text-3xl text-hiro  " />
            </div>
            <div className="result text-first-lead">
              <h3 className="font-bold text-2xl">27</h3>
              <h4>Quiz Passed</h4>
            </div>
          </li>
          <li className="flex items-center gap-3 p-1">
            <div className="bg-white shadow-box-shadow size-16 flex justify-center items-center rounded-sm">
              <FaFlag className="text-3xl text-hiro  " />
            </div>
            <div className="result text-first-lead">
              <h3 className="font-bold text-2xl">27</h3>
              <h4>Quiz Passed</h4>
            </div>
          </li>
          <li className="flex items-center gap-3 p-1">
            <div className="bg-white shadow-box-shadow size-16 flex justify-center items-center rounded-sm">
              <FaFlag className="text-3xl text-hiro  " />
            </div>
            <div className="result text-first-lead">
              <h3 className="font-bold text-2xl">27</h3>
              <h4>Quiz Passed</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
