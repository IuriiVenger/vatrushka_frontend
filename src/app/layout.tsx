import { FC, PropsWithChildren } from 'react';

import Providers from './providers';

import type { Metadata } from 'next';

import '@/assets/styles/globals.scss';

import StoreProvider from '@/store/components/StoreProvider';

export const metadata: Metadata = {
  title: 'Доставка еды на заказ в Челябинске - фудмаркет «Ватрушка»',
  description:
    'Доставим свежий ароматный хлеб, выпечку, вкусные пироги, великолепные торты и пирожные, готовые рационы питания для всей семьи, полуфабрикаты и многое другое. Ждем ваших заявок по телефону: 8 (351)-700-79-81',
  openGraph: {
    type: 'website',
    title: 'Онлайн фудмаркет «Ватрушка»',
    description:
      'Доставим свежий ароматный хлеб, выпечку, вкусные пироги, великолепные торты и пирожные, готовые рационы питания для всей семьи, полуфабрикаты и многое другое. Ждем ваших заявок по телефону: 8 (351)-700-79-81',
    siteName: 'Онлайн фудмаркет Ватрушка',
    url: 'https://pirogvatrushka.ru/',
    images: [
      {
        url: 'https://pirogvatrushka.ru/img/header/logo.svg',
        width: 800,
        height: 600,
        alt: 'Logo',
      },
    ],
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider>
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  </StoreProvider>
);

export default RootLayout;
