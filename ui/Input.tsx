import { forwardRef } from 'react';
import ErrorMessage from './ErrorMessage';
import Icon from './Icon';
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
        className="w-full rounded-md border-primary-600 bg-highlight-primary px-5 py-2.5 text-sm font-medium outline-0 focus:border-brand focus:bg-primary-800 focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50"
        autoComplete="off"
        {...props}
      />
    </Label>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
));

Input.displayName = 'Input';

export default Input;
