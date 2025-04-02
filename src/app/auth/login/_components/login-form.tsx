'use client';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ContinueWith from '@/components/features/continue/continue-with';
import { SubmitHandler, useForm } from 'react-hook-form';
import ValidationFeedback from '@/components/common/validation-feedback';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFields, loginSchema } from '@/lib/schemes/auth.schemes';

export default function LoginForm() {
  //Form
  const { register, handleSubmit, formState } = useForm<LoginFields>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  //Functions
  const onSubmit: SubmitHandler<LoginFields> = (values) => {
    console.log(values);
  };

  return (
    <>
      {/* Title */}
      <h2 className="font-bold text-2xl mb-3">Sign in</h2>

      {/* Form */}
      <form className="w-[410px]" onSubmit={handleSubmit(onSubmit)}>
        {/* Fields */}
        <div className="space-y-3 mb-8">
          {/* Email */}
          <div className="email">
            {/* Field */}
            <Input {...register('email')} type="email" placeholder="Email" />

            {/* Feddback */}
            <ValidationFeedback error={formState.errors.email} />
          </div>

          {/* Password */}
          <div className="password">
            <Input
              {...register('password')}
              className="mb-2"
              type="password"
              placeholder="Password"
            />

            {/* Feddback */}
            <ValidationFeedback error={formState.errors.password} />

            {/* Link recover */}
            <Link
              className="text-base text-end block text-hiro"
              href={'/auth/forgot-password'}
            >
              Recover Password ?
            </Link>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="bg-hiro w-full h-14 shadow-primary-shadow rounded-[20px] mb-8 hover:bg-hiro/90"
        >
          Sign in
        </Button>

        {/* Continue with */}
        <ContinueWith />
      </form>
    </>
  );
}
