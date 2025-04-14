import { Button } from "@/components/ui/button";

type ExamsProps = {
  check: boolean;
};
export default function Exams({ check }: ExamsProps) {
  return (
    <section className="space-y-6">
      <div className="flex  justify-between items-center shadow-md p-4 rounded-md">
        {/* About exam */}
        <div>
          {/* Name exam */}
          <h2 className="font-medium mb-1">HTML</h2>

          {/* Number questions */}
          <h3 className={`text-sm text-first-lead ${!check && "mb-4"}`}>
            20 Question
          </h3>

          {/* Result exam */}
          {!check && (
            <p className="text-hiro text-[12px] font-semibold">
              18 corrected answers in 12 min.
            </p>
          )}
        </div>

        {/* Action exam */}
        <div>
          <h4 className="text-sm mb-2">15 Minutes</h4>

          {check === true ? (
            // Start exam
            <Button className="bg-hiro px-6 py-1 rounded-[10px] text-sm">
              Start
            </Button>
          ) : (
            // Answer exam
            <Button className="bg-hiro px-6 py-1 rounded-[10px] text-sm">
              Answer
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
