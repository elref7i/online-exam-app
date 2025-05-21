import { Button } from "@/components/ui/button";

type ExamScoreProps = {
  payload: CheckResponse;
  setShow: React.Dispatch<React.SetStateAction<string>>;
};

export default function ExamScore({ payload, setShow }: ExamScoreProps) {

  return (
    <>
      {/* Title */}
      <h1>Your Score</h1>

      {/* Score */}
      <div className="flex justify-center items-center gap-7">
        <span className="size-20 flex items-center justify-center rounded-full font-bold text-2xl  border-4 border-red-600">
          {payload?.total}
        </span>
        <div className="space-y-3">
          {/* Correct */}
          <div className="text-hiro flex items-center justify-between gap-5 ">
            <h2>Correct </h2>
            <span className="size-6 flex items-center justify-center rounded-full border-2  border-hiro">
              {payload?.correct}
            </span>
          </div>

          {/* Incorrect */}
          <div className="text-red-600 flex items-center justify-between gap-5">
            <h2>InCorrect</h2>
            <span className="size-6 flex items-center justify-center rounded-full border-2  border-red-600 ">
              {payload?.wrong}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="*:px-14 *:py-5 flex text-2xl font-bold justify-between items-center mt-5">
        <Button
          type="button"
          variant={"outline"}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            setShow("result");
          }}
          type="button"
          className="bg-hiro rounded-2xl"
          variant={"default"}
        >
          Sohow Result
        </Button>
      </footer>
    </>
  );
}
