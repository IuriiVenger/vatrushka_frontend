import { Skeleton } from 'antd';

import { FC } from 'react';

import foodTray from '../../../assets/images/food_tray.svg';

type TProductPageSkeletonProps = {
  isLoading: boolean;
  hasPics: boolean;
};

const ProductPageSkeleton: FC<TProductPageSkeletonProps> = ({ isLoading, hasPics }) => (
  <div
    className={`absolute bottom-0 left-0 right-0 top-0 gap-8 bg-white transition-all max-md:flex max-md:flex-col ${isLoading ? 'z-50 opacity-100' : 'opacity-0 '} ${hasPics ? 'grid grid-cols-2' : 'flex flex-col'}`}
  >
    <div className="flex gap-6 max-lg:flex-col-reverse max-lg:items-center max-lg:justify-end max-lg:gap-1">
      <Skeleton.Node
        active
        className="ml-1 flex aspect-square h-20 w-20 items-center justify-center rounded-lg max-md:hidden"
      >
        <img src={foodTray.src} alt="Загрузка" className="h-10 w-10" />
      </Skeleton.Node>
      <Skeleton.Node
        active
        className="flex h-80 w-full items-center justify-center rounded-lg max-md:aspect-3/2 max-md:h-auto max-md:w-full"
      >
        <img src={foodTray.src} alt="Загрузка" className="h-36 w-36 " />
      </Skeleton.Node>
    </div>
    <div className="flex flex-col gap-8">
      <Skeleton paragraph active className="w-full" />
      <Skeleton paragraph active className="w-full" />
    </div>
  </div>
);

export default ProductPageSkeleton;
