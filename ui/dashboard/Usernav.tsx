'use client';

import { titleCase } from '@/lib/utils';
import { useSelectedLayoutSegment } from 'next/navigation';
import Icon from '../Icon';

export default function Usernav({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  const segment = useSelectedLayoutSegment();
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
        <button className="flex items-center text-2xl text-error">
          <Icon name="flag-line" />
        </button>
        <button className="flex items-center justify-center rounded-full border border-primary-400 bg-tertiary px-4 py-2">
          T
        </button>
      </div>
    </div>
  );
}
