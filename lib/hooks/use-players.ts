import useSWR from 'swr';
import { getPlayer } from '../players';

export function useMe({ token }: { token: string }) {
  return useSWR('me', () => getPlayer({ token }), {
    revalidateOnReconnect: false
  });
}

export function usePlayer({ token, username }: { token: string; username: string }) {
  return useSWR(`players/${username}`, () => getPlayer({ token, username }));
}
