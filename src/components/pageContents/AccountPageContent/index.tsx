'use client';

import { Button, Grid } from 'antd';
import { FC, useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

import TabContent from './TabContent';
import TabsController from './tabs/components/TabsController';
import UnauthorizedScreen from './UnauthorizedScreen';

import { Dropdown } from '@/components/ui/Dropdown';
import { AccountTabs, filterDropdownItems, FilterOrdersType, filterOrdersTypeTranslation, tabs } from '@/constants';

const AccountPageContent: FC = () => {
  const [tab, setTab] = useState<AccountTabs | null>(null);
  const [filter, setFilter] = useState<FilterOrdersType>(FilterOrdersType.ALL);

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const segmentedItems = Object.values(tabs).map((option) => option);

  useEffect(() => {
    if (screens.md && !tab) {
      setTab(AccountTabs.PROFILE);
    }
  }, [screens.md]);

  const onGoBack = () => {
    setTab(null);
  };

  const isAuthorized = true;

  if (!isAuthorized) return <UnauthorizedScreen />;

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start">
        {tab && (
          <Button
            className="hidden h-8 border-none p-0 text-base leading-base max-sm:flex max-xs:mt-4"
            onClick={onGoBack}
          >
            <IoIosArrowBack />
            Назад
          </Button>
        )}
        <div
          className={`flex w-full items-center justify-between max-sm:pb-6 max-sm:pt-6 ${tab === tabs[AccountTabs.ORDER_HISTORY].value ? 'max-sm:flex-col max-sm:items-start max-sm:gap-6' : ''}`}
        >
          <h1 className="text-4xl font-medium leading-4xl max-lg:text-3xl max-lg:leading-3xl max-sm:text-2xl max-sm:leading-2xl ">
            {!screens.md && tab ? tabs[tab].label : 'Личный кабинет'}
          </h1>
          {tab === tabs[AccountTabs.PROFILE].value && (
            <Button className="hidden h-5 border-none p-0 text-base leading-base max-md:flex">
              <FiLogOut />
              Выйти
            </Button>
          )}
          {tab === tabs[AccountTabs.ORDER_HISTORY].value && (
            <Dropdown
              sort={filter}
              setSort={setFilter}
              items={filterDropdownItems}
              translations={filterOrdersTypeTranslation}
            />
          )}
        </div>
      </div>
      {(screens.md || !tab) && <TabsController tab={tab} setTab={setTab} segmentedItems={segmentedItems} />}
      <TabContent tab={tab} />
    </section>
  );
};

export default AccountPageContent;
