import { Cascader } from 'antd';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

import { navigationLinks } from '@/config/links';
import { AccountTabsOptions, NavigationLinks } from '@/constants';
import { catalogOptions } from '@/mocks';
import { TMenuLevelOneOption } from '@/types';

const forClientItems =
  Object.entries(navigationLinks).reduce<TMenuLevelOneOption[]>((acc, [key, value]) => {
    if (key !== NavigationLinks.ABOUT && key !== NavigationLinks.CONTACTS) {
      acc.push({
        value: value.title,
        label: <Link href={value.link}>{value.title}</Link>,
      });
    }
    return acc;
  }, []) || [];

const Menu = () => {
  const catalogItems = useMemo(
    () =>
      catalogOptions.map((item) => ({
        value: item.id,
        label: <Link href={`/${item.slug}`}>{item.name}</Link>,
      })),
    [catalogOptions],
  );

  return (
    <nav className="block text-lg leading-lg max-lg:hidden">
      <ul className="flex w-max items-center gap-8">
        <li>
          <Cascader options={catalogItems} expandTrigger="hover" placement="bottomLeft" className="max-w-64 text-wrap">
            <div className="flex cursor-pointer select-none items-center gap-2 transition-all hover:text-primaryHover">
              <span className="font-400">Каталог</span>
              <IoIosArrowDown className="text-primary" />
            </div>
          </Cascader>
        </li>
        <li>
          <Cascader
            options={forClientItems}
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
