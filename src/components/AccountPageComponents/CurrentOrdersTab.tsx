import { Button } from 'antd';
import { FC } from 'react';

import CurrentOrderCard from './components/CurrentOrderCard';

import { currentOrders, ordersHistory } from '@/mocks';

const CurrentOrdersTab: FC = () =>
  ordersHistory.length ? (
    <div className="flex flex-col gap-6 max-sm:gap-4">
      {currentOrders.map((order) => (
        <CurrentOrderCard key={order.id} order={order} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col rounded-2xl border border-borderSecondary p-6 text-lg leading-lg max-sm:p-4">
      <h2 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Нет активных заказов</h2>
      <p className="pt-2 text-lg leading-lg max-sm:text-base max-sm:leading-base">
        Чтобы сделать заказ, перейдите в каталог и добавьте товары в корзину
      </p>
      <Button type="primary" href="/" className="mt-6 w-max text-lg leading-lg max-sm:text-base max-sm:leading-base">
        Перейти в каталог
      </Button>
    </div>
  );

export default CurrentOrdersTab;
