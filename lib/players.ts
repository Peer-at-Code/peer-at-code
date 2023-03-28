import fetcher from './fetcher';

export const getPlayer = async ({
  token,
  username = ''
}: {
  token: string;
  username?: string;
}): Promise<Player | null> => {
  const { data, status } = await fetcher.get(`/player/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const player = data;

  if (status !== 200) {
    throw new Error('Failed to fetch player');
  }

  if (!player) {
    return null;
  }

  return player as Player;
};

export type Player = {
  email: string;
  pseudo: string;
  firstnames: string;
  lastname: string;
  description: string;
  avatar: string;
  groups: Group[];
  score: number;
  tries: number;
  completions: number;
  rank: number;
  badges: Badge[] | null;
};

export type Badge = {
  name: string;
  level: number;
  logo?: string;
};

export type Group = {
  name: string;
  chapter?: number;
};
