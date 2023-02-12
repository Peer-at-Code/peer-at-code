import useSWR from 'swr';
import { getChapters, getPuzzle, getPuzzles } from '../puzzles';

export function useChapters() {
  return useSWR('chapters', () => getChapters());
}

export function usePuzzles() {
  return useSWR('puzzles', () => getPuzzles());
}

export function usePuzzle(id: string) {
  return useSWR(`puzzles/${id}`, () => getPuzzle(id));
}
