import { Radio } from 'antd';
import { FC } from 'react';

import { TBusinessHours } from '@/types';

type TRadioAddressProps = {
  id: string;
  address: string;
  businessHours: TBusinessHours;
  isSelected: boolean;
};

const RadioAddress: FC<TRadioAddressProps> = ({ id, address, businessHours, isSelected }) => {
  const days = [
    { label: 'Будни', hours: businessHours.weekdays },
    { label: 'суббота', hours: businessHours.saturday },
    { label: 'воскресенье', hours: businessHours.sunday },
  ];

  const time = days.map(({ label, hours }) => `${label} с ${hours.open} до ${hours.close}`).join(', ');

  return (
    <div className={`rounded-2xl border  p-4 ${isSelected ? 'border-primary' : 'border-borderSecondary'}`}>
      <Radio value={id} className="flex items-start gap-2">
        <div className="flex flex-col gap-2">
          <p>{address}</p>
          <p>{time}</p>
        </div>
      </Radio>
    </div>
  );
};

export default RadioAddress;
