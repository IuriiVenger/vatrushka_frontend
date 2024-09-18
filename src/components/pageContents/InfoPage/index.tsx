import { Breadcrumb, Button } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import { Accordion } from './Accordion';

import { accordions } from '@/mocks';

export const InfoPage: FC = () => {
  const breadcrumbs = [
    {
      title: <Link href="/">Главная</Link>,
    },
    {
      title: 'Бонусная программа',
    },
  ];

  const pivot = Math.ceil(accordions.length / 2);
  const firstHalf = accordions.slice(0, pivot);
  const secondHalf = accordions.slice(pivot);

  return (
    <section className="flex flex-col gap-8 max-sm:gap-6 max-xs:pt-6">
      <Breadcrumb items={breadcrumbs} />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">Бонусная программа</h1>
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Участие в бонусной программе позволяет накапливать и тратить бонусные баллы в заведениях участниках программы
          и онлайн фудмаркете pirovatrushka.ru, а также получать специальные предложения для участников программы.
        </p>
      </div>
      <div className="flex flex-col gap-6 rounded-2xl bg-bgLayout p-6 max-sm:p-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">
            Получите 200 бонусов за регистрацию
          </h2>
          <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
            Зарегистрируйтесь на сайте прямо сейчас и получите 200 бонусов на покупки.
          </p>
        </div>
        <Button type="primary" className="w-max max-sm:text-base max-sm:leading-base">
          Зарегистрироваться
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        <div className="flex flex-col gap-6">
          {firstHalf.map(({ title, text }) => (
            <Accordion title={title} text={text} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {secondHalf.map(({ title, text }) => (
            <Accordion title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
};
