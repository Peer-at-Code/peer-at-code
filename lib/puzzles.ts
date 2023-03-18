import fetcher from './fetcher';

export const getChapters = async ({ token }: { token: string }): Promise<Chapter[]> => {
  const { data, status } = await fetcher.get(`/chapters`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  let chapters = data;

  if (status !== 200) {
    throw new Error('Failed to fetch puzzles');
  }

  if (!chapters) {
    return [];
  }

  chapters = chapters.filter((chapter: Chapter) => chapter.id !== 0);

  return chapters as Chapter[];
};

export const getChapter = async ({
  token,
  id
}: {
  token: string;
  id: number;
}): Promise<Chapter | null> => {
  const { data, status } = await fetcher.get(`/chapter/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const chapter = data;

  if (status !== 200) {
    throw new Error('Failed to fetch puzzles');
  }

  if (!chapter) {
    return null;
  }

  return chapter as Chapter;
};

export const getPuzzles = async ({
  token
}: {
  token: string;
}): Promise<{ chapters: Chapter[]; puzzles: Puzzle[] }> => {
  const chapters = await getChapters({ token });
  const puzzles: Puzzle[] = [];

  for (const chapter of chapters) {
    const puzzlesByChapter = await getChapter({ token, id: chapter.id });
    if (!puzzlesByChapter?.puzzles) continue;
    puzzles.push(...puzzlesByChapter!.puzzles);
  }

  return {
    chapters: chapters as Chapter[],
    puzzles: puzzles as Puzzle[]
  };
};

export const getPuzzle = async ({ token, id }: { token: string; id: number }): Promise<Puzzle> => {
  const { data, status } = await fetcher.get(`/puzzle/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const puzzle = data;

  if (status !== 200) {
    throw new Error('Failed to fetch puzzle');
  }

  if (!puzzle) {
    return {} as Puzzle;
  }

  return puzzle as Puzzle;
};

export type Puzzle = {
  id: number;
  name: string;
  content: string;
};

export type Chapter = {
  name: string;
  id: number;
  puzzles: Puzzle[];
};
