/**
 * A navigation item.
 *
 * @typedef {Object} NavItem
 *
 * @property {string} name - The name of the navigation item.
 * @property {string} slug - The slug of the navigation item.
 * @property {boolean} [disabled] - Whether the navigation item is disabled.
 */
export type NavItem = {
  name: string;
  slug: string;
  icon: string;
  disabled?: boolean;
};

/**
 * Navigation items.
 *
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
