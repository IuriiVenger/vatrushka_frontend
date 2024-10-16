'use client';

import { AutoComplete, AutoCompleteProps, Button, Divider, Drawer } from 'antd';
import { ChangeEvent, FC, Fragment, useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import DropdownListItem from './DropdownListItem';

import SearchInput from '@/components/ui/SearchInput';
import useDebounce from '@/hooks/useDebounce';
import { cartList } from '@/mocks';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectUI } from '@/store/selectors';
import { toggleSearch } from '@/store/slices/ui';
import { TCartListItem } from '@/types';

const Search: FC = () => {
  const [options, setOptions] = useState<TCartListItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useAppDispatch();
  const { isMobileSearchOpened } = useAppSelector(selectUI);

  const debouncedSearch = useDebounce<string>(searchValue);

  console.log('query filter:', debouncedSearch);

  const dropdownOptions: AutoCompleteProps['options'] = options.map((item) => ({
    value: item.name,
    label: <DropdownListItem item={item} />,
  }));

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setOptions(cartList);
  };

  const onInputClear = () => {
    setOptions([]);
    setSearchValue('');
  };

  const onSearchButtonClick = () => {
    dispatch(toggleSearch(!isMobileSearchOpened));
  };

  const onMobileSearchClose = () => {
    dispatch(toggleSearch(false));
  };

  useEffect(() => {
    if (!searchValue.length) {
      setOptions([]);
    }
  }, [searchValue.length]);

  return (
    <>
      <Button
        type="link"
        onClick={onSearchButtonClick}
        className="hidden w-min pl-0 text-textTertiary transition-all hover:text-textQuaternary max-sm:block"
        icon={isMobileSearchOpened ? <RxCross2 className="h-6 min-w-6" /> : <IoSearch className="h-6 min-w-6" />}
      />
      <AutoComplete
        options={dropdownOptions}
        className="h-full w-full max-lg:w-auto max-md:w-full max-sm:hidden"
        notFoundContent={searchValue.length ? <p className="py-4 text-center">Ничего не найдено</p> : null}
      >
        <SearchInput onChange={onInputChange} onClear={onInputClear} value={searchValue} />
      </AutoComplete>
      <Drawer
        width="100vw"
        closable={false}
        onClose={onMobileSearchClose}
        open={isMobileSearchOpened}
        placement="left"
        className="top-44 h-auto max-h-[72vh] pb-6 max-lg:top-40 max-md:top-32 max-sm:top-24"
        rootClassName="max-sm:top-24 max-lg:top-40 max-md:top-32 top-44 absolute"
        aria-label="Поиск по сайту"
      >
        <div className="flex w-full flex-col gap-6 px-10 pt-4 text-lg leading-lg max-sm:text-base max-sm:leading-base max-xs:m-auto max-xs:max-w-82 max-xs:px-0">
          <div className="w-full p-1">
            <SearchInput onChange={onInputChange} onClear={onInputClear} value={searchValue} />
          </div>
          {!!options?.length && (
            <div className="flex flex-col">
              {options.map((option, index) => (
                <Fragment key={option.name}>
                  {index !== 0 && <Divider />}
                  <DropdownListItem item={option} />
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Search;
