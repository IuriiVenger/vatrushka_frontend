'use client';

import { MenuProps, Dropdown, Badge, Button, Grid } from 'antd';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { LuShoppingCart } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';

import logo from '../../assets/images/logo_full.svg';

import CartList from './HeaderComponents/CartList';
import Menu from './HeaderComponents/Menu';
import MenuDrawer from './HeaderComponents/MenuDrawer';
import Search from './HeaderComponents/Search';
import UserMenu from './HeaderComponents/UserMenu';
import PreHeader from './PreHeader';

import { color } from '@/config/variables';
import { cartList } from '@/mocks';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectUI } from '@/store/selectors';
import { toggleMenu, toggleSearch, resetAll } from '@/store/slices/ui';

export type TMenuItem = Required<MenuProps>['items'][number];

const cartItems: TMenuItem[] = [
  {
    key: 'cart',
    label: <CartList />,
    type: 'group',
  },
];

const Header: FC = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const dispatch = useAppDispatch();
  const { isMenuOpened } = useAppSelector(selectUI);

  const onBurgerButtonClick = () => {
    dispatch(toggleMenu(!isMenuOpened));
  };

  const onCloseAll = () => {
    dispatch(resetAll());
  };

  useEffect(() => {
    if (screens.xl) {
      dispatch(toggleMenu(false));
    }

    if (screens.md) {
      dispatch(toggleSearch(false));
    }
  }, [screens]);

  return (
    <>
      <header className="w-full">
        <PreHeader />
        <div className="mx-auto flex w-full max-w-320 items-center gap-12 px-10 pt-10 max-lg:gap-6 max-md:pt-6 max-sm:gap-0 max-sm:py-2 max-xs:max-w-82 max-xs:gap-6 max-xs:px-0">
          <div className="flex min-w-45 items-center gap-6">
            <Button
              type="link"
              onClick={onBurgerButtonClick}
              className="hidden w-min pl-0 text-textTertiary transition-all hover:text-textQuaternary max-lg:block"
              icon={isMenuOpened ? <RxCross2 className="h-6 w-6" /> : <HiOutlineMenuAlt2 className="h-6 w-6" />}
            />
            <Link href="/" onClick={onCloseAll}>
              <img alt="logo" src={logo.src} className="h-14 w-45 max-md:h-10 max-md:w-32" />
            </Link>
          </div>
          <Menu />
          <div className="flex w-full items-center justify-end gap-8 max-md:gap-4">
            <Search />
            <UserMenu onCloseAll={onCloseAll} />
            <Dropdown
              menu={{ items: cartItems }}
              trigger={['click']}
              onOpenChange={onCloseAll}
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
      <MenuDrawer />
    </>
  );
};

export default Header;
