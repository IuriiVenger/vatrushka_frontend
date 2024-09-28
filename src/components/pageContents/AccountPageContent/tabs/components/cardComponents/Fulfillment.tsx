import { FC } from 'react';

type TFulfillmentProps = {
  type: string;
  address: string;
  time: string;
  paymentMethod: string;
};

const Fulfillment: FC<TFulfillmentProps> = ({ type, address, time, paymentMethod }) => (
  <div className="max-w-112 flex h-max w-full flex-col gap-3 rounded-2xl border border-borderSecondary p-6 max-lg:border-none max-lg:p-0 max-sm:gap-2">
    <h3 className="text-nowrap pb-2 text-xl font-medium leading-xl max-sm:text-lg max-sm:leading-lg">{type}</h3>
    <p>{address}</p>
    <p>{time}</p>
    <p>{paymentMethod}</p>
  </div>
);

export default Fulfillment;
