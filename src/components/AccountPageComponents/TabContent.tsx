import { FC, useMemo } from 'react';

import AccountTab from './AccountTab';
import AddressesTab from './AddressesTab';
import BonusesTab from './BonusesTab';
import CurrentOrdersTab from './CurrentOrdersTab';
import OrdersHistoryTab from './OrdersHistoryTab';

import { API } from '@/api/types';
import { AccountTabsOptions, accountTabs } from '@/constants';
import { SupabaseUser, TAddressForm } from '@/types';

type TTabContentProps = {
  tab: AccountTabsOptions | null;
  user: SupabaseUser | null;
  addresses: API.Address.Address[] | null;
  getSuggestions: (value: string) => Promise<API.Dadata.Suggestions.Suggestion[]>;
  updateAddress: (address_id: string, data: TAddressForm) => Promise<void>;
  createAddress: (data: TAddressForm) => Promise<void>;
};

const TabContent: FC<TTabContentProps> = (props) => {
  const { tab, user, addresses } = props;

  const content = useMemo(() => {
    switch (tab) {
      case accountTabs[AccountTabsOptions.PROFILE].value:
        return <AccountTab user={user} />;

      case accountTabs[AccountTabsOptions.BONUSES].value:
        return <BonusesTab />;

      case accountTabs[AccountTabsOptions.CURRENT_ORDERS].value:
        return <CurrentOrdersTab />;

      case accountTabs[AccountTabsOptions.ORDER_HISTORY].value:
        return <OrdersHistoryTab />;

      case accountTabs[AccountTabsOptions.ADDRESSES].value:
        return <AddressesTab {...props} />;

      default:
        return null;
    }
  }, [tab, user, addresses]);

  return <div>{content}</div>;
};

export default TabContent;
