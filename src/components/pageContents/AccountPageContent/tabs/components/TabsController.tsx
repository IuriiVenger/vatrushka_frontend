import { Button, Divider, Grid, Segmented, Skeleton } from 'antd';
import { Dispatch, FC, SetStateAction } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

import { AccountTabs, tabs } from '@/constants';
import { TTab } from '@/types';

type TTabsControllerProps = {
  tab: AccountTabs | null;
  setTab: Dispatch<SetStateAction<AccountTabs | null>>;
  segmentedItems: TTab[];
};

const TabsController: FC<TTabsControllerProps> = ({ tab, setTab, segmentedItems }) => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const onClick = (value: AccountTabs) => {
    setTab(value);
  };

  if (!Object.keys(screens).length) return <Skeleton className="pt-10 max-sm:pt-0" />;

  if (!screens.md && tab) return null;

  if (!screens.md)
    return (
      <div className="flex-flex-col w-full">
        {Object.values(tabs).map((option) => (
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
    <div className="flex justify-between pb-14 pt-10 max-lg:pb-10 max-lg:pt-6">
      <Segmented
        options={segmentedItems}
        value={tab}
        onChange={(value) => setTab(value as AccountTabs)}
        className="w-max text-lg leading-lg max-lg:text-base max-lg:leading-base"
      />
      {tab === tabs[AccountTabs.PROFILE].value && (
        <Button className="border-none max-lg:text-base max-lg:leading-base max-md:hidden">
          <FiLogOut className="h-6 w-6" />
          Выйти из аккаунта
        </Button>
      )}
    </div>
  );
};

export default TabsController;
