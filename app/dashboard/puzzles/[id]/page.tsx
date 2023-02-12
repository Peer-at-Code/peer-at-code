import Puzzle from '@/ui/Puzzle';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    // <SWRFallback fallback={{ [`puzzles/${id}`]: puzzle }}>
    <Puzzle id={id} />
    // </SWRFallback>
  );
}

// export async function generateStaticParams() {
//   const { puzzles } = await getPuzzles();
//   return puzzles.map(({ id }) => ({ params: { id } }));
// }
