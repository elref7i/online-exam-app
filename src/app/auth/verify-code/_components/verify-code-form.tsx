'use client';
import { Input } from '@/components/ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import ContinueWith from '@/components/features/continue/continue-with';
import { verifySchema, VerifyFields } from '@/lib/schemes/auth.schemes';
import { verifyAction } from '../_actions/verify-code.action';

export default function VerifyCodeForm() {
  const form = useForm<VerifyFields>({
    defaultValues: {
      resetCode: '',
    },
    resolver: zodResolver(verifySchema),
  });

  //Functions
  const onSubmit: SubmitHandler<VerifyFields> = async (values) => {
    await verifyAction(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] space-y-5"
      >
        {/* Code */}
        <FormField
          control={form.control}
          name="resetCode"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">Enter Code</FormLabel>

              {/* Field */}
              <FormControl>
                <Input {...field} type="text" placeholder="Enter Code" />
              </FormControl>

              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          disabled={form.formState.isSubmitted && !form.formState.isValid}
          type="submit"
          className="bg-hiro w-full h-14 shadow-primary-shadow rounded-[20px] mb-8 hover:bg-hiro/90"
        >
          Send
        </Button>

        {/* Continue with */}
        <ContinueWith />
      </form>
    </Form>
  );
}
