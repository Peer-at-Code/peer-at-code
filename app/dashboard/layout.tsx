import { type ReactNode } from 'react';

import Sidenav from '@/ui/dashboard/Sidenav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 flex-col overflow-hidden sm:flex-row">
        <Sidenav />
        <div className="mx-4 flex flex-1 transform flex-col pt-4 pb-8 duration-300 ease-in-out sm:mx-auto sm:py-8 md:max-w-6xl">
          {children}
        </div>
      </div>
    </div>
  );
}
