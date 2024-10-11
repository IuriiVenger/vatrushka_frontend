'use client';

import { Button, Divider } from 'antd';
import Link from 'next/link';
import { FC, useState } from 'react';

import logo from '../../assets/images/logo_full.svg';
import Contacts from '../Contacts';
import ContactUsModal from '../modals/ContactUsModal';

import LinksList from './LinksList';

import { companyInfo, contactLinks, legalLinks, navigationLinks } from '@/config/links';
import { ContactLinks } from '@/constants';
import { TContact, TNavigationLink } from '@/types';

const Footer: FC = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  const links = Object.values<TNavigationLink>(navigationLinks);
  const pivot = Math.ceil(links.length / 2);
  const firstHalf = links.slice(0, pivot);
  const secondHalf = links.slice(pivot);

  const contacts = Object.fromEntries(Object.entries(contactLinks).filter(([key]) => key !== 'chiefMail')) as Omit<
    Record<ContactLinks, TContact>,
    'chiefMail'
  >;

  const onOpenContactUsModal = () => {
    setIsContactUsModalOpen(true);
  };

  return (
    <>
      <footer className="w-full bg-bgLayout text-lg leading-lg max-sm:text-base max-sm:leading-base">
        <div className="mx-auto max-w-300 gap-12 px-9 pt-9 max-xs:max-w-82 max-xs:gap-6 max-xs:px-0">
          <div className="flex justify-between text-text max-lg:flex-col max-lg:flex-wrap max-lg:justify-around max-lg:gap-6">
            <div className="order-1 flex flex-col justify-between max-lg:items-center max-lg:gap-6">
              <img alt="1" src={logo.src} className="h-14 w-45" />
              <div className="flex flex-col justify-between gap-2 max-lg:items-center">
                <p className="text-xl font-medium leading-xl">{companyInfo.mainPhone}</p>
                <p className="text-nowrap">Доставка ежедневно с 8:00 до 20:00</p>
              </div>
            </div>
            <div className="order-2 flex gap-30 max-xl:gap-10 max-lg:order-3 max-lg:justify-around max-sm:flex-col max-sm:gap-6">
              <LinksList links={firstHalf} />
              <LinksList links={secondHalf} />
            </div>
            <div className="order-3 flex flex-col items-end justify-between max-lg:order-2 max-lg:items-center max-lg:gap-6">
              <Button onClick={onOpenContactUsModal} className="w-fit max-md:h-10 max-md:text-base">
                Связаться с нами
              </Button>
              <Contacts contacts={contacts} />
            </div>
          </div>
        </div>
        <Divider />
        <div className="mx-auto flex w-full max-w-300 justify-between gap-4 px-9 pb-9 max-lg:flex-col-reverse max-lg:items-center max-sm:items-start max-xs:max-w-82 max-xs:px-0">
          <p className="text-text">(с) 2010-{currentYear} Ватрушка - доставка еды на дом в Челябинске</p>
          <Link
            href={legalLinks.termsOfService}
            className="text-text transition-all hover:text-primary active:text-primaryActive"
          >
            Пользовательское соглашение
          </Link>
        </div>
      </footer>
      <ContactUsModal isOpen={isContactUsModalOpen} setIsOpen={setIsContactUsModalOpen} />
    </>
  );
};

export default Footer;
