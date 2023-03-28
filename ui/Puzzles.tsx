'use client';

import { usePuzzles } from '@/lib/hooks/use-puzzles';
import { type Chapter } from '@/lib/puzzles';
import { cn } from '@/lib/utils';
import AppLink from './AppLink';
import Icon from './Icon';

export default function Puzzles({ token }: { token: string }) {
  const { data, isLoading } = usePuzzles({ token });

  // SOme chapters have a start date and a end date (for example, the first chapter is only available for 2 weeks), I want to want to lock the chapter if the current date is not between the start and end date
  // I want to display a message to the user if the chapter is locked

  function isChapterLocked(chapter: Chapter) {
    return (
      chapter.startDay &&
      chapter.endDay &&
      new Date() > new Date(chapter.startDay) &&
      new Date() < new Date(chapter.endDay)
    );
  }

  return (
    <>
      {(!isLoading &&
        data?.map((chapter) => (
          <div key={chapter.id} className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold sm:text-2xl">
                Chapitre {chapter.id} - {chapter.name}{' '}
              </h3>
              <div className="h-1 w-1/4 rounded-lg bg-gray-200">
                <div className="h-1 w-1/2 rounded-lg bg-gradient-to-tl from-brand to-brand-accent" />
              </div>
            </div>
            <ul
              className={cn('flex flex-col space-y-4', {
                // If the chapter is locked i want to add a class to li children to make them unclickable
                'pointer-events-none': isChapterLocked(chapter)
              })}
            >
              {chapter.puzzles &&
                chapter.puzzles.map((puzzle) => (
                  <AppLink key={puzzle.id} href={`/dashboard/puzzles/${puzzle.id}`}>
                    <li
                      className={cn(
                        'group flex items-center justify-between rounded-md border-2 bg-primary-700 p-4 font-code hover:bg-primary-600',
                        {
                          'border-green-600/30': puzzle.tags
                            ?.map((tag) => tag.name.toLowerCase())
                            .includes('easy'),
                          'border-yellow-600/30': puzzle.tags
                            ?.map((tag) => tag.name.toLowerCase())
                            .includes('medium'),
                          'border-red-600/30': puzzle.tags
                            ?.map((tag) => tag.name.toLowerCase())
                            .includes('hard'),
                          'border-highlight-secondary/30': !puzzle.tags?.length
                        }
                      )}
                    >
                      <div className="flex gap-x-2">
                        <span className="text-base font-semibold">{puzzle.name}</span>
                        {puzzle.tags?.length && (
                          <div className="flex gap-x-2 text-sm text-muted">
                            {puzzle.tags
                              .filter((tag) => !['easy', 'medium', 'hard'].includes(tag.name))
                              .map((tag, i) => (
                                <span
                                  key={i}
                                  className={cn('inline-block rounded-md bg-primary-900 px-2 py-1')}
                                >
                                  {tag.name}
                                </span>
                              ))}
                          </div>
                        )}
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
                {[...Array(6).keys()].map((j) => (
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
