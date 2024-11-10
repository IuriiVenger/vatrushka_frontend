import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import PromotionCard from '../../PromotionCard';

import { API } from '@/api/types';

type PromotionsPageProps = {
  promotions: API.Promotions.Promotion[];
};

const PromotionsPageContent: FC<PromotionsPageProps> = ({ promotions }) => {
  const breadcrumbs = [
    {
      title: <Link href="/">Главная</Link>,
    },
    {
      title: 'Акции',
    },
  ];

  return (
    <div className="flex w-full flex-col gap-8">
      <Breadcrumb items={breadcrumbs} />
      <section className="flex flex-col gap-12 text-lg leading-lg max-lg:gap-8 max-sm:text-base max-sm:leading-base">
        <h1 className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">Акции</h1>
        <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1">
          {promotions.map((item) => (
            <PromotionCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PromotionsPageContent;
