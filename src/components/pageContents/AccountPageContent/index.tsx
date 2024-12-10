'use client';

import { Button, Grid, Spin } from 'antd';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

import TabsController from '../../AccountPageComponents/components/TabsController';
import TabContent from '../../AccountPageComponents/TabContent';
import UnauthorizedScreen from '../../AccountPageComponents/UnauthorizedScreen';

import { address as addressesApi } from '@/api/address';
import { auth } from '@/api/auth';
import { API } from '@/api/types';
import { AccountTabsOptions, accountTabs } from '@/constants';
import useAuth from '@/hooks/useAuth';
import { useUrlParams } from '@/hooks/useUrlParams';
import { useAppDispatch, useAppSelector } from '@/store';
import { createUserAddress, deleteUserAddress, selectAddresses, updateUserAddress } from '@/store/slices/address';
import { selectConfig } from '@/store/slices/config';
import {
  loadActiveOrders,
  loadInactiveOrders,
  loadMoreActiveOrders,
  loadMoreInactiveOrders,
  selectOrders,
} from '@/store/slices/orders';
import { selectIsNonAnonymousUser, selectUser } from '@/store/slices/user';
import { TAddressForm } from '@/types';
import { convertAddressFormDataToAddress } from '@/utils/converters';

const AccountPageContent: FC = () => {
  const isUserLoggedIn = useAppSelector(selectIsNonAnonymousUser);
  const { userAddresses } = useAppSelector(selectAddresses);
  const { activeOrders, inactiveOrders } = useAppSelector(selectOrders);
  const { user } = useAppSelector(selectUser);
  const { isWebAppInitialized } = useAppSelector(selectConfig);
  const dispatch = useAppDispatch();

  const { signOut, loadUser } = useAuth(dispatch);
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { paramValue, setParam, removeParam } = useUrlParams<string>('tab');

  const [tab, setTab] = useState<AccountTabsOptions | null>(null);

  const isOrderHistoryTab = tab === accountTabs[AccountTabsOptions.ORDER_HISTORY].value;
  const isCurrentOrdersTab = tab === accountTabs[AccountTabsOptions.CURRENT_ORDERS].value;
  const isProfileTab = tab === accountTabs[AccountTabsOptions.PROFILE].value;

  const isValidTabParam = (value: string): value is AccountTabsOptions =>
    Object.values(AccountTabsOptions).includes(value as AccountTabsOptions);

  const updateUserMetadata = async (data: API.Auth.UserMetadata.Update.Request) => {
    await auth.user_metadata.update(data);
    await loadUser();
  };

  const onGoBack = () => {
    setTab(null);
    removeParam();
  };

  const setCurrentTab = (value: AccountTabsOptions) => {
    setTab(value);
    setParam(value);
  };

  const createUserAddressHandler = async (addressFormData: TAddressForm) => {
    const data = await convertAddressFormDataToAddress(addressFormData);
    const resultAction = await dispatch(createUserAddress(data));

    if (createUserAddress.rejected.match(resultAction)) {
      throw resultAction.payload;
    }
  };

  const deleteUserAddressHandler = async (address_id: string) => {
    const resultAction = await dispatch(deleteUserAddress(address_id));

    if (deleteUserAddress.rejected.match(resultAction)) {
      throw resultAction.payload;
    }
  };

  const updateUserAddressHandler = async (address_id: string, addressFormData: TAddressForm) => {
    const data = await convertAddressFormDataToAddress(addressFormData);

    const resultAction = await dispatch(updateUserAddress({ id: address_id, data }));

    if (updateUserAddress.rejected.match(resultAction)) {
      throw resultAction.payload;
    }
  };

  const getSuggestionsHandler = async (value: string) => {
    const { data } = await addressesApi.suggestions(value);
    return data.suggestions;
  };

  const loadMoreActiveOrdersHandler = () => {
    dispatch(loadMoreActiveOrders());
  };

  const loadMoreInactiveOrdersHandler = () => {
    dispatch(loadMoreInactiveOrders());
  };

  useEffect(() => {
    if (paramValue && isValidTabParam(paramValue)) {
      setCurrentTab(paramValue);
    }

    if (screens.md && !tab && !paramValue) {
      setCurrentTab(AccountTabsOptions.PROFILE);
    }
  }, [screens.md, paramValue]);

  useEffect(() => {
    isCurrentOrdersTab && dispatch(loadActiveOrders());
    isOrderHistoryTab && dispatch(loadInactiveOrders());
  }, [isCurrentOrdersTab, isOrderHistoryTab]);

  useEffect(() => {
    loadUser();
  }, []);

  if (!isWebAppInitialized)
    return (
      <div className="flex min-h-100 items-center justify-center">
        <Spin />
      </div>
    );

  if (!isUserLoggedIn) return <UnauthorizedScreen />;

  return (
    <section className="flex w-full flex-col">
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
            // isHistoryTab && 'max-sm:flex-col max-sm:items-start max-sm:gap-6', hide orderHistory filter
          )}
        >
          <h1 className="text-4xl font-medium leading-4xl max-lg:text-3xl max-lg:leading-3xl max-sm:text-2xl max-sm:leading-2xl ">
            {!screens.md && tab ? accountTabs[tab].label : 'Личный кабинет'}
          </h1>
          {isProfileTab && (
            <Button className="hidden h-5 border-none p-0 text-base leading-base max-md:flex" onClick={signOut}>
              <FiLogOut />
              Выйти
            </Button>
          )}
        </div>
      </div>
      {(screens.md || !tab) && (
        <TabsController
          tab={tab}
          setTab={setTab}
          // isHistoryTab={isHistoryTab}  hide orderHistory filter
          isProfileTab={isProfileTab}
        />
      )}
      <TabContent
        tab={tab}
        user={user}
        addresses={userAddresses.data}
        getSuggestions={getSuggestionsHandler}
        updateUserAddress={updateUserAddressHandler}
        createUserAddress={createUserAddressHandler}
        deleteUserAddress={deleteUserAddressHandler}
        updateUserMetadata={updateUserMetadata}
        activeOrders={activeOrders}
        inactiveOrders={inactiveOrders}
        loadMoreActiveOrders={loadMoreActiveOrdersHandler}
        loadMoreInactiveOrders={loadMoreInactiveOrdersHandler}
      />
    </section>
  );
};

export default AccountPageContent;
