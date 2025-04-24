"use client";
import { cn } from "@/lib/utils/tailwind-merge";
import { useEffect, useState } from "react";
import { BsAlarmFill } from "react-icons/bs";

type TimerExamProps = {
  duration: number;
  onTimerEnd?: () => void;
  onTimeChange?: (date: Date) => void;
};
export default function TimerExam({
  duration,
  onTimerEnd,
  onTimeChange,
}: TimerExamProps) {
  //Stats
  const [date, setData] = useState(new Date(0).setMinutes(duration));

  //Effects
  useEffect(() => {
    // Set Interval
    const timerId = setInterval(() => {
      //Change State
      setData((prev) => {
        //Date now in State
        const currentDate = new Date(prev);

        //Check seconds and mintutes
        if (currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
          //Call void
          onTimerEnd?.();

          //Clear interval
          window.clearInterval(timerId);

          //Now date
          return Date.now();
        }

        //Invoke time Handler on each iteration
        onTimeChange?.(currentDate);

        // Set second snd substract one second .
        return currentDate.setSeconds(currentDate.getSeconds() - 1);
      });
    }, 1000);

    //End Interval
    return () => {
      window.clearInterval(timerId);
    };
  }, [onTimerEnd, onTimeChange]);

  return (
    <div
      className={cn(
        "text-green-700 flex items-center justify-center space-x-1"
      )}
    >
      <BsAlarmFill className="text-2xl font-bold" />
      <span className="font-bold text-xl">
        {Intl.DateTimeFormat("en-US", {
          minute: "2-digit",
          second: "2-digit",
        }).format(date)}
      </span>
    </div>
  );
}
