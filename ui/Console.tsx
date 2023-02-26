'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Console({ text, className }: { text: string; className?: string }) {
  const [message, setMessage] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  const typingDelay = 400; // The delay between each character being typed, in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypingIndex((prevIndex) => prevIndex + 1);
    }, typingDelay);

    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    if (typingIndex <= text.length) {
      setMessage(text.slice(0, typingIndex));
    }
  }, [typingIndex, text]);

  return (
    <div className="inline-block h-4">
      <span className={cn('text-4xl', className)}>{message}</span>
      <div
        className={cn('relative top-0.5 inline-block', {
          hidden: typingIndex % 2 === 0
        })}
      >
        &#95;
      </div>
    </div>
  );
}
