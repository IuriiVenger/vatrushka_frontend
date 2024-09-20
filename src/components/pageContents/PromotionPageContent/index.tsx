'use client';

import { Breadcrumb } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { promotions } from '@/mocks';

export const PromotionPage: FC = () => {
  const breadcrumbs = [
    {
      title: <Link href="/">Главная</Link>,
    },
    {
      title: 'Акции',
    },
    {
      title: 'Скидка именинникам 10%',
    },
  ];

  const { name, pic } = promotions[0];

  return (
    <div className="flex flex-col gap-8 max-sm:gap-6">
      <Breadcrumb items={breadcrumbs} />
      <section className="flex flex-col text-lg leading-lg max-sm:text-base max-sm:leading-base">
        <Image
          width={1200}
          height={514}
          alt={name}
          src={pic}
          className="aspect-21/9 rounded-3xl object-cover object-center max-md:rounded-2xl"
        />
        <h1 className="pb-6 pt-10 text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">{name}</h1>
        <div className="flex flex-col gap-6 max-md:gap-4">
          <p>
            Мы рады, когда наши продукты выбирают для особенно приятных праздников. Поэтому в ваш день рождения и за три
            дня до и после него делаем скидку в 10% на товары собственного производства.
          </p>
          <p>Акция действует только при оформлении заказа через сайт.</p>
          <p>
            &#42;Скидка действует при предъявлении документа, подтверждающего дату рождения (паспорт, водительское
            удостоверение, свидетельство о рождении).
          </p>
          <p>&#42;При использовании данной скидки бонусы на заказ не начисляются.</p>
        </div>
      </section>
    </div>
  );
};
