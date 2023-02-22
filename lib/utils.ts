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

/**
 * Permet de convertir une chaîne de caractères en majuscules.
 *
 * @param string - La chaîne de caractères à convertir.
 * @returns La chaîne de caractères convertie.
 */
export function titleCase(string: string) {
  return string
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
