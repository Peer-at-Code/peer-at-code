export const getChapters = async (): Promise<Chapter[]> => {
  const req = await fetch(`http://170.75.166.204/chapters`);

  const chapters = await req.json();

  if (!req.ok) {
    throw new Error('Failed to fetch puzzles');
  }

  if (!chapters) {
    return [];
  }

  return chapters as Chapter[];
};

export const getPuzzlesByChapter = async (chapitre: string): Promise<Puzzle[]> => {
  const req = await fetch(`http://170.75.166.204/chapter/${chapitre}`);

  const { puzzles } = await req.json();

  if (!req.ok) {
    throw new Error('Failed to fetch puzzles');
  }

  if (!puzzles) {
    return [];
  }

  return puzzles as Puzzle[];
};

export const getPuzzles = async (): Promise<{ chapters: Chapter[]; puzzles: Puzzle[] }> => {
  const chapters = await getChapters();
  let puzzles: Puzzle[] = [];

  for (const chapter of chapters) {
    const puzzlesByChapter = await getPuzzlesByChapter(chapter.id);
    puzzles = [...puzzles, ...puzzlesByChapter];
  }

  return {
    chapters: chapters as Chapter[],
    puzzles: puzzles as Puzzle[]
  };
};

export const getPuzzle = async (id: string): Promise<Puzzle> => {
  const req = await fetch(`http://170.75.166.204/puzzle/${id}`);

  const puzzle = await req.json();

  if (!req.ok) {
    throw new Error('Failed to fetch puzzle');
  }

  if (!puzzle) {
    return {} as Puzzle;
  }

  return puzzle as Puzzle;
};

export type Puzzle = {
  chapter: string;
  name: string;
  id: string;
  content: string;
};

export type Chapter = {
  name: string;
  id: string;
};
