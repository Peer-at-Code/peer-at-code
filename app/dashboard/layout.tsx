import { type ReactNode } from 'react';

import Wrapper from '@/ui/dashboard/Wrapper';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
