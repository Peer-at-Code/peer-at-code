import { cookies } from 'next/headers';

import Puzzles from '@/ui/Puzzles';

export const metadata = {
  title: 'Puzzles - Peer-at Code'
};

export default async function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  return (
    <div className="flex flex-col space-y-6">
      <Puzzles token={token!} />
    </div>
  );
}
