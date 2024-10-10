import { Skeleton } from 'antd';
import { FC } from 'react';

import foodTray from '../../assets/images/food_tray.svg';

type TProductCardSkeletonProps = {
  isLoading: boolean;
};

const ProductCardSkeleton: FC<TProductCardSkeletonProps> = ({ isLoading }) => (
  <div
    className={`absolute bottom-0 left-0 right-0 top-0 rounded-2xl bg-white transition-opacity duration-500 max-md:rounded-lg ${isLoading ? 'z-50 opacity-100 ' : 'opacity-0'}`}
  >
    <Skeleton.Node
      active
      className="flex aspect-3/2 w-full items-center justify-center rounded-t-2xl max-md:rounded-t-lg"
    >
      <img src={foodTray.src} alt="Загрузка" className="h-36 w-36" />
    </Skeleton.Node>
    <div className="flex flex-grow flex-col justify-between gap-4 p-6 max-md:p-4">
      <Skeleton.Button active shape="square" className="h-5 w-4/6" />
      <Skeleton.Button active shape="square" block className="h-4" />
      <Skeleton.Button active shape="square" block className="h-4  w-5/6" />
      <Skeleton.Button
        active
        shape="square"
        className="absolute bottom-5 left-4 h-7 w-10 max-md:bottom-3 max-md:left-2"
      />
      <Skeleton.Button
        active
        shape="round"
        className="absolute bottom-4 right-4 h-10 w-24 max-md:bottom-2 max-md:right-2"
      />
    </div>
  </div>
);

export default ProductCardSkeleton;
