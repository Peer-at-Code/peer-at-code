import useSWR from 'swr';
import { getScores } from '../leaderboard';

export function useLeaderboard({ token }: { token: string }) {
  return useSWR('leaderboard', () => getScores({ token }));
}
