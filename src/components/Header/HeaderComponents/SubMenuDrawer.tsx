import { Drawer, Button } from 'antd';
import Link from 'next/link';
import { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { catalogOptions } from '@/mocks';

type TSubMenuDrawerProps = {
  isSubMenuOpened: boolean;
  onCloseSubMenu: () => void;
  onCloseAll: () => void;
};

const SubMenuDrawer: FC<TSubMenuDrawerProps> = ({ isSubMenuOpened, onCloseSubMenu, onCloseAll }) => (
  <Drawer
    width="100vw"
    closable={false}
    open={isSubMenuOpened}
    placement="left"
    className="top-44 max-lg:top-40 max-md:top-32 max-sm:top-24"
    rootClassName="max-sm:top-24 max-lg:top-40 max-md:top-32 top-44 absolute"
    aria-label="Категории каталога"
  >
    <div className="flex w-full flex-col gap-6 px-10 pt-4 text-lg leading-lg max-sm:text-base max-sm:leading-base max-xs:m-auto max-xs:max-w-82 max-xs:px-0">
      <Button
        type="link"
        className="h-6 w-max p-0 text-lg leading-lg text-accent transition-all hover:text-accentHover active:text-accentActive max-sm:text-base max-sm:leading-base"
        onClick={onCloseSubMenu}
      >
        <IoIosArrowBack />
        Назад
      </Button>
      <div className="gap flex max-h-[calc(100%-5rem)] flex-col gap-6 overflow-scroll">
        {catalogOptions.map((option) => (
          <Link
            key={option.id}
            onClick={onCloseAll}
            href={`/${option.slug}`}
            className="hover:text-primaryHover active:text-primaryActive"
          >
            {option.name}
          </Link>
        ))}
      </div>
    </div>
  </Drawer>
);

export default SubMenuDrawer;
