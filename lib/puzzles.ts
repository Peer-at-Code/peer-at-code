import axios from 'axios';

export const getChapters = async (): Promise<Chapter[]> => {
  const { data, status } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chapters`, {
    insecureHTTPParser: true
  });

  let chapters = data;

  if (status !== 200) {
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
  const { data, status } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/chapter/${chapitre}`,
    { insecureHTTPParser: true }
  );

  const { puzzles, name, id } = data;

  if (status !== 200) {
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
  const { data, status } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/puzzle/${id}`, {
    insecureHTTPParser: true
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
  name: string;
  id: number;
  content: string;
};

export type Chapter = {
  name: string;
  id: number;
  puzzles: Puzzle[];
};
