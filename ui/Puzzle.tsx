'use client';

import { usePuzzle } from '@/lib/hooks/use-puzzles';
import { notFound } from 'next/navigation';

import Button from './Button';
import Input from './Input';
import ToHTML from './ToHTML';

export default function Puzzle({ id }: { id: number }) {
  const { data: puzzle, isLoading } = usePuzzle(id);

  if (isLoading) {
    return <></>;
  }

  if (!puzzle) {
    notFound();
  }

  return (
    <div className="flex h-full w-full flex-col justify-between space-y-4">
      <div className="flex flex-col space-y-2">
        <h2 className="text-4xl font-bold">{puzzle.name}</h2>
        <p className="text-sm text-muted">Chapitre</p>
      </div>
      <div className="flex h-screen overflow-y-auto">
        <ToHTML className="font-code" data={puzzle.content} />
      </div>
      <form className="flex w-full flex-col justify-between sm:flex-row">
        <div className="flex flex-col space-x-0 sm:flex-row sm:space-x-6">
          <Input
            className="w-full sm:w-1/3"
            label="Réponse"
            name="answer"
            type="text"
            placeholder="12"
          />
          <Input
            className="h-16 w-full sm:w-1/3"
            label="Code"
            name="code_file"
            type="file"
            accept=".py,.js,.ts,.java,.rust,.c"
          />
        </div>
        <Button kind="brand" className="mt-6" type="submit">
          Envoyer
        </Button>
      </form>
    </div>
  );
}
