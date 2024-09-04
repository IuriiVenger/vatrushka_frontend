import { BiLogoTelegram, BiLogoVk } from 'react-icons/bi';
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io';

import { TContact } from '@/types';

export const links: Record<string, TContact> = {
  tg: {
    link: 'https://t.me/123',
    icon: <BiLogoTelegram />,
  },
  vk: {
    link: 'https://www.vk.ru/123',
    icon: <BiLogoVk />,
  },
  whatsapp: {
    link: 'https://wa.me/123',
    icon: <IoLogoWhatsapp />,
  },
  mail: {
    link: '123@123.ru',
    icon: <IoIosMail />,
  },
};
