import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuestionsForm from "./questions-form";
import getQuestions from "@/lib/api/questions.api";
import { convertSearchParams } from "@/lib/utils/convert-search-params";
import catchError from "@/lib/utils/catch-error";
type QuestionsDialogProps = {
  searchParams: SearchParams;
};

export default async function QuestionsDialog({
  searchParams,
}: QuestionsDialogProps) {
  const [payload, error] = await catchError(() =>
    getQuestions(convertSearchParams(searchParams).toString())
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        {payload?.questions && <QuestionsForm questions={payload.questions} />}
      </DialogContent>
    </Dialog>
  );
}
