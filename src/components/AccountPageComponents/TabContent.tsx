import { FC, useMemo } from 'react';

import AccountTab from './AccountTab';
import AddressesTab from './AddressesTab';
import BonusesTab from './BonusesTab';
import CurrentOrdersTab from './CurrentOrdersTab';
import OrdersHistoryTab from './OrdersHistoryTab';

import { AccountTabsOptions, accountTabs } from '@/constants';

type TTabContentProps = {
  tab: AccountTabsOptions | null;
};

const TabContent: FC<TTabContentProps> = ({ tab }) => {
  const content = useMemo(() => {
    switch (tab) {
      case accountTabs[AccountTabsOptions.PROFILE].value:
        return <AccountTab />;

      case accountTabs[AccountTabsOptions.BONUSES].value:
        return <BonusesTab />;

      case accountTabs[AccountTabsOptions.CURRENT_ORDERS].value:
        return <CurrentOrdersTab />;

      case accountTabs[AccountTabsOptions.ORDER_HISTORY].value:
        return <OrdersHistoryTab />;

      case accountTabs[AccountTabsOptions.ADDRESSES].value:
        return <AddressesTab />;

      default:
        return null;
    }
  }, [tab]);

  return <div>{content}</div>;
};

export default TabContent;
