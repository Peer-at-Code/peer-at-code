import axios from 'axios';

export const getScores = async (): Promise<Score[]> => {
  const { data, status } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/leaderboard`, {
    insecureHTTPParser: true
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
};
