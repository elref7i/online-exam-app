'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RegisterFields, registerSchema } from '@/lib/schemes/auth.schemes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ContinueWith from '@/components/features/continue/continue-with';

export default function RegisterForm() {
  const form = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema),
  });

  const onSumbit: SubmitHandler<RegisterFields> = (values) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSumbit)}
        className="w-[500px] mt-10 space-y-3"
      >
        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">User Name</FormLabel>

              {/*Field  */}
              <FormControl>
                <Input type="text" placeholder="Username" {...field} />
              </FormControl>

              {/* FeedBack */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Fields name */}
        <div className="block md:flex items-center gap-2">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                {/* Label */}
                <FormLabel className="sr-only">Frist Name</FormLabel>

                {/* Field */}
                <FormControl>
                  <Input {...field} type="text" placeholder="First Name" />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1">
                {/* Label */}
                <FormLabel className="sr-only">Last Name</FormLabel>

                {/* Field */}
                <FormControl>
                  <Input {...field} type="text" placeholder="Last Name" />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

        {/* Fields Password */}
        <div className="block md:flex items-center gap-2">
          {/* Passwrod */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex-1">
                {/* Label */}
                <FormLabel className="sr-only">Password</FormLabel>

                {/* Field */}
                <FormControl>
                  <Input {...field} type="password" placeholder="password" />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Passsword */}
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem className="flex-1">
                {/* Label */}
                <FormLabel className="sr-only">Confirm Passsword</FormLabel>

                {/* Field */}
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirm Passsword"
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">Phone</FormLabel>

              {/* Field */}
              <FormControl>
                <Input {...field} type="tel" placeholder="Phone" />
              </FormControl>

              {/* Feedback */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          className="bg-hiro w-full h-14 shadow-primary-shadow rounded-[20px] mb-8 hover:bg-hiro/90"
        >
          Create Account
        </Button>

        {/* Contuinue with */}
        <ContinueWith />
      </form>
    </Form>
  );
}
