import fetcher from './fetcher';

export const getChapters = async ({ token }: { token: string }): Promise<Chapter[]> => {
  const { data, status } = await fetcher.get(`/chapters`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const chapters = data;

  if (status !== 200) {
    throw new Error('Failed to fetch puzzles');
  }

  if (!chapters) {
    return [];
  }

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

export const getPuzzles = async ({ token }: { token: string }): Promise<Chapter[]> => {
  const chapters = await getChapters({ token });

  for (let i = 0; i < chapters.length; i++) {
    const chapter = chapters[i];
    const chapterData = await getChapter({ token, id: chapter.id });
    if (!chapterData) continue;
    chapters[i].puzzles = chapterData.puzzles;
  }

  return chapters as Chapter[];
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
  tags: Tag[] | null;
};

export type Chapter = {
  id: number;
  name: string;
  puzzles: Puzzle[];
  startDay?: string;
  endDay?: string;
};

export type Tag = {
  name: string;
};
