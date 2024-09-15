'use client';

import { AutoComplete, AutoCompleteProps, Input } from 'antd';
import { FC, useState } from 'react';

import { IoSearch } from 'react-icons/io5';

import { DropdownListItem } from './DropdownListItem';

import { cartList } from '@/mocks';

export const Search: FC = () => {
  const mockOptions = cartList.map((item) => ({
    value: item.name,
    label: <DropdownListItem item={item} />,
  }));

  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);

  const handleSearch = () => {
    setOptions(mockOptions);
  };

  return (
    <>
      <IoSearch className="hidden h-5 w-5 text-textTertiary max-sm:block" />
      <AutoComplete
        onSearch={handleSearch}
        options={options}
        className="h-full max-sm:hidden"
        popupClassName="w-85"
        placement="bottomRight"
        notFoundContent={<p className="py-4 text-center">Ничего не найдено</p>}
      >
        <Input
          size="small"
          placeholder="Поиск по сайту"
          suffix={<IoSearch className="h-4 w-4 text-textTertiary" />}
          style={{ borderRadius: '10rem' }}
          className="h-10 px-4 max-lg:w-76 max-md:w-48"
        />
      </AutoComplete>
    </>
  );
};
