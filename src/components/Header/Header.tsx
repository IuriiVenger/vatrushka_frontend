'use client';

import { MenuProps, Dropdown, Badge, message } from 'antd';
import Link from 'next/link';
import { FC } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { LuShoppingCart } from 'react-icons/lu';

import logo from '../../assets/images/logo_full.svg';

import { CartList } from './HeaderComponents/CartList';
import { Menu } from './HeaderComponents/Menu';
import { Search } from './HeaderComponents/Search';
import { UserInfo } from './HeaderComponents/UserInfo';
import { PreHeader } from './PreHeader';

import { color } from '@/config/variables';
import { cartList } from '@/mocks';

export type TMenuItem = Required<MenuProps>['items'][number];

export const Header: FC = () => {
  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const userItems: TMenuItem[] = [
    {
      label: <UserInfo user={{ name: 'Иван Иванов', phone: '+7 (912) 555-88-99', email: 'ivanov.ivan.22@mail.ru' }} />,
      key: 'info',
      type: 'group',
    },
    { type: 'divider' },
    { label: <Link href="/account">Профиль</Link>, key: 'profile' },
    { label: <Link href="/account">Текущие заказы</Link>, key: 'currentOrders' },
    { label: <Link href="/account">История заказов</Link>, key: 'ordersHistory' },
    { label: <Link href="/account">Мои адреса</Link>, key: 'addresses' },
    { type: 'divider' },
    { label: 'Выйти из аккаунта', key: 'logOut' },
  ];

  const cartItems: TMenuItem[] = [
    {
      key: 'cart',
      label: <CartList />,
      type: 'group',
    },
  ];

  return (
    <header className="w-full">
      <PreHeader />
      <div className="mx-auto flex w-full max-w-320 items-center justify-between gap-12 px-10 pt-10 max-lg:gap-6 max-sm:gap-0 max-sm:pt-2 max-xs:max-w-82 max-xs:gap-6 max-xs:px-0">
        <div className="flex items-center gap-6">
          <HiOutlineMenuAlt2 className="hidden h-7 w-7 cursor-pointer text-textTertiary transition-all hover:text-textQuaternary max-lg:block" />
          <Link href="/">
            <img alt="logo" src={logo.src} className="h-13.75 w-45 max-md:h-10 max-md:w-32" />
          </Link>
        </div>
        <Menu />
        <div className="flex items-center gap-8 max-md:gap-4">
          <Search />
          <Dropdown
            menu={{ items: userItems, onClick }}
            trigger={['click']}
            placement="bottomRight"
            overlayClassName="pt-2 w-60"
          >
            <FaRegUser className="h-6 w-4 cursor-pointer text-textTertiary transition-all hover:text-textQuaternary max-lg:h-5 max-lg:w-5" />
          </Dropdown>
          <Dropdown
            menu={{ items: cartItems, onClick }}
            trigger={['click']}
            placement="bottomRight"
            overlayClassName="pt-2"
          >
            <Badge count={cartList.length} className="max-xs:small" color={color.accent.default}>
              <LuShoppingCart className="h-5 w-5 cursor-pointer text-textTertiary transition-all hover:text-textQuaternary" />
            </Badge>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
