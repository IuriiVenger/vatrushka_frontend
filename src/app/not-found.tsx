import { Button } from 'antd';
import { FC } from 'react';

import notFound from '@/assets/images/not_found.svg';

const NotFoundPage: FC = () => (
  <section className="flex h-screen flex-col items-center justify-center gap-4 max-xs:py-8">
    <img alt="Страница не найдена" src={notFound.src} className="w-85 max-sm:w-52" />
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">
          Увы, такой страницы нет на нашем сайте
        </h1>
        <p className=" text-center text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Возможно, запрашиваемая вами страница была перемещена или удалена
        </p>
      </div>
      <Button type="primary" className="w-max px-6 max-sm:text-base max-sm:leading-base" href="/">
        Вернутся на главную
      </Button>
    </div>
  </section>
);

export default NotFoundPage;
