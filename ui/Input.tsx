import { forwardRef } from 'react';
import ErrorMessage from './ErrorMessage';
import Label from './Label';

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: React.ReactNode;
    error?: React.ReactNode;
    description?: React.ReactNode;
  }
>(({ className, label, description, error, ...props }, ref) => (
  <>
    <Label label={label} description={description} required={props.required} className={className}>
      <input
        ref={ref}
        className="w-full rounded-md border border-primary-600 bg-highlight-primary px-5 py-2.5 text-sm font-medium focus:border-brand focus:bg-primary-800 focus:outline-none disabled:opacity-50"
        {...props}
      />
    </Label>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
));

Input.displayName = 'Input';

export default Input;
