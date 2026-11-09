module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      colors: {
        surface: 'var(--surface)',
        'on-surface': 'var(--on-surface)',
        'on-surface-variant': 'var(--on-surface-variant)',
        'sc-low': 'var(--sc-low)',
        sc: 'var(--sc)',
        'sc-high': 'var(--sc-high)',
        'sc-highest': 'var(--sc-highest)',
        primary: 'var(--primary)',
        'on-primary': 'var(--on-primary)',
        'primary-c': 'var(--primary-c)',
        'on-primary-c': 'var(--on-primary-c)',
        'secondary-c': 'var(--secondary-c)',
        'on-secondary-c': 'var(--on-secondary-c)',
        'tertiary-c': 'var(--tertiary-c)',
        'on-tertiary-c': 'var(--on-tertiary-c)',
        'outline-v': 'var(--outline-v)',
      },
    },
  },
};
