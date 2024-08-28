import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const height = {
  16: '1rem',
  20: '1.25rem',
  24: '1.5rem',
  32: '2rem',
  38: '2.375rem',
  50: '3.125rem',
  56: '3.5rem',
  72: '4.5rem',
  88: '5.5rem',
  120: '7.5rem',
  144: '9rem',
  188: '11.75rem',
  216: '13.5rem',
  224: '14rem',
  240: '15rem',
  256: '16rem',
  260: '16.25rem',
  264: '16.5rem',
  282: '17.625rem',
  288: '18rem',
  300: '18.75rem',
  320: '20rem',
  360: '22.5rem',
  400: '25rem',
  440: '27.5rem',
  480: '30rem',
  512: '32rem',
  560: '35rem',
  640: '40rem',
  680: '42.5rem',
};

const width = {
  16: '1rem',
  20: '1.25rem',
  24: '1.5rem',
  32: '2rem',
  38: '2.375rem',
  50: '3.125rem',
  196: '12.25rem',
  240: '15rem',
  256: '16rem',
  280: '17.5rem',
  282: '17.625rem',
  288: '18rem',
  320: '20rem',
  384: '24rem',
  392: '24.5rem',
  400: '25rem',
  448: '28rem',
  450: '28.125rem',
  512: '32rem',
  528: '33rem',
  576: '36rem',
  608: '38rem',
  640: '40rem',
  680: '42.5rem',
  720: '45rem',
  800: '50rem',
  1200: '75rem',
};

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',

  success: '#27B552',
  warning: '#F9C827',
  error: '#F95F39',
  errorHover: '#FF8863',
  errorActive: '#D44326',

  primary: '#A96648',
  primaryHover: '#B5856B',
  primaryActive: '#824831',
  primaryBg: '#F6F0ED',
  primaryBgHover: '#DBD4CE',
  primaryBorder: '#CFC4BC',
  primaryBorderHover: '#C2A491',
  // primaryText: '#A96648',
  // primaryTextHover: '#B5856B',
  // primaryTextActive: '#824831',

  accent: '#6B8C6E',
  accentHover: '#8D998D',
  accentActive: '#48664C',
  accentBg: '#C1CCC0',
  accentBgHover: '#B4BFB4',
  accentBorder: '#A8B3A8',
  accentBorderHover: '#9CA69C',
  // accentText: '#6B8C6E',
  // accentTextHover: '#8D998D',
  // accentTextActive: '#48664C',

  link: '#A96648',
  linkHover: '#C2A491',
  linkActive: '#824831',

  pinkTagBg: '#FFF0F6',
  pinkTagText: '#EB2F96',
  blueTagBg: '#F0F5FF',
  blueTagText: '#2F54EB',
  purpleTagBg: '#F9F0FF',
  purpleTagText: '#722ED1',

  text: 'rgba(45, 45, 45, 0.88)',
  textSecondary: 'rgba(45, 45, 45, 0.65)',
  textTertiary: 'rgba(45, 45, 45, 0.45)',
  textQuaternary: 'rgba(45, 45, 45, 0.25)',

  border: '#D9D9D9',
  borderSecondary: '#F0F0F0',

  bg: '#fff',
  bgLayout: '#F8F7F6',
  bgMask: 'rgba(0, 0, 0, 0.40)',
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
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        'max-xs': { max: '479px' },
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '1023px' },
        'max-xl': { max: '1279px' },
        'max-2xl': { max: '1535px' },
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
    },

    colors,

    minHeight: height,
    maxHeight: height,
    height,

    minWidth: width,
    maxWidth: width,
    width,

    fontSize,
    lineHeight,
  },
  plugins: [],
};
export default config;
