import Puzzles from '@/ui/Puzzles';

export default async function Page() {
  // const puzzles = await getPuzzles();

  return (
    <div className="flex flex-col space-y-6">
      {/* <SWRFallback fallback={{ ['puzzles']: puzzles }}> */}
      <Puzzles />
      {/* </SWRFallback> */}
    </div>
  );
}
