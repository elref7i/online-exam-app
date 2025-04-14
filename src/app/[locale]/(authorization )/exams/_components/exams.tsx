import { Button } from "@/components/ui/button";

export default function Exams() {
  return (
    <section className="space-y-6">
      <div className="flex  justify-between items-center shadow-md p-4 rounded-md">
        {/* About exam */}
        <div>
          {/* Name exam */}
          <h2 className="font-medium mb-1">HTML</h2>

          {/* Number Questions */}
          <p className="text-sm text-first-lead">20 Question</p>
        </div>

        {/* Start exam */}
        <div>
          <h3 className="text-sm mb-2">15 Minutes</h3>
          <Button className="bg-hiro px-6 py-1 rounded-[10px] text-sm">
            Start
          </Button>
        </div>
      </div>
      <div className="flex  justify-between items-center shadow-md p-4 rounded-md">
        {/* About exam */}
        <div>
          {/* Name exam */}
          <h2 className="font-medium mb-1">HTML</h2>

          {/* Number Questions */}
          <p className="text-sm text-first-lead">20 Question</p>
        </div>

        {/* Start exam */}
        <div>
          <h3 className="text-sm mb-2">15 Minutes</h3>
          <Button className="bg-hiro px-6 py-1 rounded-[10px] text-sm">
            Start
          </Button>
        </div>
      </div>
    </section>
  );
}
