import { MenuProps, Dropdown as AntDropdown } from 'antd';
import { ItemType } from 'antd/es/menu/interface';
import { Dispatch, SetStateAction } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

type TDropdownProps<T extends string> = {
  items: ItemType[] | undefined;
  sort: T;
  setSort: Dispatch<SetStateAction<T>>;
  className?: string;
  translations: Record<T, string>;
};

const Dropdown = <T extends string>({ items, sort, setSort, className, translations }: TDropdownProps<T>) => {
  const onSortClick: MenuProps['onClick'] = ({ key }) => {
    setSort(key as T);
  };

  return (
    <AntDropdown
      menu={{ items, onClick: onSortClick }}
      placement="bottomRight"
      trigger={['click']}
      className={className}
    >
      <button
        type="button"
        className="h-fit w-fit rounded-lg border border-border px-8 py-3 transition-all hover:border-primaryHover hover:text-primaryHover focus:border-primaryHover focus:text-primaryHover active:border-primaryHover active:text-primaryHover max-lg:px-6 max-lg:py-2 max-xs:px-4"
      >
        <div className="flex flex-nowrap items-center gap-2 align-middle">
          <span className="text-nowrap text-lg leading-lg max-xs:text-base max-xs:leading-base">
            {translations[sort]}
          </span>
          <IoIosArrowDown />
        </div>
      </button>
    </AntDropdown>
  );
};

export default Dropdown;
