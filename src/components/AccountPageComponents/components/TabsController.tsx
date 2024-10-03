import { Button, Divider, Grid, Segmented, Skeleton } from 'antd';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

import Dropdown from '@/components/ui/Dropdown';
import {
  AccountTabs,
  accountTabs,
  filterDropdownItems,
  FilterOrdersType,
  filterOrdersTypeTranslation,
} from '@/constants';
import { useUrlParams } from '@/hooks/useUrlParams';

type TTabsControllerProps = {
  tab: AccountTabs | null;
  setTab: Dispatch<SetStateAction<AccountTabs | null>>;
};

const TabsController: FC<TTabsControllerProps> = ({ tab, setTab }) => {
  const [filter, setFilter] = useState<FilterOrdersType>(FilterOrdersType.ALL);

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const { setParam } = useUrlParams('tab');

  const options = Object.values(accountTabs);

  const segmentedItems = options.map((option) => option);

  const onClick = (value: AccountTabs) => {
    setTab(value);
    setParam(value);
  };

  if (!Object.keys(screens).length) return <Skeleton className="pt-10 max-sm:pt-0" />;

  if (!screens.md && tab) return null;

  if (!screens.md)
    return (
      <div className="flex-flex-col w-full">
        {options.map((option) => (
          <div key={option.value}>
            <Button
              type="text"
              onClick={() => onClick(option.value as AccountTabs)}
              className="h-10 w-full justify-between rounded-lg pl-0 text-base leading-base hover:bg-white hover:text-primaryHover"
            >
              {option.label}
              <IoIosArrowForward className="h-5 w-5 opacity-55" />
            </Button>
            <Divider className="m-2" />
          </div>
        ))}
      </div>
    );

  return (
    <div
      className={`flex justify-between pb-14 pt-10 max-lg:pb-10 max-lg:pt-6 ${tab === accountTabs[AccountTabs.ORDER_HISTORY].value ? 'max-lg:flex-col max-lg:gap-6' : ''}`}
    >
      <Segmented
        options={segmentedItems}
        value={tab}
        onChange={(value) => onClick(value as AccountTabs)}
        className="w-max text-lg leading-lg max-lg:text-base max-lg:leading-base"
      />
      {tab === accountTabs[AccountTabs.PROFILE].value && (
        <Button className="border-none max-lg:text-base max-lg:leading-base max-md:hidden">
          <FiLogOut className="h-6 w-6" />
          Выйти из аккаунта
        </Button>
      )}
      {tab === accountTabs[AccountTabs.ORDER_HISTORY].value && (
        <Dropdown
          sort={filter}
          setSort={setFilter}
          items={filterDropdownItems}
          translations={filterOrdersTypeTranslation}
        />
      )}
    </div>
  );
};

export default TabsController;
