import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { ReactNode } from 'react';

type PopoverProps = {
  trigger: ReactNode;
  tooltip?: ReactNode;
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function Popover({ trigger, tooltip, children, open, onOpenChange }: PopoverProps) {
  return (
    <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {/* {tooltip ? (
        <Tooltip label={tooltip}>
          <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
        </Tooltip>
      ) : ( */}
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      {/* )} */}
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          className="data-open:animate-fadeIn data-closed:animate-fadeOut z-20 rounded border border-highlight-primary bg-secondary"
          sideOffset={5}
          collisionPadding={8}
        >
          {children}
          <PopoverPrimitive.Arrow className=" fill-white" />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
