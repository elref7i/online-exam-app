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
import {
  ForgotPasswordFields,
  forgotPasswordSchema,
} from '@/lib/schemes/auth.schemes';
import { forgotPasswordAction } from '../_actions/forgot-pass.action';

export default function ForgotPassword() {
  const form = useForm<ForgotPasswordFields>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  //Functions
  const onSubmit: SubmitHandler<ForgotPasswordFields> = async (values) => {
    await forgotPasswordAction(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] space-y-5"
      >
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">Email</FormLabel>

              {/* Field */}
              <FormControl>
                <Input {...field} type="email" placeholder="Email" />
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

        {/* Contuinue with */}
        <ContinueWith />
      </form>
    </Form>
  );
}
