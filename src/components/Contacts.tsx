import { Button, Grid } from 'antd';
import { cloneElement, FC } from 'react';

import { links } from '@/config/links';
import { TContact } from '@/types';

type TContactsProps = {
  noMail?: boolean;
};

export const Contacts: FC<TContactsProps> = ({ noMail = false }) => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const filteredLinks = Object.fromEntries(Object.entries(links).filter(([key]) => key !== 'mail'));

  const contacts = Object.values<TContact>(noMail ? filteredLinks : links);

  return (
    <div className="flex gap-4">
      {contacts.map((contact) => {
        const { icon, link } = contact;

        const ContactIcon = cloneElement(icon, {
          className: 'h-6 w-6',
        });

        return (
          <Button
            key={contact.link}
            size={screens.lg ? 'middle' : 'small'}
            ghost
            href={link}
            className="border-none text-primary transition-all hover:text-primaryActive"
            icon={ContactIcon}
          />
        );
      })}
    </div>
  );
};
