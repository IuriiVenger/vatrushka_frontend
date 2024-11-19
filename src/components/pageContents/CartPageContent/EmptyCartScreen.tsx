'use client';

import { Button } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import image from '../../../assets/images/empty_cart.svg';

const EmptyCartScreen: FC = () => (
  <section className="flex flex-col items-center gap-6 py-14 max-sm:gap-4">
    <img src={image.src} alt="Личный кабинет" className="w-32" />
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Ваша корзина пуста</h1>
      <p className="pt-2 text-lg leading-lg max-sm:text-base max-sm:leading-base">
        Завтраки, пирожные, готовая еда и многое другое ждут вас в каталоге
      </p>
      <Link href="/">
        <Button type="primary" className="mt-6 text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Перейти в каталог
        </Button>
      </Link>
    </div>
  </section>
);

export default EmptyCartScreen;
