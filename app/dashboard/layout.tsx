import { type ReactNode } from 'react';

import { UserProvider } from '@/context/user';
import Wrapper from '@/ui/dashboard/Wrapper';
import { cookies } from 'next/headers';

export default async function Layout({ children }: { children: ReactNode }) {
  const token = cookies().get('token')!.value;
  return (
    <div className="flex h-screen w-full flex-col">
      <UserProvider token={token}>
        <Wrapper>{children}</Wrapper>
      </UserProvider>
    </div>
  );
}
