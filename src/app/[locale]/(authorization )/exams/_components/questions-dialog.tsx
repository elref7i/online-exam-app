import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import getQuestions from "@/lib/api/questions.api";
import catchError from "@/lib/utils/catch-error";
import QuestionsForm from "./questions-form";
type QuestionsDialogProps = {
  searchParams?: SearchParams;
  examId: string;
};

export default async function QuestionsDialog({
  examId,
}: QuestionsDialogProps) {
  // Fetch data
  const [payload, error] = await catchError(() =>
    getQuestions(`exam=${examId}`)
  );

  if (error) return <div>{error}</div>;

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="bg-hiro px-6 py-1 rounded-[10px] text-sm">
          Start
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="overflow-auto  max-h-[600px] ">
        <DialogHeader className="sr-only">
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        {/* Modal Content */}
        {payload?.questions && <QuestionsForm questions={payload.questions} />}
      </DialogContent>
    </Dialog>
  );
}
