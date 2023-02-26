import { getScores } from '@/lib/leaderboard';
import { cn } from '@/lib/utils';
import Avatar from '@/ui/Avatar';
import Select from '@/ui/Select';

// TODO: Generate this later
const scoreColors = ['text-yellow-400', 'text-gray-400', 'text-orange-400'];

// TODO: Generate this later
const options = [
  { value: '1i1', title: '1I1' },
  { value: '1i2', title: '1I2' },
  { value: '1i3', title: '1I3' },
  { value: '1i4', title: '1I4' },
  { value: '1i5', title: '1I5' },
  { value: '1i6', title: '1I6' },
  { value: '1i7', title: '1I7' },
  { value: '1i8', title: '1I8' }
];

export const metadata = {
  title: 'Tableau des scores',
  description: 'Suivez la progression des élèves en direct'
};

export default async function Page() {
  // TODO: CSR fetch data for leaderboard (useSWR) to make it more reactive
  const data = await getScores();
  return (
    <div className="flex h-full w-full flex-col space-y-4">
      <div className="w-full">
        <section className="flex flex-col space-y-8">
          <header className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Tableau des scores</h3>
              <p className="hidden text-muted sm:block">
                Suivez la progression des élèves en direct
              </p>
            </div>
            <Select className="w-28" options={options} />
          </header>
          <main className="flex flex-col justify-between space-x-0 space-y-4">
            {data.map((score, key) => (
              <div key={key} className="flex flex-col space-y-2">
                <div className="flex justify-between space-x-2">
                  <div className="flex items-center space-x-4">
                    <span className={cn('font-semibold', scoreColors[key])}>{key + 1}</span>
                    <div className="flex items-center space-x-2">
                      <Avatar name={score.pseudo} />
                      <span className="text-lg">{score.pseudo}</span>
                      <span className="text-sm text-muted">{score.group}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">Puzzles</span>
                      <span className="text-lg text-muted">{score.completions}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">Score</span>
                      <span className="text-lg text-muted">{score.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </section>
      </div>
    </div>
  );
}
