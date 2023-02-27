import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Create a Tailwind class with clsx and tailwind-merge to avoid
 * class conflicts.
 *
 * @param inputs - Tailwind classes to merge.
 *
 * @returns A Tailwind class.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convert a string to title case.
 *
 * @param string - The string to convert.
 *
 * @returns A title case string.
 */
export function titleCase(string: string) {
  return string
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Convert a string to a slug.
 *
 * @param pathname - The pathname to append to the URL.
 *
 * @returns The full URL.
 */
export const getURL = (pathname?: string) => {
  let url =
    process.env.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process.env.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;

  if (pathname) {
    // Add pathname without starting `/`
    url += pathname.slice(1);
  }
  return url;
};
