'use client';

import { useState, type ReactNode } from 'react';

import Sidenav from './Sidenav';
import Usernav from './Usernav';

export default function Wrapper({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidenav isOpen={isOpen} toggle={toggle} />
      <div className="flex flex-1 flex-col">
        <Usernav isOpen={isOpen} toggle={toggle} />
        <div className="flex w-full flex-1 transform flex-col overflow-y-scroll p-8 duration-300 ease-in-out">
          {children}
        </div>
      </div>
    </div>
  );
}
