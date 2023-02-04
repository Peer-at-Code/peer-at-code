/**
 * Un élément de navigation.
 * @typedef {Object} NavItem
 * @property {string} name - Le nom de l'élément de navigation.
 * @property {string} slug - Le slug de l'élément de navigation.
 * @property {boolean} [disabled] - Si l'élément de navigation est désactivé.
 */
export type NavItem = {
  name: string;
  slug: string;
  disabled?: boolean;
};

/**
 * Les éléments de navigation.
 * @type {NavItem[]}
 */
export const navItems: NavItem[] = [
  {
    name: 'Dashboard',
    slug: '',
    disabled: false
  },
  {
    name: 'Classement',
    slug: 'ranking',
    disabled: false
  },
  {
    name: 'Puzzles',
    slug: 'puzzles',
    disabled: false
  },
  {
    name: 'Badges',
    slug: 'badges',
    disabled: false
  },
  {
    name: 'Paramètres',
    slug: 'settings',
    disabled: false
  }
];
