import { cookies } from 'next/headers';
import { getPuzzle } from '@/lib/puzzles';
import Puzzle from '@/ui/Puzzle';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: number } }): Promise<Metadata> {
  const { id } = params;
  const token = cookies().get('token')?.value;

  if (!token) {
    notFound();
  }

  const puzzle = await getPuzzle({ token, id });

  return { title: `${puzzle.name} - Peer-at Code` };
}

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const token = cookies().get('token')?.value;

  if (!token) {
    notFound();
  }

  const puzzle = await getPuzzle({ token, id });

  if (!puzzle) {
    notFound();
  }

  return <Puzzle puzzle={puzzle} />;
}

// export const dynamicParams = true;

// export async function generateStaticParams() {
//   const { puzzles } = await getPuzzles();
//   // every id is a number, but we need to return a string
//   return puzzles.flatMap((puzzle) => ({ id: puzzle.id.toString() }));
// }
