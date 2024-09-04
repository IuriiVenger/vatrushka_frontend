import { Button, Grid } from 'antd';
import { cloneElement, FC } from 'react';

import { links } from '@/assets/links';
import { TContact } from '@/types';

const { useBreakpoint } = Grid;

type TProps = {
  noMail?: boolean;
};

export const Contacts: FC<TProps> = ({ noMail = false }) => {
  const screens = useBreakpoint();

  const contacts = noMail ? Object.fromEntries(Object.entries(links).filter(([key]) => key !== 'mail')) : links;

  return (
    <div className="flex gap-4">
      {Object.values<TContact>(contacts).map((contact) => {
        const { icon, link } = contact;

        const ContactIcon = cloneElement(icon, {
          className: 'h-6 w-6',
        });

        return (
          <Button
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
