import { BiLogoTelegram, BiLogoVk } from 'react-icons/bi';
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io';

import { ContactLinks, NavigationLinks } from '@/constants';
import { TCompanyInfo, TContact, TNavigationLink } from '@/types';

export const companyName = 'Пекарня-кондитерская «Ватрушка»';

export const companyInfo: TCompanyInfo = {
  fullName: companyName,
  legalName: 'ИП Быков Елисей Эдуардович',
  mainPhone: '+ 7 (351) 700-79-81',
  wholesaleManagerPhone: '+7 951-794-13-46',
  wholesaleManagerEmail: 'wsd1@vatrushka74.ru',
  telegramBot: 'https://t.me/PirogVatrushkaBot',
  branches: [
    {
      id: '1',
      name: companyName,
      address: 'ул. Энтузиастов, 12',
      coords: [55.15654, 61.3755],
      phone: '+7 (351) 700-79-82',
      businessHours: {
        weekdays: { open: '08:00', close: '22:00' },
        saturday: { open: '09:00', close: '22:00' },
        sunday: { open: '10:00', close: '22:00' },
      },
    },
    {
      id: '2',
      name: companyName,
      address: 'ул. Ленина, 71',
      coords: [55.15949, 61.38393],
      phone: '+7 (992) 527-45-20',
      businessHours: {
        weekdays: { open: '07:30', close: '22:00' },
        saturday: { open: '09:00', close: '22:00' },
        sunday: { open: '10:00', close: '22:00' },
      },
    },
  ],
  partners: [
    {
      id: '1',
      name: 'Пекарня-кондитерская «Galette»',
      address: 'ул. Свободы, 80',
      phone: '+7 (351) 700-79-83',
      businessHours: {
        weekdays: { open: '07:30', close: '22:00' },
        saturday: { open: '09:00', close: '22:00' },
        sunday: { open: '10:00', close: '22:00' },
      },
    },
  ],
};

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
    link: 'delivery@vatrushka74.ru',
    icon: <IoIosMail />,
  },
  [ContactLinks.CHIEF_MAIL]: {
    link: 'chief123@123.ru',
    icon: <IoIosMail />,
  },
  [ContactLinks.CHIEF_MAIL]: {
    link: 'chief123@123.ru',
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
