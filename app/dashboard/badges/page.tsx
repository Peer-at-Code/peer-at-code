'use client';

import { UserContext } from '@/context/user';
import Badge from '@/ui/Badge';
import { useContext } from 'react';

export default function Page() {
  const { data: me } = useContext(UserContext);
  return (
    <div className="flex h-full w-full flex-col space-y-4">
      <div className="w-full">
        <section className="flex flex-col space-y-4">
          <header className="flex flex-col">
            <h3 className="text-xl font-semibold">Mes badges</h3>
            <p className="hidden text-muted sm:block">
              Vos badges sont affichés ici, vous pouvez les partager avec vos amis
            </p>
          </header>
          <main className="flex flex-col justify-between space-x-0 space-y-4">
            <div className="flex space-x-2">
              {me?.badges ? (
                me?.badges.map((badge, i) => (
                  <Badge
                    key={i}
                    name={badge.name}
                    src={badge.logo || '/assets/badges/java.png'}
                    alt={badge.name}
                    level={badge.level}
                  />
                ))
              ) : (
                <p className="text-muted">Aucun badge</p>
              )}
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
