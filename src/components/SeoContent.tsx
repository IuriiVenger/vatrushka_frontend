'use client';

import { Button, Grid } from 'antd';
import { FC, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const { useBreakpoint } = Grid;

export const SeoContent: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const screens = useBreakpoint();

  return (
    <div className="mx-auto flex max-w-320 flex-col gap-8 px-10 max-xs:max-w-82 max-xs:px-0">
      <div
        className={`flex flex-col items-start gap-4 max-sm:gap-3 ${isCollapsed ? 'relative max-h-64 overflow-hidden' : ''}`}
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
          <ol className="list-bullet space-y-2 pl-4 pt-2">
            <li className="pl-1 text-lg leading-lg max-sm:text-base max-sm:leading-base">гарниры;</li>
            <li className="pl-1 text-lg leading-lg max-sm:text-base max-sm:leading-base">мясные блюда;</li>
            <li className="pl-1 text-lg leading-lg max-sm:text-base max-sm:leading-base">блюда из рыбы;</li>
            <li className="pl-1 text-lg leading-lg max-sm:text-base max-sm:leading-base">пасту;</li>
            <li className="pl-1 text-lg leading-lg max-sm:text-base max-sm:leading-base">
              манты, пельмени и вареники;
            </li>
          </ol>
        </div>
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Заказать обед или бизнес-ланч вы можете на нашем сайте или позвонив оператору по телефону +7 (351) 700-79-81
          ежедневно без праздников и выходных.
        </p>
      </div>
      {isCollapsed && (
        <Button
          icon={<IoIosArrowDown />}
          size={screens.md ? 'middle' : 'small'}
          iconPosition="start"
          className={screens.md ? 'w-max' : ''}
          onClick={() => setIsCollapsed(false)}
        >
          Показать текст
        </Button>
      )}
    </div>
  );
};
