import { Cascader, message, CascaderProps, MenuProps, Dropdown } from 'antd';
import React from 'react';

import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

import { menuLevelOneOptions } from '@/mocks';
import { TMenuLevelOneOption } from '@/types';

const clientItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
        3rd menu item
      </a>
    ),
  },
];

export const Menu = () => {
  const onChange: CascaderProps<TMenuLevelOneOption>['onChange'] = (value) => {
    message.info(value[value.length - 1]);
  };

  const displayRender = (labels: string[]) => labels[labels.length - 1];

  return (
    <nav className="block max-lg:hidden">
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
              <span className="">Клиентам</span>
              <IoIosArrowDown className="text-primary" />
            </div>
          </Dropdown>
        </li>
        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-primaryHover"
          >
            Контакты
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-primaryHover"
          >
            Мои заказы
          </a>
        </li>
      </ul>
    </nav>
  );
};
