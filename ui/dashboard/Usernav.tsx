'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import Icon from '../Icon';

export default function Usernav({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  const segment = useSelectedLayoutSegment();

  // segment to TitleCase
  const titleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

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
        <div className="flex items-center justify-center p-1 text-xl">
          <Icon name="flag-line" />
        </div>
        <div className="flex items-center justify-center rounded-full bg-highlight-primary px-4 py-2">
          T
        </div>
      </div>
    </div>
  );
}
