'use client';

import { Button } from 'antd';
import { FC } from 'react';

import { Contacts } from '../Contacts';

import { contactLinks } from '@/config/links';
import { ContactLinks } from '@/constants';
import { TContact } from '@/types';

export const PreHeader: FC = () => {
  const contacts = Object.fromEntries(
    Object.entries(contactLinks).filter(([key]) => key !== 'mail' && key !== 'chiefMail'),
  ) as Omit<Record<ContactLinks, TContact>, 'mail' | 'chiefMail'>;

  return (
    <div className="w-full bg-bgLayout py-4 max-md:py-2">
      <div className="mx-auto flex max-w-320 justify-between gap-12 px-10 max-xs:max-w-82 max-xs:gap-6 max-xs:px-0">
        <div className="flex items-center gap-10">
          <p className="text-nowrap text-lg leading-lg max-md:hidden">8 (351) 700-79-81</p>
          <p className="text-nowrap text-lg leading-lg">Доставка ежедневно с 8:00 до 20:00</p>
        </div>
        <div className="hidden items-center gap-10 sm:flex">
          <Contacts contacts={contacts} />
          <Button className="hidden w-fit lg:block">Связаться с нами</Button>
        </div>
      </div>
    </div>
  );
};
