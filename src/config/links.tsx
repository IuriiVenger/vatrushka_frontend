import { BiLogoTelegram, BiLogoVk } from 'react-icons/bi';
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io';

import { ContactLinks, NavigationLinks } from '@/constants';
import { TContact, TNavigationLink } from '@/types';

export const contactLinks: Record<ContactLinks, TContact> = {
  [ContactLinks.TELEGRAM]: {
    link: 'https://t.me/123',
    icon: <BiLogoTelegram />,
  },
  [ContactLinks.VK]: {
    link: 'https://www.vk.ru/123',
    icon: <BiLogoVk />,
  },
  [ContactLinks.WHATS_APP]: {
    link: 'https://wa.me/123',
    icon: <IoLogoWhatsapp />,
  },
  [ContactLinks.MAIL]: {
    link: '123@123.ru',
    icon: <IoIosMail />,
  },
};

export const navigationLinks: Record<NavigationLinks, TNavigationLink> = {
  [NavigationLinks.ABOUT]: {
    link: 'https://www.google.com',
    title: 'О нас',
  },
  [NavigationLinks.CONTACTS]: {
    link: 'https://www.google.com',
    title: 'Контакты',
  },
  [NavigationLinks.OFFERS]: {
    link: 'https://www.google.com',
    title: 'Акции',
  },
  [NavigationLinks.WHOLESALE]: {
    link: 'https://www.google.com',
    title: 'Оптовые продажи',
  },
  [NavigationLinks.DELIVERY]: {
    link: 'https://www.google.com',
    title: 'Условия доставки',
  },
  [NavigationLinks.BONUS]: {
    link: 'https://www.google.com',
    title: 'Бонусная программа',
  },
  [NavigationLinks.CONDITIONS]: {
    link: 'https://www.google.com',
    title: 'Условия возврата и обмена',
  },
  [NavigationLinks.FEEDBACK]: {
    link: 'https://www.google.com',
    title: 'Ваши отзывы и предложения',
  },
};
