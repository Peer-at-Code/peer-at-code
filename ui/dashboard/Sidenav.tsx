'use client';

import { NavItem, navItems } from '@/lib/nav-items';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import Logo from '../../public/logo.webp';
import AppLink from '../AppLink';
import Icon from '../Icon';

export default function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidenav() {
    setIsOpen(!isOpen);
  }

  return (
    <aside
      className={cn(
        'relative flex h-24 flex-row justify-between bg-dark shadow-md transition-all duration-300 ease-in-out sm:h-screen sm:flex-col',
        {
          'sm:w-60': isOpen,
          'w-full sm:w-28': !isOpen
        }
      )}
    >
      <div className="flex flex-row sm:flex-col">
        <div className="flex px-4 pt-0 sm:block sm:items-center sm:pt-4">
          <div className="flex items-center justify-between">
            <AppLink href="/" className="hidden sm:block">
              <Image src={Logo} alt="Peer-at Code Logo" className=" h-10 w-10" />
            </AppLink>
            <button
              className="flex items-center justify-center rounded bg-light-dark p-1"
              onClick={toggleSidenav}
            >
              <Icon
                name="arrow-left-line"
                className={cn('transition duration-300', {
                  'rotate-0': isOpen,
                  'rotate-180': !isOpen
                })}
              />
            </button>
          </div>
        </div>
        <div className="hidden px-4 pt-4 sm:block">
          <hr className="border-light-dark" />
        </div>
        <div className="hidden px-4 pt-4 sm:block">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.slug}>
                <NavItem item={item} isOpen={isOpen} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col">
        <div className="px-4 py-4">
          <button className="flex w-full items-center space-x-2 truncate rounded bg-light-dark p-3">
            <Icon className="text-2xl" name="user-line" />
            <span className="truncate">Hacktiviste</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ item, isOpen }: { item: NavItem; isOpen: boolean }) {
  const segment = useSelectedLayoutSegment();
  const isActive = segment?.split('/').pop() === item.slug || (item.slug === '' && !segment);
  return (
    <AppLink
      href={item.disabled ? '/dashboard' : `/dashboard/${item.slug}`}
      className={cn('flex rounded-md px-3 py-3 text-sm font-medium', {
        'bg-light-dark text-gray-400 hover:bg-light-dark/60 hover:text-white': !isActive,
        'bg-blue-500 text-white': isActive,
        'text-gray-600 hover:text-gray-600': item.disabled,
        'justify-start': isOpen,
        'justify-center': !isOpen
      })}
      passHref
    >
      <div
        className={cn('flex items-center', {
          'space-x-2': isOpen
        })}
      >
        <Icon className="text-2xl" name={item.icon} />
        <span
          className={cn({
            hidden: !isOpen
          })}
        >
          {item.name}
        </span>
      </div>
    </AppLink>
  );
}

{
  /* <aside
        className={cn(
          'fixed top-0 z-10 w-full bg-dark shadow-md transition-all duration-300 ease-in-out sm:block md:hidden'
        )}
      >
        <div className="flex items-center justify-end px-4 py-4">
          <div className="flex items-center space-x-4">
            <button onClick={onClick} className="flex h-10 w-full items-center space-x-2">
              <span className={cn('text-xl font-semibold')}>Peer-at-Code</span>
              <Icon
                className={cn(
                  'text-xl transition-transform duration-300 ease-in-out',
                  isOpen ? 'rotate-180' : 'rotate-0'
                )}
                name="arrow-up-s-line"
              />
            </button>
          </div>
        </div>
        <div
          className={cn(
            'flex h-screen transform flex-col duration-100',
            isOpen ? 'block' : 'hidden'
          )}
        >
          <ul
            className={cn(
              'relative flex flex-col space-y-4 px-8 transition-all duration-300 ease-in-out'
            )}
          >
            {navItems.map((item) => (
              <li className="relative" key={item.slug} onClick={onClick}>
                <NavItem item={item} isOpen={isOpen} />
              </li>
            ))}
          </ul>
        </div>
      </aside> */
}
