import Link from 'next/link';
import { FC } from 'react';

import { TNavigationLink } from '@/types';

type TLinksListProps = {
  links: TNavigationLink[];
};

const LinksList: FC<TLinksListProps> = ({ links }) => (
  <nav>
    <ul className="flex flex-col gap-6">
      {links.map(({ title, link }) => (
        <li key={title}>
          <Link
            href={link}
            className="text-nowrap text-text transition-all hover:text-primary active:text-primaryActive"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default LinksList;
