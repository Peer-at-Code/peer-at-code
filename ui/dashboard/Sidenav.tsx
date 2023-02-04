'use client';

import { NavItem, navItems } from '@/lib/nav-items';
import { cn } from '@/lib/utils';
import { useSelectedLayoutSegment } from 'next/navigation';
import AppLink from '../AppLink';

export default function Sidenav() {
  return (
    <div className="fixed top-0 left-0 h-full w-60 space-y-4 bg-dark shadow-md">
      <div className="px-6 pt-4">
        <div className="flex items-center">
          <div className="mx-auto">
            <AppLink href="/">
              <h1 className="text-2xl font-bold">Peer-at Code</h1>
            </AppLink>
          </div>
        </div>
      </div>
      <hr className="mx-auto w-1/2 pb-4" />
      <ul className="relative flex flex-col space-y-4 px-8">
        {navItems.map((item) => (
          <li className="relative" key={item.slug}>
            <NavItem item={item} />
          </li>
        ))}
      </ul>
      <div className="absolute bottom-5 flex w-full items-center text-center">
        <button className="mx-auto rounded-md bg-light-dark py-3 px-8 hover:bg-light-dark/60">
          <span className="text-sm font-semibold">Session ici plus tard</span>
        </button>
      </div>
    </div>
  );
}

function NavItem({ item }: { item: NavItem }) {
  const segment = useSelectedLayoutSegment();
  const isActive = segment?.split('/').pop() === item.slug || (item.slug === '' && !segment);
  return (
    <AppLink
      href={item.disabled ? '/dashboard' : `/dashboard/${item.slug}`}
      className={cn('block rounded-md px-3 py-3 text-sm font-medium', {
        'bg-light-dark text-gray-400 hover:bg-light-dark/60': !isActive,
        'bg-blue-500 text-white': isActive,
        'text-gray-600 hover:text-gray-600': item.disabled
      })}
      passHref
    >
      {item.name}
    </AppLink>
  );
}
