'use client';

import { Button, Divider, Grid } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import logo from '../../assets/images/logo_full.svg';

import { Contacts } from '../Contacts';

import { FooterLinks } from './FooterLinks';

export const Footer: FC = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-bgLayout">
      <div className="mx-auto max-w-320 gap-12 px-9 pt-9 max-xs:max-w-82 max-xs:gap-6 max-xs:px-0">
        <div className="flex justify-between text-text max-lg:flex-col max-lg:flex-wrap max-lg:justify-around max-lg:gap-6">
          <div className="order-1 flex flex-col justify-between max-lg:items-center max-lg:gap-6">
            <img alt="1" src={logo.src} className="h-13.75 w-45" />
            <div className="flex flex-col justify-between gap-2 max-lg:items-center">
              <p className="text-xl font-medium leading-xl">+ 7 (351) 700-79-81</p>
              <p className="text-nowrap">Доставка ежедневно с 8:00 до 20:00</p>
            </div>
          </div>
          {screens.xl ? (
            <FooterLinks />
          ) : (
            <div className="order-3 flex justify-around max-sm:flex-col max-sm:gap-6">
              <FooterLinks />
            </div>
          )}
          <div className="order-4 flex flex-col items-end justify-between max-lg:order-2 max-lg:items-center max-lg:gap-6">
            <Button size={screens.md ? 'middle' : 'small'} className="w-fit">
              Связаться с нами
            </Button>
            <Contacts />
          </div>
        </div>
      </div>
      <Divider />
      <div className="mx-auto flex w-full max-w-320 justify-between gap-4 px-9 pb-9 max-lg:flex-col-reverse max-lg:items-center max-sm:items-start max-xs:max-w-82 max-xs:px-0">
        <p className="text-text">(с) 2010-{currentYear} Ватрушка - доставка еды на дом в Челябинске</p>
        <Link href="https://www.google.com" className="text-text">
          Пользовательское соглашение
        </Link>
      </div>
    </footer>
  );
};
