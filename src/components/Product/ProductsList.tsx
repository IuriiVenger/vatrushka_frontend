'use client';

import { Button } from 'antd';
import { FC, useMemo, useState } from 'react';

import Dropdown from '../ui/Dropdown';

import ProductCard from './ProductCard';

import { sortDropdownItems, SortType, SortTypeTranslation } from '@/constants';
import { TCard } from '@/types';
import { getNounWithDeclension } from '@/utils/formatters';

type TProductsListProps = {
  products: TCard[];
  title: string;
  onLoadMore?: () => void;
  isLoading?: boolean;
  loadMoreAvailable?: boolean;
};

const ProductsList: FC<TProductsListProps> = (props) => {
  const { products, title, onLoadMore, isLoading, loadMoreAvailable } = props;
  const [sort, setSort] = useState<SortType>(SortType.MOST_POPULAR);

  const sortedProducts = useMemo(() => {
    const sortedProductsItems = [...products];

    if (sort === SortType.PRICE_ASCENDING) {
      sortedProductsItems.sort((a, b) => +a.price - +b.price);
    }

    if (sort === SortType.PRICE_DESCENDING) {
      sortedProductsItems.sort((a, b) => +b.price - +a.price);
    }

    return sortedProductsItems;
  }, [products, sort]);

  const productsCount = useMemo(
    () => `${products.length} ${getNounWithDeclension(products.length, 'товар', 'товара', 'товаров')}`,
    [products.length],
  );

  const handleBuyButtonClick = (card: TCard) => () => {
    console.log(card);
  };

  return (
    <div className="flex flex-col gap-12 max-lg:gap-8 max-md:gap-4 max-xs:max-w-82 ">
      <div className="flex items-end justify-between max-md:w-full max-md:flex-col max-md:items-start max-md:gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-medium leading-3xl max-sm:text-2xl max-sm:leading-2xl">{title}</p>
          <p className="text-lg leading-lg">{productsCount}</p>
        </div>
        <Dropdown sort={sort} setSort={setSort} items={sortDropdownItems} translations={SortTypeTranslation} />
      </div>
      <div className="flex max-w-320 flex-col items-center gap-6 max-xs:max-w-82">
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1">
          {sortedProducts.map((item, index) => (
            <ProductCard key={item.id + index} info={item} handleBuyButtonClick={handleBuyButtonClick(item)} />
          ))}
        </div>
        {loadMoreAvailable && (
          <Button loading={isLoading} className="w-max max-md:h-10 max-md:text-base" onClick={onLoadMore}>
            Показать ещё
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
