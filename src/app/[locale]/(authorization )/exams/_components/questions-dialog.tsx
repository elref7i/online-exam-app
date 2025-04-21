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

type QuestionsDialogProps = {
  examId: string;
};

export default function QuestionsDialog({ examId }: QuestionsDialogProps) {
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
          <DialogTitle>Are you absolutely sure?{examId}</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <QuestionsForm />
      </DialogContent>
    </Dialog>
  );
}
