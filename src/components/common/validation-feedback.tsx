import { FieldError } from 'react-hook-form';

type ValidationFeedbackProps = {
  error?: FieldError;
};

export default function ValidationFeedback({ error }: ValidationFeedbackProps) {
  if (!error) return null;
  return <p className="text-red-500 font-bold">{error.message}</p>;
}
