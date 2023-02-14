export const getChapters = async (): Promise<Chapter[]> => {
  const req = await fetch(`http://170.75.166.204/chapters`);

  let chapters = await req.json();

  if (!req.ok) {
    throw new Error('Failed to fetch puzzles');
  }

  if (!chapters) {
    return [];
  }

  chapters = chapters.filter((chapter: Chapter) => chapter.id !== 0);

  console.log(chapters);

  return chapters as Chapter[];
};

export const getPuzzlesByChapter = async (chapitre: number): Promise<Chapter | null> => {
  const req = await fetch(`http://170.75.166.204/chapter/${chapitre}`);

  const { puzzles, name, id } = await req.json();

  if (!req.ok) {
    throw new Error('Failed to fetch puzzles');
  }

  if (!puzzles) {
    return null;
  }

  return {
    name,
    id,
    puzzles
  };
};

export const getPuzzles = async (): Promise<{ chapters: Chapter[]; puzzles: Puzzle[] }> => {
  const chapters = await getChapters();
  let puzzles: Puzzle[] = [];

  for (const chapter of chapters) {
    const puzzlesByChapter = await getPuzzlesByChapter(chapter.id);
    puzzles = [...puzzles, ...puzzlesByChapter!.puzzles];
  }

  return {
    chapters: chapters as Chapter[],
    puzzles: puzzles as Puzzle[]
  };
};

export const getPuzzle = async (id: number): Promise<Puzzle> => {
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
  name: string;
  id: number;
  content: string;
};

export type Chapter = {
  name: string;
  id: number;
  puzzles: Puzzle[];
};
