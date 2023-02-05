'use client';

import { cn } from '@/lib/utils';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import Sidenav from './Sidenav';

export default function Wrapper({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  function toggleSidenav() {
    setIsOpen(!isOpen);
  }

  function useWidth() {
    const handleResize = useCallback(() => setWidth(window.innerWidth), []);
    useEffect(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
  }

  return (
    <div
      className={cn(
        'relative min-h-screen transition-all duration-300 ease-in-out',
        isOpen ? 'sm:pl-60' : 'sm:pl-24'
      )}
    >
      <Sidenav onClick={toggleSidenav} width={useWidth()} isOpen={isOpen} />
      <div
        className={cn(
          'mx-auto h-screen w-full transform px-2 pt-24 pb-8 duration-300 ease-in-out sm:px-0 sm:py-8',
          isOpen ? 'md:max-w-6xl' : 'md:max-w-7xl'
        )}
      >
        {children}
      </div>
    </div>
  );
}
