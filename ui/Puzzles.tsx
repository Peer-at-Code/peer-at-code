'use client';

import { usePuzzles } from '@/lib/hooks/use-puzzles';
import AppLink from './AppLink';
import Icon from './Icon';

export default function Puzzles() {
  const { data, isLoading } = usePuzzles();
  return (
    <>
      {(!isLoading &&
        data?.chapters?.map((chapter) => (
          <div key={chapter.id} className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold sm:text-2xl">
                Chapitre {chapter.id} - {chapter.name}
              </h3>
              <div className="h-1 w-1/4 rounded-lg bg-gray-200">
                <div className="h-1 w-1/2 rounded-lg bg-gradient-to-tl from-brand to-brand-accent" />
              </div>
            </div>
            <ul className="flex flex-col space-y-4">
              {data?.puzzles.map((puzzle) => (
                <AppLink key={puzzle.id} href={`/dashboard/puzzles/${puzzle.id}`}>
                  <li className="group flex items-center justify-between rounded-md bg-primary-700 p-4 font-code hover:bg-primary-600">
                    <span className="text-base font-semibold">{puzzle.name}</span>
                    <Icon
                      className="-translate-x-2 transform-gpu duration-300 group-hover:translate-x-0"
                      name="arrow-right-line"
                    />
                  </li>
                </AppLink>
              ))}
            </ul>
          </div>
        ))) || (
        <div className="flex flex-col space-y-6">
          {[...Array(3).keys()].map((i) => (
            <div key={i} className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-block h-8 w-1/2 rounded-lg bg-primary-600" />
                <span
                  className="inline-block h-1 w-1/4 animate-pulse rounded-lg bg-primary-600"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: '1s'
                  }}
                />
              </div>
              <ul className="flex flex-col space-y-4">
                {[...Array(7).keys()].map((j) => (
                  <span
                    key={j}
                    className="inline-block h-14 animate-pulse rounded-lg bg-primary-600"
                    style={{
                      animationDelay: `${j * 0.05}s`,
                      animationDuration: '1s'
                    }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
