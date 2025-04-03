import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js';

//Login Schema
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

// Register schema
export const registerSchema = z
  .object({
    username: z
      .string({ required_error: 'Username is required' })
      .min(1, 'Username is required')
      .min(2, 'Username canont be less than 2 characters')
      .max(10, 'Username canont exceed 10 characters'),
    firstName: z
      .string({ required_error: 'First Name is required' })
      .min(1, 'First Name is required')
      .min(2, 'First Name canont be less than 2 characters')
      .max(10, 'First Name canont exceed 10 characters'),
    lastName: z
      .string({ required_error: 'Last Name is required' })
      .min(1, 'Last Name is required')
      .min(2, 'Last Name canont be less than 2 characters')
      .max(10, 'Last Name canont exceed 10 characters'),
    email: z
      .string({ required_error: 'Email is required' })
      .min(1, 'Email is required')
      .email('Please provide a vaild email address'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(1, 'Password is required')
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must be at least 8 characters long and  (@$!%*?&).'
      ),
    rePassword: z
      .string({ required_error: 'Re-enter your password' })
      .min(1, 'Re-enter your password'),
    phone: z
      .string({ required_error: 'Phone is required' })
      .min(1, 'Phone is required')
      .refine((value) => isValidPhoneNumber(value) || 'Phone not valid'),
  })
  .refine((values) => values.password === values.rePassword, {
    message: 'Password do not match',
    path: ['rePassword'],
  });

export type RegisterFields = z.infer<typeof registerSchema>;

// Forgot password schema
export const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Please provide a vaild email address'),
});

export type ForgotPasswordFields = z.infer<typeof forgotPasswordSchema>;

// Set password schema
export const setPassworsSchema = z
  .object({
    password: z
      .string({ required_error: 'Password is required' })
      .min(1, 'Password is required')
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must be at least 8 characters long and  (@$!%*?&).'
      ),
    rePassword: z
      .string({ required_error: 'Re-enter your password' })
      .min(1, 'Re-enter your password'),
  })
  .refine((values) => values.password === values.rePassword, {
    message: 'Password do not match',
    path: ['rePassword'],
  });

export type SetPassswordFields = z.infer<typeof setPassworsSchema>;

// Forgot password schema
export const verfiySchema = z.object({
  resetCode: z
    .string({ required_error: 'Code is required' })
    .min(1, 'Code is required')
    .min(2, 'he code requires 6 digits')
    .max(6, 'Code is not correct'),
});

export type VerifyFields = z.infer<typeof verfiySchema>;
