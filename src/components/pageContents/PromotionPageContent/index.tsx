'use client';

import { Breadcrumb } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { API } from '@/api/types';

type PromotionPageContentProps = {
  promotion: API.Promotions.Promotion;
};

const PromotionPageContent: FC<PromotionPageContentProps> = ({ promotion }) => {
  const breadcrumbs = [
    {
      title: <Link href="/">Главная</Link>,
    },
    {
      title: 'Акции',
    },
    {
      title: promotion.name,
    },
  ];

  const { name, homepageBanner } = promotion;

  return (
    <div className="flex w-full flex-col gap-8 max-sm:gap-6">
      <Breadcrumb items={breadcrumbs} />
      <section className="flex flex-col text-lg leading-lg max-sm:text-base max-sm:leading-base">
        {homepageBanner && (
          <Image
            width={1200}
            height={514}
            alt={name || 'action banner'}
            src={homepageBanner}
            className="aspect-21/9 rounded-3xl object-cover object-center max-md:rounded-2xl"
          />
        )}
        <h1 className="pb-6 pt-10 text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">{name}</h1>
        <div className="flex flex-col gap-6 max-md:gap-4">{promotion.description}</div>
      </section>
    </div>
  );
};

export default PromotionPageContent;
