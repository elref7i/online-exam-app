'use client';
import { Input } from '@/components/ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SetPassswordFields,
  setPassworsSchema,
} from '@/lib/schemes/auth.schemes';
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
import { setPasswordAction } from '../_actions/set-password.action';

export default function SetPasswordForm() {
  const form = useForm<SetPassswordFields>({
    defaultValues: {
      email: '',
      newPassword: '',
    },
    resolver: zodResolver(setPassworsSchema),
  });

  //Functions
  const onSubmit: SubmitHandler<SetPassswordFields> = async (values) => {
    await setPasswordAction(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[500px] space-y-3"
      >
        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">Email</FormLabel>

              {/* Field */}
              <FormControl>
                <Input {...field} type="email" placeholder="Enter Email" />
              </FormControl>

              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">New Password</FormLabel>

              {/* Field */}
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Enter new password"
                />
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
          Change Password
        </Button>

        {/* Contuinue with */}
        <ContinueWith />
      </form>
    </Form>
  );
}
