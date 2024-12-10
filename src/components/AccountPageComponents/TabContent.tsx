import { FC } from 'react';

import AccountTab from './AccountTab';
import AddressesTab from './AddressesTab';
import BonusesTab from './BonusesTab';
import CurrentOrdersTab from './CurrentOrdersTab';
import OrdersHistoryTab from './OrdersHistoryTab';

import { API } from '@/api/types';
import { AccountTabsOptions, RequestStatus, WalletBalanceType, accountTabs } from '@/constants';
import { StoreDataWithStatusAndMeta } from '@/store/types';
import { TAddressForm, TOrderListWithTerminalAddress } from '@/types';

type TTabContentProps = {
  tab: AccountTabsOptions | null;
  user: API.Auth.Me | null;
  addresses: API.Address.Address[] | null;
  getSuggestions: (value: string) => Promise<API.Dadata.Suggestions.Suggestion[]>;
  activeOrders: StoreDataWithStatusAndMeta<TOrderListWithTerminalAddress | null>;
  inactiveOrders: StoreDataWithStatusAndMeta<TOrderListWithTerminalAddress | null>;
  updateUserAddress: (address_id: string, data: TAddressForm) => Promise<void>;
  createUserAddress: (data: TAddressForm) => Promise<void>;
  deleteUserAddress: (id: string) => Promise<void>;
  updateUserMetadata: (data: API.Auth.UserMetadata.Update.Request) => Promise<void>;
  loadMoreActiveOrders: () => void;
  loadMoreInactiveOrders: () => void;
};

const TabContent: FC<TTabContentProps> = (props) => {
  const { tab, user, addresses, activeOrders, inactiveOrders, loadMoreActiveOrders, loadMoreInactiveOrders } = props;
  const bonusBalance =
    user?.user_metadata?.walletBalances?.find((balance) => balance.type === WalletBalanceType.BONUS)?.balance ?? 0;

  const isInactiveOrdersLoading = inactiveOrders.status === RequestStatus.PENDING;
  const isActiveOrdersLoading = activeOrders.status === RequestStatus.PENDING;

  const tabContentMap = {
    [accountTabs[AccountTabsOptions.PROFILE].value]: <AccountTab {...props} />,
    [accountTabs[AccountTabsOptions.BONUSES].value]: <BonusesTab bonusBalance={bonusBalance} />,
    [accountTabs[AccountTabsOptions.CURRENT_ORDERS].value]: (
      <CurrentOrdersTab
        orders={activeOrders.data}
        loadMoreOrders={loadMoreActiveOrders}
        isLoadMoreAvailable={!activeOrders.meta.isLastPage}
        isLoading={isActiveOrdersLoading}
      />
    ),
    [accountTabs[AccountTabsOptions.ORDER_HISTORY].value]: (
      <OrdersHistoryTab
        orders={inactiveOrders.data}
        loadMoreOrders={loadMoreInactiveOrders}
        isLoading={isInactiveOrdersLoading}
        isLoadMoreAvailable={!inactiveOrders.meta.isLastPage}
      />
    ),
    [accountTabs[AccountTabsOptions.ADDRESSES].value]: <AddressesTab {...props} />,
  };

  if (!tab) {
    return null;
  }

  const content = tabContentMap[tab];

  return <div>{content}</div>;
};

export default TabContent;
