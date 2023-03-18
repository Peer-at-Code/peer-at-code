import fetcher from './fetcher';

export const getScores = async ({ token }: { token: string }): Promise<Score[]> => {
  const { data, status } = await fetcher.get(`/leaderboard`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const scores = data;

  if (status !== 200) {
    throw new Error('Failed to fetch scores');
  }

  if (!scores) {
    return [] as Score[];
  }

  return scores as Score[];
};

export type Score = {
  score: number;
  tries: number;
  completions: number;
  pseudo: string;
  group: string;
  avatar: string;
};
