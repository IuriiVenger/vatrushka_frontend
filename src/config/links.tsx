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
      id: '3',
      name: 'Пекарня-кондитерская «Galette»',
      address: 'ул. Свободы, 80',
      coords: [55.15715, 61.412507],
      phone: '+7 (351) 700-79-83',
      businessHours: {
        weekdays: { open: '07:30', close: '22:00' },
        saturday: { open: '09:00', close: '22:00' },
        sunday: { open: '10:00', close: '22:00' },
      },
    },
  ],
};

export const legalLinks = {
  termsOfService: 'https://example.com/terms-of-service',
  privacyPolicy: 'https://example.com/privacy-policy',
  dataProcessingPolicy: 'https://example.com/data-processing-policy',
};

export const contactLinks: Record<ContactLinks, TContact> = {
  [ContactLinks.TELEGRAM]: {
    link: 'https://t.me/vatrushkachel',
    icon: <BiLogoTelegram />,
    transliteration: 'Телеграм',
  },
  [ContactLinks.VK]: {
    link: 'https://vk.com/vatrushkachel',
    icon: <BiLogoVk />,
    transliteration: 'Вконтакте',
  },
  [ContactLinks.WHATS_APP]: {
    link: 'https://wa.me/73517007981',
    icon: <IoLogoWhatsapp />,
    transliteration: 'Ватсап',
  },
  [ContactLinks.MAIL]: {
    link: 'sales@pirogvatrushka.ru',
    icon: <IoIosMail />,
    transliteration: 'Имейл',
  },
  [ContactLinks.CHIEF_MAIL]: {
    link: 'delivery@vatrushka74.ru',
    icon: <IoIosMail />,
    transliteration: 'Имейл директора',
  },
};

export const navigationLinks: Record<NavigationLinks, TNavigationLink> = {
  // [NavigationLinks.ABOUT]: {
  //   link: '/about-us',
  //   title: 'О нас',
  // },
  [NavigationLinks.CONTACTS]: {
    link: 'contacts',
    title: 'Контакты',
  },
  [NavigationLinks.OFFERS]: {
    link: 'promotions',
    title: 'Акции',
  },
  [NavigationLinks.WHOLESALE]: {
    link: 'wholesale',
    title: 'Оптовые продажи',
  },
  [NavigationLinks.DELIVERY]: {
    link: 'delivery',
    title: 'Условия доставки',
  },
  [NavigationLinks.BONUS]: {
    link: 'bonus',
    title: 'Бонусная программа',
  },
  [NavigationLinks.CONDITIONS]: {
    link: 'return-policy',
    title: 'Условия возврата и обмена',
  },
  // [NavigationLinks.FEEDBACK]: {
  //   link: 'https://www.google.com',
  //   title: 'Ваши отзывы и предложения',
  // },
};
