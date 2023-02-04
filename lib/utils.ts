import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Permet de créer une classe Tailwind avec clsx et tailwind-merge
 * pour éviter d'avoir des conflits de classes.
 *
 * @param inputs - Les classes à ajouter à la classe Tailwind.
 *
 * @returns La classe Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
