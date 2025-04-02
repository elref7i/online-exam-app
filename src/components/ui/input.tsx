import * as React from 'react';
import { cn } from '@/lib/utils/tailwind-merge';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-14 w-full rounded-lg border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        //  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
