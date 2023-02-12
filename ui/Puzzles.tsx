'use client';

import { usePuzzles } from '@/lib/hooks/use-puzzles';
import AppLink from './AppLink';
import Icon from './Icon';

export default function Puzzles() {
  const { data, isLoading } = usePuzzles();
  return (
    <>
      {!isLoading &&
        data?.chapters?.map((chapter) => (
          <div key={chapter.id} className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                Chapitre {chapter.id} - {chapter.name}
              </h3>
              <div className="h-1 w-1/4 bg-gray-200">
                <div className="h-1 w-1/2 bg-brand" />
              </div>
            </div>
            <ul className="flex flex-col space-y-4">
              {data?.puzzles.map((puzzle) => (
                <AppLink key={puzzle.id} href={`/dashboard/puzzles/${puzzle.id}`}>
                  <li className="group flex justify-between rounded-md bg-primary-700 p-4 font-code hover:bg-primary-600">
                    <div className="flex space-x-4">
                      <span className="">{puzzle.id}</span>
                      <span className="font-semibold">{puzzle.name}</span>
                    </div>
                    <Icon
                      className="-translate-x-2 transform-gpu duration-300 group-hover:translate-x-0"
                      name="arrow-right-line"
                    />
                  </li>
                </AppLink>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
}
