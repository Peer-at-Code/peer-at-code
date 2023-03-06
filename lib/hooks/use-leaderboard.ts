import useSWR from 'swr';
import { getScores } from '../leaderboard';

export function useLeaderboard() {
  return useSWR('leaderboard', () => getScores());
}
