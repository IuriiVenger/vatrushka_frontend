import { Drawer, Button, Divider } from 'antd';
import Link from 'next/link';
import { FC, useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

import SubMenuDrawer from './SubMenuDrawer';

import { Categories } from '@/__generated__/graphql';
import { email } from '@/api/email';
import Contacts from '@/components/Contacts';
import ContactUsModal from '@/components/modals/ContactUsModal';
import { companyInfo, contactLinks, navigationLinks } from '@/config/links';
import { ContactLinks, NavigationLinks } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/store';

import { resetAll, toggleMenu, toggleSubMenu, selectUI } from '@/store/slices/ui';
import { TContact, TNavigationLink } from '@/types';

const menuItems = Object.entries(navigationLinks).reduce<TNavigationLink[]>((acc, [key, value]) => {
  if (
    // key !== NavigationLinks.ABOUT &&
    key !== NavigationLinks.CONTACTS
  ) {
    acc.push(value);
  }
  return acc;
}, []);

const contacts = Object.fromEntries(
  Object.entries(contactLinks).filter(([key]) => key !== 'mail' && key !== 'chiefMail'),
) as Omit<Record<ContactLinks, TContact>, 'mail' | 'chiefMail'>;

type TMenuDrawerProps = {
  catalogOptions: Categories[] | null;
};

const MenuDrawer: FC<TMenuDrawerProps> = ({ catalogOptions }) => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { isMenuOpened, isSubMenuOpened } = useAppSelector(selectUI);

  const onOpenContactUsModal = () => {
    setIsContactUsModalOpen(true);
  };

  const onCloseMenu = () => {
    dispatch(toggleMenu(false));
  };

  const onOpenSubMenu = () => {
    dispatch(toggleSubMenu(true));
  };

  const onCloseSubMenu = () => {
    dispatch(toggleSubMenu(false));
  };

  const onCloseAll = () => {
    dispatch(resetAll());
  };

  return (
    <>
      <Drawer
        placement="left"
        width="100vw"
        onClose={onCloseMenu}
        closeIcon={null}
        open={isMenuOpened}
        className="top-44 flex w-full pt-2 text-lg leading-lg max-lg:top-40 max-md:top-32 max-sm:top-24 max-sm:text-base max-sm:leading-base"
        rootClassName="max-lg:block hidden max-sm:top-24 max-lg:top-40 max-md:top-32 top-44 absolute"
        maskClassName="bg-shadowDefault"
        aria-label="Меню"
      >
        <Button
          type="text"
          className="group mb-4 w-full justify-between rounded-none px-10 hover:bg-primaryBg active:bg-primaryBgHover max-sm:text-base max-sm:leading-base max-xs:px-4"
          onClick={onOpenSubMenu}
          iconPosition="end"
          icon={<IoIosArrowForward className="text-textTertiary opacity-0 transition-all group-hover:opacity-100" />}
        >
          Каталог
        </Button>
        <ul className="flex flex-col gap-4 px-10 max-xs:m-auto max-xs:px-4">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              onClick={onCloseAll}
              href={item.link}
              className="hover:text-primaryHover active:text-primaryActive"
            >
              {item.title}
            </Link>
          ))}
        </ul>
        <Divider />
        <div className="max-xs flex flex-col gap-4 px-10 max-xs:m-auto max-xs:px-4">
          <p className="font-medium">Ватрушка в социальных сетях</p>
          <Contacts contacts={contacts} className="bg-bgLayout" />
        </div>
        <Divider />
        <div className="flex flex-col gap-6 px-10 max-xs:m-auto max-xs:px-4">
          <div className="flex items-center gap-1">
            <FaPhone className="h-4 min-w-4 rotate-90 transform text-primary" />
            <a href={`tel:${companyInfo.mainPhone}`}>{` ${companyInfo.mainPhone} `}</a>
          </div>
          <Button onClick={onOpenContactUsModal} className="w-fit max-md:h-10 max-md:text-base">
            Связаться с нами
          </Button>
        </div>
      </Drawer>
      <SubMenuDrawer
        isSubMenuOpened={isSubMenuOpened}
        onCloseSubMenu={onCloseSubMenu}
        onCloseAll={onCloseAll}
        catalogOptions={catalogOptions}
      />
      <ContactUsModal isOpen={isContactUsModalOpen} setIsOpen={setIsContactUsModalOpen} onSubmit={email.contactMe} />
    </>
  );
};

export default MenuDrawer;
