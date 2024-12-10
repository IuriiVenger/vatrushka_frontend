import { Button } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import OrdersHistoryCard from './components/OrdersHistoryCard';

import { TOrderListWithTerminalAddress } from '@/types';

type OrdersHistoryTabProps = {
  orders: TOrderListWithTerminalAddress | null;
  loadMoreOrders: () => void;
  isLoadMoreAvailable: boolean;
  isLoading: boolean;
};

// TODO: обновлять заказы когда заходишь на эту вкладку и убрать инициализацию заказов для анонимного юзера
const OrdersHistoryTab: FC<OrdersHistoryTabProps> = (props) => {
  const { orders, loadMoreOrders, isLoadMoreAvailable, isLoading } = props;

  return (
    <div className="flex flex-col gap-6">
      {orders?.data.length ? (
        <div className="flex flex-col gap-6 max-sm:gap-4">
          {orders?.data?.map((order) => <OrdersHistoryCard key={order.id} order={order} />)}
        </div>
      ) : (
        <div className="flex flex-col rounded-2xl border border-borderSecondary p-6 text-lg leading-lg max-sm:p-4">
          <h2 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Нет завершенных заказов</h2>
          <p className="pt-2 text-lg leading-lg max-sm:text-base max-sm:leading-base">
            Чтобы сделать заказ, перейдите в каталог и добавьте товары в корзину
          </p>
          <Link href="/">
            <Button type="primary" className="mt-6 w-max text-lg leading-lg max-sm:text-base max-sm:leading-base">
              Перейти в каталог
            </Button>
          </Link>
        </div>
      )}
      {isLoadMoreAvailable && (
        <Button loading={isLoading} className="m-auto w-max max-md:h-10 max-md:text-base" onClick={loadMoreOrders}>
          Показать ещё
        </Button>
      )}
    </div>
  );
};

export default OrdersHistoryTab;
