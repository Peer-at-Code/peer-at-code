'use client';

import type { Puzzle as PuzzleType } from '@/lib/puzzles';
import { notFound } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Button from './Button';
import Input from './Input';
import ToHTML from './ToHTML';

type PuzzleData = {
  answer: string;
  code_file: File[];
};

export default function Puzzle({ puzzle }: { puzzle: PuzzleType }) {
  if (!puzzle) {
    notFound();
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<PuzzleData>({
    defaultValues: {
      answer: '',
      code_file: undefined
    }
  });

  async function onSubmit(data: PuzzleData) {
    const formData = new FormData();

    formData.append('answer', data.answer);
    formData.append('code_file', data.code_file[0]);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/puzzleResponse/${puzzle.id}`, {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      alert('Réponse correcte !');
    }
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
      <form
        className="flex w-full flex-col justify-between sm:flex-row"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="flex flex-col space-x-0 sm:flex-row sm:space-x-6">
          <Input
            className="w-full sm:w-1/3"
            label="Réponse"
            type="text"
            placeholder="12"
            {...register('answer')}
          />
          <Input
            className="h-16 w-full sm:w-1/3"
            label="Code"
            type="file"
            accept=".py,.js,.ts,.java,.rust,.c"
            {...register('code_file')}
          />
        </div>
        <Button kind="brand" className="mt-6" type="submit">
          Envoyer
        </Button>
      </form>
    </div>
  );
}
