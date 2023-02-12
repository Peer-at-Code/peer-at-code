import Puzzles from '@/ui/Puzzles';

export default async function Page() {
  // const puzzles = await getPuzzles();

  return (
    <div className="flex h-full w-full flex-col justify-between space-y-4">
      <div className="flex flex-col space-y-6">
        <section className="flex flex-col space-y-6">
          {/* <SWRFallback fallback={{ ['puzzles']: puzzles }}> */}
          <Puzzles />
          {/* </SWRFallback> */}
        </section>
      </div>
    </div>
  );
}
