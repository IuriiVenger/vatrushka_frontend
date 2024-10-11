'use client';

import { Button, Grid } from 'antd';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

import TabsController from '../../AccountPageComponents/components/TabsController';
import TabContent from '../../AccountPageComponents/TabContent';
import UnauthorizedScreen from '../../AccountPageComponents/UnauthorizedScreen';

import { AccountTabsOptions, accountTabs } from '@/constants';
import { useUrlParams } from '@/hooks/useUrlParams';
import { useAppSelector } from '@/store';
import { selectIsUserLoggedIn } from '@/store/selectors';

const AccountPageContent: FC = () => {
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
  const [tab, setTab] = useState<AccountTabsOptions | null>(null);

  const isHistoryTab = tab === accountTabs[AccountTabsOptions.ORDER_HISTORY].value;
  const isProfileTab = tab === accountTabs[AccountTabsOptions.PROFILE].value;

  const { paramValue, setParam, removeParam } = useUrlParams('tab');

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const onGoBack = () => {
    setTab(null);
    removeParam();
  };

  const setCurrentTab = (value: AccountTabsOptions) => {
    setTab(value);
    setParam(value);
  };

  const isValidTabParam = (value: string): value is AccountTabsOptions =>
    Object.values(AccountTabsOptions).includes(value as AccountTabsOptions);

  useEffect(() => {
    if (paramValue && isValidTabParam(paramValue)) {
      setCurrentTab(paramValue);
    }

    if (screens.md && (!tab || !paramValue)) {
      setCurrentTab(AccountTabsOptions.PROFILE);
    }
  }, [screens.md, paramValue]);

  useEffect(() => {
    if (paramValue && isValidTabParam(paramValue)) setCurrentTab(paramValue);
  }, [paramValue]);

  if (!isUserLoggedIn) return <UnauthorizedScreen />;

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start">
        {tab && (
          <Button
            className="hidden h-8 border-none p-0 text-base leading-base max-sm:mb-6 max-sm:flex max-xs:mb-6"
            onClick={onGoBack}
          >
            <IoIosArrowBack />
            Назад
          </Button>
        )}
        <div
          className={cn(
            'flex w-full items-center justify-between max-sm:pb-6',
            isHistoryTab && 'max-sm:flex-col max-sm:items-start max-sm:gap-6',
          )}
        >
          <h1 className="text-4xl font-medium leading-4xl max-lg:text-3xl max-lg:leading-3xl max-sm:text-2xl max-sm:leading-2xl ">
            {!screens.md && tab ? accountTabs[tab].label : 'Личный кабинет'}
          </h1>
          {isProfileTab && (
            <Button className="hidden h-5 border-none p-0 text-base leading-base max-md:flex">
              <FiLogOut />
              Выйти
            </Button>
          )}
        </div>
      </div>
      {(screens.md || !tab) && (
        <TabsController tab={tab} setTab={setTab} isHistoryTab={isHistoryTab} isProfileTab={isProfileTab} />
      )}
      <TabContent tab={tab} />
    </section>
  );
};

export default AccountPageContent;
