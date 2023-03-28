'use client';

import { useMe } from '@/lib/hooks/use-players';
import type { Player } from '@/lib/players';
import { createContext, type ReactNode } from 'react';

export const UserContext = createContext<{
  data: Player | null | undefined;
  isLoading: boolean;
  error: Error | null;
}>({
  data: null,
  isLoading: true,
  error: null
});

export const UserProvider = ({ token, children }: { token: string; children: ReactNode }) => {
  const { data, isLoading, error } = useMe({ token });
  return <UserContext.Provider value={{ data, isLoading, error }}>{children}</UserContext.Provider>;
};
