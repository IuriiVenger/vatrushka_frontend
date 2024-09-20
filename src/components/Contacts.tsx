import { Button } from 'antd';
import { cloneElement, FC } from 'react';

import { ContactLinks } from '@/constants';
import { TContact } from '@/types';

type TContactsProps = {
  contacts: Partial<Record<ContactLinks, TContact>>;
  className?: string;
};

export const Contacts: FC<TContactsProps> = ({ contacts, className }) => {
  const links = Object.values<TContact>(contacts);

  return (
    <div className="flex gap-4">
      {links.map(({ icon, link }) => (
        <Button
          key={link}
          ghost
          href={link}
          className={`border-none text-primary transition-all hover:text-primaryActive max-md:h-10 max-md:w-10 max-md:text-base ${className}`}
          icon={cloneElement(icon, { className: 'h-6 w-6' })}
        />
      ))}
    </div>
  );
};
