'use client';

import { Button } from 'antd';
import cn from 'classnames';
import { FC, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { companyInfo } from '@/config/links';

const SeoContent: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onButtonClick = () => setIsCollapsed(false);

  return (
    <div className="flex w-full flex-col gap-8">
      <div
        className={cn(
          'flex flex-col items-start gap-4 max-sm:gap-3',
          isCollapsed && 'relative max-h-64 overflow-hidden',
        )}
      >
        {isCollapsed && <div className="absolute bottom-0 left-0 z-10 h-1/4 w-full bg-white-fade" />}
        <h2 className="text-3xl font-medium leading-3xl max-sm:text-2xl max-sm:leading-2xl">Доставка еды в офис</h2>
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Доставка блюд от Ватрушки в офис позволит вам питаться качественно, полноценно и разнообразно, не затрачивая
          много времени на приготовление еды. Обширное меню позволит составить завтрак, обед или ужин исходя из
          индивидуальных предпочтений.
        </p>
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">Большой ассортимент блюд.</p>
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Онлайн-фудмаркет предлагает комплексные обеды, бизнес-ланчи и наборы еды на день, с доставкой и по
          привлекательным ценам.
        </p>
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Чтобы питаться правильно и разнообразно, не нужно каждый день ходить в рестораны или тратить много времени на
          приготовление еды дома.
        </p>
        <div>
          <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">В нашем меню вы сможете выбрать:</p>
          <ul className="list-bullet space-y-2 pl-4 pt-2 text-lg leading-lg max-sm:text-base max-sm:leading-base">
            <li className="pl-1">гарниры;</li>
            <li className="pl-1">мясные блюда;</li>
            <li className="pl-1">блюда из рыбы;</li>
            <li className="pl-1">пасту;</li>
            <li className="pl-1">манты, пельмени и вареники;</li>
          </ul>
        </div>
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Заказать обед или бизнес-ланч вы можете на нашем сайте или позвонив оператору по телефону{' '}
          {companyInfo.mainPhone} ежедневно без праздников и выходных.
        </p>
      </div>
      {isCollapsed && (
        <Button
          icon={<IoIosArrowDown />}
          iconPosition="start"
          className="w-max max-md:h-10 max-md:w-full max-md:text-base"
          onClick={onButtonClick}
        >
          Показать текст
        </Button>
      )}
    </div>
  );
};

export default SeoContent;
