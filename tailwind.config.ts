import { color } from './src/assets/styles/color';

import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const spacing = {
  13.75: '3.45rem',
  17: '4.375rem',
  39: '9.75rem',
  45: '11.25rem',
  47: '11.75rem',
  54.5: '13.625rem',
  64: '16rem',
  70.5: '17.625rem',
  82: '20.5rem',
  96: '24rem',
  128: '32rem',
  300: '75rem',
  320: '80rem',
};

const colors = {
  transparent: color.transparent,
  black: color.black,
  white: color.white,

  primary: color.primary.default,
  primaryHover: color.primary.hover,
  primaryActive: color.primary.active,
  primaryBg: color.primary.bg,
  primaryBgHover: color.primary.bgHover,
  primaryBorder: color.primary.border,
  primaryBorderHover: color.primary.borderHover,

  accent: color.accent.default,
  accentHover: color.accent.hover,
  accentActive: color.accent.active,
  accentBg: color.accent.bg,
  accentBgHover: color.accent.bgHover,
  accentBorder: color.accent.border,
  accentBorderHover: color.accent.borderHover,

  link: color.link.default,
  linkHover: color.link.hover,
  linkActive: color.link.active,

  pinkTagBg: color.tag.pink.bg,
  pinkTagText: color.tag.pink.text,
  blueTagBg: color.tag.blue.bg,
  blueTagText: color.tag.blue.text,
  purpleTagBg: color.tag.purple.bg,
  purpleTagText: color.tag.purple.text,

  text: color.text.primary,
  textSecondary: color.text.secondary,
  textTertiary: color.text.tertiary,
  textQuaternary: color.text.quaternary,
  textQuinary: color.text.quinary,

  border: color.border.primary,
  borderSecondary: color.border.secondary,

  bg: color.bg.default,
  bgLayout: color.bg.layout,
  bgMask: color.bg.mask,

  shadow: color.shadow.default,
  shadowMedium: color.shadow.medium,
  shadowLight: color.shadow.light,

  success: color.success,
  warning: color.warning,
  error: color.error.default,
  errorHover: color.error.hover,
  errorActive: color.error.active,
};

const fontSize = {
  '4xl': '2.375rem', // 38px
  '3xl': '1.875rem', // 30px
  '2xl': '1.5rem', // 24px
  xl: '1.25rem', // 20px
  lg: '1rem', // 16px
  base: '0.875rem', // 14px
  sm: '0.75rem', // 12px
};

const lineHeight = {
  '4xl': '2.875rem', // 46px
  '3xl': '2.375rem', // 38px
  '2xl': '2rem', // 32px
  xl: '1.75rem', // 28px
  lg: '1.5rem', // 24px
  base: '1.375rem', // 22px
  sm: '1rem', // 16px
};

const config: Config = {
  important: true,

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-2xl': { max: '1535px' },
        'max-xl': { max: '1279px' },
        'max-lg': { max: '1023px' },
        'max-md': { max: '767px' },
        'max-sm': { max: '639px' },
        'max-xs': { max: '479px' },
        xs: '480px',
        'sm-height': { raw: '(min-height: 640px)' },
        'md-height': { raw: '(min-height: 768px)' },
        'sm-only': { min: '640px', max: '767px' },
        'md-only': { min: '768px', max: '1023px' },
        ...defaultTheme.screens,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['"Gilroy"', ...defaultTheme.fontFamily.sans],
      },
      spacing,
      aspectRatio: {
        '21/9': '21 / 9',
      },
    },

    maxHeight: spacing,

    colors,

    fontSize,
    lineHeight,
    boxShadow: {
      card: `0px 6px 16px 0px ${colors.shadowMedium}, 0px 3px 6px -4px ${colors.shadow}, 0px 9px 28px 8px ${colors.shadowLight}`,
    },
  },
  plugins: [],
};

export default config;
