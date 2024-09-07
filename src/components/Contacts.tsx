import { Button } from 'antd';
import { cloneElement, FC } from 'react';

import { contactLinks } from '@/config/links';
import { TContact } from '@/types';

type TContactsProps = {
  noMail?: boolean;
};

export const Contacts: FC<TContactsProps> = ({ noMail = false }) => {
  const filteredLinks = Object.fromEntries(Object.entries(contactLinks).filter(([key]) => key !== 'mail'));

  const contacts = Object.values<TContact>(noMail ? filteredLinks : contactLinks);

  return (
    <div className="flex gap-4">
      {contacts.map(({ icon, link }) => (
        <Button
          key={link}
          ghost
          href={link}
          className="border-none text-primary transition-all hover:text-primaryActive max-md:h-10 max-md:w-10 max-md:text-base"
          icon={cloneElement(icon, { className: 'h-6 w-6' })}
        />
      ))}
    </div>
  );
};
