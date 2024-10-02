'use client';

import { Button, Grid } from 'antd';
import { FC, useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

import TabsController from '../../AccountPageComponents/components/TabsController';
import TabContent from '../../AccountPageComponents/TabContent';
import UnauthorizedScreen from '../../AccountPageComponents/UnauthorizedScreen';

import { Dropdown } from '@/components/ui/Dropdown';
import { AccountTabs, filterDropdownItems, FilterOrdersType, filterOrdersTypeTranslation, tabs } from '@/constants';
import { useUrlParams } from '@/hooks/useUrlParams';

const AccountPageContent: FC = () => {
  const [tab, setTab] = useState<AccountTabs | null>(null);
  const [filter, setFilter] = useState<FilterOrdersType>(FilterOrdersType.ALL);

  const { paramValue, setParam, removeParam } = useUrlParams('tab');

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const segmentedItems = Object.values(tabs).map((option) => option);

  const onGoBack = () => {
    setTab(null);
    removeParam();
  };

  const setCurrentTab = (value: AccountTabs) => {
    setTab(value);
    setParam(value);
  };

  const isValidTabParam = (value: string): value is AccountTabs =>
    Object.values(AccountTabs).includes(value as AccountTabs);

  useEffect(() => {
    if (paramValue && isValidTabParam(paramValue)) {
      setCurrentTab(paramValue);
    }

    if (screens.md && (!tab || !paramValue)) {
      setCurrentTab(AccountTabs.PROFILE);
    }
  }, [screens.md]);

  const isAuthorized = true;

  if (!isAuthorized) return <UnauthorizedScreen />;

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start">
        {tab && (
          <Button
            className="hidden h-8 border-none p-0 text-base leading-base max-sm:mb-6 max-sm:flex max-xs:mb-0 max-xs:mt-4"
            onClick={onGoBack}
          >
            <IoIosArrowBack />
            Назад
          </Button>
        )}
        <div
          className={`flex w-full items-center justify-between max-sm:pb-6 max-xs:pt-6 ${tab === tabs[AccountTabs.ORDER_HISTORY].value ? 'max-sm:flex-col max-sm:items-start max-sm:gap-6' : ''}`}
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
