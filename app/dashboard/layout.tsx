import Sidenav from '@/ui/dashboard/Sidenav';
import { type ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="pl-60">
      <Sidenav />
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  );
}
