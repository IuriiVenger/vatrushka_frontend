import Link from 'next/link';
import { FC } from 'react';

import { TNavigationLink } from '@/types';

type TLinksListProps = {
  links: TNavigationLink[];
};

export const LinksList: FC<TLinksListProps> = ({ links }) => (
  <nav>
    <ul className="flex flex-col gap-6">
      {links.map(({ title, link }) => (
        <li key={title}>
          <Link href={link} className="text-nowrap text-text">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
