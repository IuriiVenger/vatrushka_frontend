'use client';

import { AutoComplete, AutoCompleteProps, Button, Divider, Drawer } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { useRouter } from 'next-nprogress-bar';
import { ChangeEvent, FC, Fragment, useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import DropdownListItem from './DropdownListItem';

import { products } from '@/api/products';
import SearchInput from '@/components/ui/SearchInput';
import useDebounce from '@/hooks/useDebounce';

import { useAppDispatch, useAppSelector } from '@/store';

import { toggleSearch, selectUI } from '@/store/slices/ui';
import { TSearchListItem } from '@/types';

const Search: FC = () => {
  const [options, setOptions] = useState<TSearchListItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { isMobileSearchOpened } = useAppSelector(selectUI);

  const debouncedSearch = useDebounce<string>(searchValue);

  const dropdownOptions: AutoCompleteProps['options'] = options.map((item) => ({
    value: item.name,
    label: <DropdownListItem item={item} />,
    onClick: item.onClick,
  }));

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setIsSearching(true);
  };

  const onInputClear = () => {
    setOptions([]);
    setSearchValue('');
  };

  const closeMobileSearch = () => {
    dispatch(toggleSearch(false));
  };

  const onSearchButtonClick = () => {
    dispatch(toggleSearch(!isMobileSearchOpened));
  };

  const onMobileSearchClose = () => {
    dispatch(toggleSearch(false));
  };

  const loadProducts = async () => {
    if (!debouncedSearch.length) {
      setOptions([]);
      setIsSearching(false);
      return;
    }

    try {
      const { data } = await products.getByName(debouncedSearch);
      const productList =
        data.productsCollection?.edges.map((edge) => {
          const product = edge.node;
          const category = product.categoryitemsCollection?.edges[0]?.node.categories.slug;
          return {
            name: product.name,
            pic: product.productsizesCollection?.edges[0]?.node.button_image_url || '',
            price: product.productsizesCollection?.edges[0]?.node.price
              ? Number(product.productsizesCollection.edges[0].node.price)
              : 0,
            onClick: () => {
              setSearchValue(product.name);
              closeMobileSearch();
              router.push(`/${category}/${product.slug}`);
            },
          };
        }) || [];

      setOptions(productList);
    } finally {
      setIsSearching(false);
    }
  };

  const onOptionSelect = (value: string, option: DefaultOptionType) => {
    if (option.onClick) {
      option.onClick();
    }
  };

  useEffect(() => {
    loadProducts();
  }, [debouncedSearch]);

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
        onSelect={onOptionSelect}
        className="h-full w-full max-lg:w-auto max-md:w-full max-sm:hidden"
        notFoundContent={
          debouncedSearch.length && !isSearching ? <p className="py-4 text-center">Ничего не найдено</p> : null
        }
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
