import Leaderboard from '@/ui/Leaderboard';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Tableau des scores - Peer-at Code',
  description: 'Suivez la progression des élèves en direct'
};

export default async function Page() {
  const token = cookies().get('token')?.value;
  return <Leaderboard token={token!} />;
}
