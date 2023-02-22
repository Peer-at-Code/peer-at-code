'use client';

import { NavItem, navItems } from '@/lib/nav-items';
import { cn } from '@/lib/utils';
import { useSelectedLayoutSegment } from 'next/navigation';
import AppLink from '../AppLink';
import Icon from '../Icon';

export default function Sidenav({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <aside
      className={cn(
        'absolute z-10 h-screen w-28 border-r border-highlight-primary bg-gradient-to-b from-primary-800 to-primary-900 shadow-md transition-all duration-300 ease-in-out sm:relative sm:flex sm:flex-col lg:w-60',
        {
          'bottom-0 -translate-x-full sm:translate-x-0': !isOpen,
          'bottom-0 w-full sm:w-28': isOpen
        }
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex p-6">
          <AppLink className="truncate" href="/">
            <h1>Peer-at Code</h1>
          </AppLink>
        </div>
        <div className=" px-4 ">
          <hr className="border-highlight-primary" />
        </div>
        <div className="px-4 pt-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.slug}>
                <NavItem item={item} isOpen={isOpen} onClick={toggle} />
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 pt-4">
          <hr className="border-highlight-primary" />
        </div>
        <div className="px-4 pt-4">
          <ul className="space-y-4">
            <li>
              <NavItem
                item={{
                  name: 'Tutoriels',
                  slug: 'tutorials',
                  icon: 'question-line',
                  disabled: true
                }}
                isOpen={isOpen}
                onClick={toggle}
              />
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  item,
  isOpen,
  onClick
}: {
  item: NavItem;
  isOpen: boolean;
  onClick?: () => void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = segment?.split('/').pop() === item.slug || (item.slug === '' && !segment);
  return (
    <AppLink
      href={item.disabled ? '/dashboard' : `/dashboard/${item.slug}`}
      className={cn('flex justify-center rounded-md px-3 py-3 text-sm lg:justify-start', {
        'text-muted hover:text-secondary': !isActive,
        'bg-highlight-primary text-secondary': isActive,
        'text-gray-600 hover:text-gray-600': item.disabled,
        'justify-center lg:justify-start': isOpen,
        'justify-start sm:justify-center': !isOpen
      })}
      onClick={onClick}
      passHref
    >
      <div className="flex items-center space-x-2">
        <Icon className="text-2xl" name={item.icon} />
        <span
          className={cn('hidden lg:block', {
            'block sm:hidden': isOpen,
            hidden: !isOpen
          })}
        >
          {item.name}
        </span>
      </div>
    </AppLink>
  );
}
