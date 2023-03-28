'use client';

import { UserContext } from '@/context/user';
import { titleCase } from '@/lib/utils';
import cookies from 'js-cookie';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import AvatarComponent from '../Avatar';
import Icon from '../Icon';
import Popover from '../Popover';

export default function Usernav({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const segment = useSelectedLayoutSegment();

  const { data: me, isLoading } = useContext(UserContext);

  useEffect(() => {
    if (isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);

  async function handleLogout() {
    cookies.remove('token');
    router.refresh();
  }

  return (
    <div className="z-50 flex w-full flex-row items-center justify-between border-b border-solid border-highlight-primary bg-secondary py-4 px-8">
      <div className="flex flex-row items-center space-x-2 sm:space-x-0">
        <div className="flex items-center">
          <button onClick={toggle} className="block sm:hidden">
            {isOpen ? <Icon name="close-line" /> : <Icon name="menu-2-line" />}
          </button>
        </div>
        {segment && (
          <div className="flex items-center justify-center text-highlight-secondary">
            {titleCase(segment)}
          </div>
        )}
      </div>
      <div className="flex flex-row items-center space-x-4">
        {!isLoading && me ? (
          <Popover
            open={isMenuOpen}
            onOpenChange={setIsMenuOpen}
            trigger={
              <button className="mx-auto flex items-center gap-2">
                <AvatarComponent name={me.pseudo} src={me.avatar} className="h-9 w-9" />
                <span>{me?.pseudo}</span>
              </button>
            }
          >
            <nav className="flex w-32 flex-col gap-2">
              <button
                className="flex items-center gap-1 p-2 text-error hover:bg-error/10"
                onClick={() => handleLogout()}
              >
                Se déconnecter
              </button>
            </nav>
          </Popover>
        ) : (
          <div className="animate-pulse">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-highlight-primary" />
              <div className="h-4 w-14 rounded-full bg-highlight-primary" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
