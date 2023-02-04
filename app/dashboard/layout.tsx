import Sidenav from '@/ui/dashboard/Sidenav';
import { type ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-4 min-h-screen md:pl-60 xl:mx-0">
      <Sidenav />
      <div className="mx-auto h-screen max-w-5xl py-8">{children}</div>
    </div>
  );
}
