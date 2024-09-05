import { MenuProps, Dropdown as AntDropdown } from 'antd';
import { Dispatch, FC, SetStateAction } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { SortType, SortTypeTranslation } from '@/constants';

type TProps = {
  sort: SortType;
  setSort: Dispatch<SetStateAction<SortType>>;
};

export const Dropdown: FC<TProps> = ({ sort, setSort }) => {
  const onSortClick: MenuProps['onClick'] = ({ key }) => {
    setSort(key as SortType);
  };

  const items: MenuProps['items'] = [
    {
      key: SortType.mostPopular,
      label: SortTypeTranslation[SortType.mostPopular],
    },
    {
      key: SortType.priceDescending,
      label: SortTypeTranslation[SortType.priceDescending],
    },
    {
      key: SortType.priceAscending,
      label: SortTypeTranslation[SortType.priceAscending],
    },
  ];

  return (
    <AntDropdown menu={{ items, onClick: onSortClick }} placement="bottomRight" trigger={['click']}>
      <button
        type="button"
        className="h-fit w-fit rounded-lg border border-border px-8 py-3 transition-all hover:border-primaryHover hover:text-primaryHover focus:border-primaryHover focus:text-primaryHover active:border-primaryHover active:text-primaryHover max-lg:px-6 max-lg:py-2 max-xs:px-4"
      >
        <div className="flex flex-nowrap items-center gap-2 align-middle">
          <span className="text-nowrap text-lg leading-lg max-xs:text-base max-xs:leading-base">
            {SortTypeTranslation[sort]}
          </span>
          <IoIosArrowDown />
        </div>
      </button>
    </AntDropdown>
  );
};
