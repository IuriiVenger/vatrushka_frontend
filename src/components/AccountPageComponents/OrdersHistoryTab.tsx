import { Button } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import OrdersHistoryCard from './components/OrdersHistoryCard';

import { API } from '@/api/types';
import { currentOrders, ordersHistory } from '@/mocks';
import { StoreDataWithStatusAndMeta } from '@/store/types';

type OrdersHistoryTabProps = {
  orders: API.Orders.Order[] | null;
  loadMoreOrders: () => void;
  isLoadMoreAvailable: boolean;
  isLoading: boolean;
};

const OrdersHistoryTab: FC<OrdersHistoryTabProps> = (props) => {
  const { orders, loadMoreOrders, isLoadMoreAvailable, isLoading } = props;

  return orders?.length ? (
    <div className="flex flex-col gap-6 max-sm:gap-4">
      {ordersHistory.map((order) => (
        <OrdersHistoryCard key={order.id} order={order} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col rounded-2xl border border-borderSecondary p-6 text-lg leading-lg max-sm:p-4">
      <h2 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Нет активных заказов</h2>
      <p className="pt-2 text-lg leading-lg max-sm:text-base max-sm:leading-base">
        Чтобы сделать заказ, перейдите в каталог и добавьте товары в корзину
      </p>
      <Link href="/">
        <Button type="primary" className="mt-6 w-max text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Перейти в каталог
        </Button>
      </Link>
    </div>
  );
};

export default OrdersHistoryTab;
