import { getPuzzle, getPuzzles } from '@/lib/puzzles';
import Puzzle from '@/ui/Puzzle';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;

  const puzzle = await getPuzzle(id);

  if (!puzzle) {
    notFound();
  }

  return <Puzzle puzzle={puzzle} />;
}

export async function generateStaticParams() {
  const { puzzles } = await getPuzzles();
  // every id is a number, but we need to return a string
  return puzzles.map((puzzle) => ({ id: puzzle.id.toString() }));
}
