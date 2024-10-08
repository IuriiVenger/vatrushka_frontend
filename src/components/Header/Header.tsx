'use client';

import { MenuProps, Dropdown, Badge, Button, Grid } from 'antd';
import Link from 'next/link';
import { FC, useEffect, useReducer } from 'react';
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

export type TMenuItem = Required<MenuProps>['items'][number];

const cartItems: TMenuItem[] = [
  {
    key: 'cart',
    label: <CartList />,
    type: 'group',
  },
];

type TMenuState = {
  isMobileMenuOpen: boolean;
  isSubMenuOpen: boolean;
  isMobileSearchOpen: boolean;
};

export type TMenuAction =
  | { type: 'TOGGLE_MENU'; payload: boolean }
  | { type: 'TOGGLE_SUB_MENU'; payload: boolean }
  | { type: 'TOGGLE_SEARCH'; payload: boolean }
  | { type: 'CLOSE_ALL' };

const initialState: TMenuState = {
  isMobileMenuOpen: false,
  isSubMenuOpen: false,
  isMobileSearchOpen: false,
};

const updateRootPosition = (shouldSetFixed: boolean) => {
  const root: HTMLElement | null = document.querySelector('.ant-app');

  if (root) {
    root.style.position = shouldSetFixed ? 'fixed' : '';
    root.style.top = shouldSetFixed ? '0' : '';
    root.style.left = shouldSetFixed ? '0' : '';
    root.style.right = shouldSetFixed ? '0' : '';
  }
};

const menuReducer = (state: TMenuState, action: TMenuAction): TMenuState => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      updateRootPosition(action.payload);
      return {
        ...state,
        isMobileMenuOpen: action.payload,
        isSubMenuOpen: false,
        isMobileSearchOpen: action.payload ? false : state.isMobileSearchOpen,
      };
    case 'TOGGLE_SUB_MENU':
      return { ...state, isSubMenuOpen: action.payload };
    case 'TOGGLE_SEARCH':
      updateRootPosition(action.payload);
      return {
        ...state,
        isMobileSearchOpen: action.payload,
        isMobileMenuOpen: action.payload ? false : state.isMobileMenuOpen,
        isSubMenuOpen: action.payload ? false : state.isSubMenuOpen,
      };
    case 'CLOSE_ALL':
      updateRootPosition(false);
      return {
        isMobileMenuOpen: false,
        isSubMenuOpen: false,
        isMobileSearchOpen: false,
      };
    default:
      return state;
  }
};

export const Header: FC = () => {
  const [menuState, dispatchMenuState] = useReducer(menuReducer, initialState);
  const { isMobileMenuOpen, isSubMenuOpen, isMobileSearchOpen } = menuState;

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const onBurgerButtonClick = () => {
    dispatchMenuState({ type: 'TOGGLE_MENU', payload: !isMobileMenuOpen });
  };

  const onCloseAll = () => {
    dispatchMenuState({ type: 'CLOSE_ALL' });
  };

  useEffect(() => {
    if (screens.xl) {
      dispatchMenuState({ type: 'TOGGLE_MENU', payload: false });
    }

    if (screens.md) {
      dispatchMenuState({ type: 'TOGGLE_SEARCH', payload: false });
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
              icon={isMobileMenuOpen ? <RxCross2 className="h-6 w-6" /> : <HiOutlineMenuAlt2 className="h-6 w-6" />}
            />
            <Link href="/" onClick={onCloseAll}>
              <img alt="logo" src={logo.src} className="h-14 w-45 max-md:h-10 max-md:w-32" />
            </Link>
          </div>
          <Menu />
          <div className="flex w-full items-center justify-end gap-8 max-md:gap-4">
            <Search isMobileSearchOpen={isMobileSearchOpen} dispatchMenuState={dispatchMenuState} />
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
      <MenuDrawer
        isSubMenuOpen={isSubMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        dispatchMenuState={dispatchMenuState}
      />
    </>
  );
};
