import { Button } from 'antd';
import { cloneElement, FC } from 'react';

import { ContactLinks } from '@/constants';
import { TContact } from '@/types';

type TContactsProps = {
  contacts: Partial<Record<ContactLinks, TContact>>;
  className?: string;
};

const Contacts: FC<TContactsProps> = ({ contacts, className }) => {
  const links = Object.values<TContact>(contacts);

  return (
    <div className="flex gap-4">
      {links.map(({ icon, link, transliteration }) => (
        <Button
          key={link}
          ghost
          aria-label={`Связаться с нами через ${transliteration}`}
          href={link}
          referrerPolicy="no-referrer"
          target="_blank"
          className={`border-none text-primary transition-all hover:text-primaryActive max-md:h-10 max-md:w-10 max-md:text-base ${className}`}
          icon={cloneElement(icon, { className: 'h-6 w-6' })}
        />
      ))}
    </div>
  );
};

export default Contacts;
