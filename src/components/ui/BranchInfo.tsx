import { FC } from 'react';

import { TBusinessHours } from '@/types';

type TBranchInfoProps = {
  address: string;
  phone: string;
  businessHours: TBusinessHours;
};

export const BranchInfo: FC<TBranchInfoProps> = ({ address, phone, businessHours }) => {
  const days = [
    { label: 'пн-пт', hours: businessHours.weekdays },
    { label: 'сб', hours: businessHours.saturday },
    { label: 'вс', hours: businessHours.sunday },
  ];

  return (
    <div className="flex flex-col gap-2 text-lg leading-lg max-sm:text-base max-sm:leading-base">
      <h3 className="font-medium">{address}</h3>
      <p>{phone}</p>
      <div className="flex flex-col gap-1 text-textTertiary">
        {days.map(({ label, hours }) => (
          <p key={label}>
            {label}: с <span>{hours.open}</span> до <span>{hours.close}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
