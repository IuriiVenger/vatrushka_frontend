import { BiLogoTelegram, BiLogoVk } from 'react-icons/bi';
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io';

import { ContactLinks } from '@/constants';
import { TContact } from '@/types';

export const links: Record<ContactLinks, TContact> = {
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
