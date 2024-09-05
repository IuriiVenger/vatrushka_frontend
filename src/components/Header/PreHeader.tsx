'use client';

import { Button, Grid } from 'antd';
import { FC } from 'react';

import { Contacts } from '../Contacts';

const { useBreakpoint } = Grid;

export const PreHeader: FC = () => {
  const screens = useBreakpoint();

  return (
    <div className="w-full bg-bgLayout py-4 max-md:py-2">
      <div className="mx-auto flex max-w-320 justify-between gap-12 px-10 max-xs:max-w-82 max-xs:gap-6 max-xs:px-0">
        <div className="flex items-center gap-10">
          <p className="text-nowrap text-lg leading-lg max-md:hidden">8 (351) 700-79-81</p>
          <p className="text-nowrap text-lg leading-lg">Доставка ежедневно с 8:00 до 20:00</p>
        </div>
        <div className="flex items-center gap-10 max-sm:hidden">
          <Contacts noMail />

          <Button size={screens.md ? 'middle' : 'small'} className="block w-fit max-lg:hidden">
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  );
};
