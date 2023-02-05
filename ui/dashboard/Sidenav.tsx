import { NavItem, navItems } from '@/lib/nav-items';
import { cn } from '@/lib/utils';
import { useSelectedLayoutSegment } from 'next/navigation';
import AppLink from '../AppLink';
import Icon from '../Icon';

export default function Sidenav({
  onClick,
  width,
  isOpen
}: {
  onClick: () => void;
  width: number;
  isOpen: boolean;
}) {
  return (
    (width >= 640 && (
      <aside
        className={cn(
          'hidden fixed top-0 left-0 z-10 h-full space-y-4 bg-dark shadow-md transition-all duration-300 ease-in-out sm:block',
          isOpen ? 'w-60' : 'w-24 '
        )}
      >
        <div className="px-8 pt-4">
          <div className="mx-auto items-center">
            <button onClick={onClick} className="flex h-10 w-full items-center space-x-2">
              <Icon
                className={cn(
                  'text-xl transition-transform duration-300 ease-in-out',
                  isOpen ? 'rotate-180' : 'rotate-0'
                )}
                name="arrow-right-s-line"
              />
              <span
                className={cn(
                  'text-xl font-semibold transition',
                  isOpen ? 'duration-400 opacity-100 delay-150' : 'opacity-0'
                )}
              >
                Peer-at-Code
              </span>
            </button>
          </div>
        </div>
        <hr className="mx-auto w-1/2 pb-4" />
        <ul
          className={cn(
            'relative flex flex-col space-y-4 transition-all duration-300 ease-in-out',
            isOpen ? ' px-8' : 'px-4'
          )}
        >
          {navItems.map((item) => (
            <li className="relative" key={item.slug}>
              <NavItem item={item} isOpen={isOpen} />
            </li>
          ))}
        </ul>
        <div
          className={cn(
            'absolute bottom-5 flex w-full items-center text-center',
            isOpen ? 'px-8' : 'px-4'
          )}
        >
          <button
            className={cn(
              'mx-auto w-full truncate rounded-md bg-light-dark py-3 transition-all duration-300 ease-in-out hover:bg-light-dark/60'
            )}
          >
            <span className="text-sm font-semibold">Session ici</span>
          </button>
        </div>
      </aside>
    )) || (
      <aside
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
      </aside>
    )
  );
}

function NavItem({ item, isOpen }: { item: NavItem; isOpen: boolean }) {
  const segment = useSelectedLayoutSegment();
  const isActive = segment?.split('/').pop() === item.slug || (item.slug === '' && !segment);
  return (
    <AppLink
      href={item.disabled ? '/dashboard' : `/dashboard/${item.slug}`}
      className={cn(
        'flex rounded-md px-3 py-3 text-sm font-medium transition duration-300 ease-in-out',
        {
          'bg-light-dark text-gray-400 hover:bg-light-dark/60': !isActive,
          'bg-blue-500 text-white': isActive,
          'text-gray-600 hover:text-gray-600': item.disabled,
          'justify-center': !isOpen
        }
      )}
      passHref
    >
      <div className={cn('flex items-center', isOpen && 'space-x-4')}>
        <Icon className="text-2xl" name={item.icon} />
        <span className={cn(isOpen ? 'block' : 'hidden')}>{item.name}</span>
      </div>
    </AppLink>
  );
}
