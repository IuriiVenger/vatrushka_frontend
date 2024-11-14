'use client';

import { MenuProps, Button, Grid } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next-nprogress-bar';
import { FC, useEffect } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

import logo from '../../assets/images/logo_full.svg';

import Cart from './HeaderComponents/Cart';
import Menu from './HeaderComponents/Menu';
import MenuDrawer from './HeaderComponents/MenuDrawer';
import Search from './HeaderComponents/Search';
import UserMenu from './HeaderComponents/UserMenu';
import PreHeader from './PreHeader';

import useCart from '@/hooks/useCart';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectEntities } from '@/store/slices/entities';
import { toggleMenu, toggleSearch, resetAll, selectUI } from '@/store/slices/ui';

export type TMenuItem = Required<MenuProps>['items'][number];

const Header: FC = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const dispatch = useAppDispatch();
  const { isMenuOpened } = useAppSelector(selectUI);
  const { categories } = useAppSelector(selectEntities);

  const { cartCardsData, activeCart, removeGroupedCartItem, onGroupedCartItemQuantityChange } = useCart();

  const router = useRouter();

  const totalPrice = activeCart.data?.total_sum ?? 0;

  const onBurgerButtonClick = () => {
    dispatch(toggleMenu(!isMenuOpened));
  };

  const onCartClick = () => {
    router.push('/cart');
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
        <div className="mx-auto flex w-full max-w-320 items-center gap-12 px-10 pt-10 max-lg:gap-6 max-lg:pt-6 max-sm:gap-0 max-sm:py-2 max-xs:max-w-82 max-xs:gap-6 max-xs:px-0">
          <div className="flex min-w-45 items-center gap-6">
            <Button
              type="link"
              aria-label="Открыть/закрыть меню"
              onClick={onBurgerButtonClick}
              className="hidden w-min pl-0 text-textTertiary transition-all hover:text-textQuaternary max-lg:block"
              icon={isMenuOpened ? <RxCross2 className="h-6 w-6" /> : <HiOutlineMenuAlt2 className="h-6 w-6" />}
            />
            <Link href="/" onClick={onCloseAll}>
              <img
                alt="Логотип онлайн-фудмаркета Ватрушка"
                src={logo.src}
                className="h-14 w-45 max-md:h-10 max-md:w-32"
              />
            </Link>
          </div>
          <Menu catalogOptions={categories.data} />
          <div className="flex w-full items-center justify-end gap-8 max-md:gap-4">
            <Search />
            <UserMenu onCloseAll={onCloseAll} />
            <Cart
              onCloseAll={onCloseAll}
              cartItems={cartCardsData}
              onClick={onCartClick}
              totalPrice={totalPrice}
              onDeleteButtonClick={removeGroupedCartItem}
              onStepperCountChange={onGroupedCartItemQuantityChange}
            />
          </div>
        </div>
      </header>
      <MenuDrawer />
    </>
  );
};

export default Header;
