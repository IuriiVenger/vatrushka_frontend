import { Cascader, CascaderProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next-nprogress-bar';
import React, { FC, useMemo } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

import { Categories } from '@/__generated__/graphql';
import { navigationLinks } from '@/config/links';
import { AccountTabsOptions, NavigationLinks } from '@/constants';
import { TMenuLevelOneOption } from '@/types';

type TCatalogOption = {
  value: string;
  label: string;
};

const forClientItems =
  Object.entries(navigationLinks).reduce<TMenuLevelOneOption[]>((acc, [key, value]) => {
    if (
      // key !== NavigationLinks.ABOUT &&
      key !== NavigationLinks.CONTACTS
    ) {
      acc.push({
        value: value.link,
        label: value.title,
      });
    }
    return acc;
  }, []) || [];

type MenuProps = {
  catalogOptions: Categories[] | null;
};

const Menu: FC<MenuProps> = ({ catalogOptions }) => {
  const router = useRouter();

  const catalogItems: TCatalogOption[] = useMemo(
    () =>
      catalogOptions
        ? catalogOptions.reduce((acc, item) => {
            if (item.slug) {
              acc.push({
                value: item.slug,
                label: item.name,
              });
            }
            return acc;
          }, [] as TCatalogOption[])
        : [],
    [catalogOptions],
  );

  const onChange: CascaderProps<TCatalogOption | TMenuLevelOneOption>['onChange'] = (value) => {
    router.push(`/${value}`);
  };

  return (
    <nav className="block text-lg leading-lg max-lg:hidden">
      <ul className="flex w-max items-center gap-8">
        <li>
          <Cascader
            options={catalogItems}
            onChange={onChange}
            expandTrigger="hover"
            placement="bottomLeft"
            className="max-w-64 text-wrap"
            notFoundContent="Категории каталога не найдены"
          >
            <div className="flex cursor-pointer select-none items-center gap-2 transition-all hover:text-primaryHover">
              <span className="font-400">Каталог</span>
              <IoIosArrowDown className="text-primary" />
            </div>
          </Cascader>
        </li>
        <li>
          <Cascader
            options={forClientItems}
            onChange={onChange}
            expandTrigger="hover"
            expandIcon={<IoIosArrowForward />}
            placement="bottomLeft"
            className="text-nowrap"
          >
            <div className="flex cursor-pointer select-none items-center gap-2 transition-all hover:text-primaryHover">
              <span>Клиентам</span>
              <IoIosArrowDown className="text-primary" />
            </div>
          </Cascader>
        </li>
        <li>
          <Link href="/contacts" className="select-none transition-all hover:text-primaryHover">
            Контакты
          </Link>
        </li>
        <li>
          <Link
            href={`/account?tab=${AccountTabsOptions.CURRENT_ORDERS}`}
            className="select-none transition-all hover:text-primaryHover"
          >
            Мои заказы
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
