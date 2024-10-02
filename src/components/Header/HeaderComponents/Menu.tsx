import { Cascader, message, CascaderProps, MenuProps, Dropdown } from 'antd';
import Link from 'next/link';
import React from 'react';

import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

import { AccountTabs } from '@/constants';
import { menuLevelOneOptions } from '@/mocks';
import { TMenuLevelOneOption } from '@/types';

const clientItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.google.com">
        1st menu item
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.google.com">
        2nd menu item
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.google.com">
        3rd menu item
      </Link>
    ),
  },
];

export const Menu = () => {
  const onChange: CascaderProps<TMenuLevelOneOption>['onChange'] = (value) => {
    message.info(value[value.length - 1]);
  };

  const displayRender = (labels: string[]) => labels[labels.length - 1];

  return (
    <nav className="block text-lg leading-lg max-lg:hidden">
      <ul className="flex w-max items-center gap-8">
        <li>
          <Cascader
            options={menuLevelOneOptions}
            onChange={onChange}
            expandTrigger="hover"
            displayRender={displayRender}
            expandIcon={<IoIosArrowForward />}
            placement="bottomLeft"
            className="bg-red max-w-64 text-wrap"
          >
            <div className="flex cursor-pointer items-center gap-2 transition-all hover:text-primaryHover">
              <span className="font-400">Каталог</span>
              <IoIosArrowDown className="text-primary" />
            </div>
          </Cascader>
        </li>
        <li>
          <Dropdown menu={{ items: clientItems }} trigger={['click']}>
            <div className="flex cursor-pointer items-center gap-2 transition-all hover:text-primaryHover">
              <span>Клиентам</span>
              <IoIosArrowDown className="text-primary" />
            </div>
          </Dropdown>
        </li>
        <li>
          <Link href="/contacts" className="transition-all hover:text-primaryHover">
            Контакты
          </Link>
        </li>
        <li>
          <Link href={`/account/${AccountTabs.CURRENT_ORDERS}`} className="transition-all hover:text-primaryHover">
            Мои заказы
          </Link>
        </li>
      </ul>
    </nav>
  );
};
