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
  icon: string;
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
    icon: 'dashboard-line',
    disabled: false
  },
  {
    name: 'Classement',
    slug: 'leaderboard',
    icon: 'line-chart-line',
    disabled: false
  },
  {
    name: 'Puzzles',
    slug: 'puzzles',
    icon: 'code-s-slash-line',
    disabled: false
  },
  {
    name: 'Badges',
    slug: 'badges',
    icon: 'award-fill',
    disabled: false
  },
  {
    name: 'Paramètres',
    slug: 'settings',
    icon: 'equalizer-line',
    disabled: false
  }
];
