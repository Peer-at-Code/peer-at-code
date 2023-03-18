'use client';

import { useLeaderboard } from '@/lib/hooks/use-leaderboard';
import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';
import AvatarComponent from './Avatar';
import Select from './Select';

const scoreColors = ['text-yellow-400', 'text-gray-400', 'text-orange-400'];

export default function Leaderboard({ token }: { token: string }) {
  const { data, isLoading } = useLeaderboard({ token });

  const [filter, setFilter] = useState('');

  let options;

  if (data) {
    options = data
      .filter((score, index, self) => {
        return index === self.findIndex((t) => t.group === score.group) && score.group !== '';
      })
      .sort((a, b) => (a.group > b.group ? 1 : -1))
      .map((score) => ({ value: score.group, title: score.group }));
    options.unshift({ value: '', title: 'Tous' });
    options.push({ value: 'no-group', title: 'Sans groupe' });
  }

  const filteredData = useMemo(() => {
    if (filter) {
      if (filter === 'no-group') {
        return data?.filter((score) => score.group === '');
      }
      return data?.filter((score) => score.group === filter);
    }
    return data;
  }, [data, filter]);

  return (
    <section className="flex h-full w-full flex-col space-y-4">
      <header className="sticky flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Tableau des scores</h3>
          <p className="hidden text-muted sm:block">Suivez la progression des élèves en direct</p>
        </div>
        {(filteredData && (
          <Select
            className="w-32"
            options={options || []}
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
        )) || (
          <span
            className="inline-block h-12 w-32 animate-pulse rounded-lg bg-primary-600"
            style={{
              animationDuration: '1s'
            }}
          />
        )}
      </header>
      <main className="flex flex-col justify-between space-x-0 space-y-4 pb-4">
        <ul className="flex flex-col space-y-2">
          {(!isLoading &&
            filteredData?.map((score, key) => (
              <li key={key} className="flex justify-between space-x-2">
                <div className="flex items-center space-x-4">
                  <span className={cn('font-semibold', scoreColors[key])}>{key + 1}</span>
                  <div className="flex items-center space-x-2">
                    <AvatarComponent name={score.pseudo} src={score.avatar} className="h-9 w-9" />
                    <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
                      <span className="text-lg">{score.pseudo}</span>
                      <span className="text-sm text-muted">{score.group}</span>
                    </div>
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
              </li>
            ))) ||
            [...Array(20).keys()].map((i) => (
              <span
                key={i}
                className="inline-block h-12 animate-pulse rounded-lg bg-primary-600"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
        </ul>
      </main>
    </section>
  );
}
