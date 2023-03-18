import useSWR from 'swr';

import { getChapters, getPuzzle, getPuzzles } from '../puzzles';

export function useChapters({ token }: { token: string }) {
  return useSWR('chapters', () => getChapters({ token }));
}

export function usePuzzles({ token }: { token: string }) {
  return useSWR('puzzles', () => getPuzzles({ token }));
}

export function usePuzzle({ token, id }: { token: string; id: number }) {
  return useSWR(`puzzles/${id}`, () => getPuzzle({ token, id }));
}
