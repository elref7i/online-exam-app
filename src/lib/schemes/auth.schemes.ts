import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Please enter your email' })
    .min(1, 'Please enter your email')
    .email('Please provide a vaild email address'),
  password: z
    .string({ required_error: 'Please enter your password' })
    .min(1, 'Please enter your password'),
});

export type LoginFields = z.infer<typeof loginSchema>;
