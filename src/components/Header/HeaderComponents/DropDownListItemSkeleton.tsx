import { Skeleton } from 'antd';
import { FC } from 'react';

import foodTray from '../../../assets/images/food_tray.svg';

type TDropDownListItemSkeletonProps = {
  isLoading: boolean;
  cart: boolean;
};

const DropDownListItemSkeleton: FC<TDropDownListItemSkeletonProps> = ({ isLoading, cart }) => (
  <div
    className={`absolute bottom-0 left-0 right-0 top-0 z-50 flex w-full gap-3 bg-white opacity-0 transition-all ${isLoading ? 'z-50 opacity-100' : 'opacity-0'}`}
  >
    <Skeleton.Node active className="flex aspect-square h-16 w-16 items-center justify-center rounded-lg">
      <img src={foodTray.src} alt="Загрузка" className="h-11 w-11" />
    </Skeleton.Node>
    <div className="relative flex w-full flex-col">
      <Skeleton.Button shape="square" active className="h-4 w-40" />
      <Skeleton.Button shape="square" active className="absolute bottom-0.5 left-0 w-10" />
      {cart && <Skeleton.Button shape="round" active className="absolute bottom-0 right-0 h-10 w-26" />}
    </div>
  </div>
);

export default DropDownListItemSkeleton;
