import Leaderboard from '@/ui/Leaderboard';

export const metadata = {
  title: 'Tableau des scores - Peer-at Code',
  description: 'Suivez la progression des élèves en direct'
};

export default async function Page() {
  return <Leaderboard />;
}
