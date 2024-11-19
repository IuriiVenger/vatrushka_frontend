import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { API } from '@/api/types';

type TProductCardProps = {
  item: API.Promotions.Promotion;
};

const PromotionCard: FC<TProductCardProps> = ({ item }) => {
  const { name, homepageBanner, description } = item;

  return (
    <Link
      className="flex h-full w-full cursor-pointer flex-col rounded-2xl border border-border transition-all hover:border-accentActive max-md:rounded-lg"
      href={`/promotions/${item.id}`}
    >
      {homepageBanner && (
        <Image
          width={560}
          height={372}
          alt={name || 'promotion banner'}
          src={homepageBanner}
          className="aspect-3/2 rounded-t-2xl object-cover object-center max-md:rounded-lg"
        />
      )}
      <div className="flex h-full flex-grow flex-col justify-between p-6 max-md:p-4">
        <div className="flex flex-col">
          <p className="text-xl font-medium leading-xl max-md:text-lg max-md:leading-lg">{name}</p>
          <p className="line-clamp-3 pt-4 max-md:text-base max-md:leading-base">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PromotionCard;
