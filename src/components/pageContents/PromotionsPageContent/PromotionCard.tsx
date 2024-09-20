import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { TPromotion } from '@/types';

type TProductCardProps = {
  item: TPromotion;
};

export const PromotionCard: FC<TProductCardProps> = ({ item }) => {
  const { name, pic, shortDescription, start, end } = item;

  const time = `${start ? `с ${start}` : ''}${start && end ? ' ' : ''}${end ? `до ${end}` : ''} `;

  return (
    <Link
      className="flex h-full w-full cursor-pointer flex-col rounded-2xl border border-border transition-all hover:border-accentActive max-md:rounded-t-lg"
      href="111"
    >
      <Image
        width={560}
        height={372}
        alt={name}
        src={pic}
        className="aspect-3/2 rounded-t-2xl object-cover object-center max-md:rounded-t-lg"
      />
      <div className="flex h-full flex-grow flex-col justify-between p-6 max-md:p-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-xl font-medium leading-xl max-md:text-lg max-md:leading-lg">{name}</p>
            {(start || end) && (
              <p className="text-nowrap text-textSecondary max-md:text-base max-md:leading-base">{time}</p>
            )}
          </div>
          <p className="line-clamp-3 pt-4 max-md:text-base max-md:leading-base">{shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};
