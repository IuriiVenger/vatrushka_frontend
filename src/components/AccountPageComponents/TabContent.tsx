import { FC, useMemo } from 'react';

import AccountTab from './AccountTab';
import AddressesTab from './AddressesTab';
import BonusesTab from './BonusesTab';
import CurrentOrdersTab from './CurrentOrdersTab';
import OrdersHistoryTab from './OrdersHistoryTab';

import { AccountTabs, tabs } from '@/constants';

type TTabContentProps = {
  tab: AccountTabs | null;
};

const TabContent: FC<TTabContentProps> = ({ tab }) => {
  const content = useMemo(() => {
    switch (tab) {
      case tabs[AccountTabs.PROFILE].value:
        return <AccountTab />;

      case tabs[AccountTabs.BONUSES].value:
        return <BonusesTab />;

      case tabs[AccountTabs.CURRENT_ORDERS].value:
        return <CurrentOrdersTab />;

      case tabs[AccountTabs.ORDER_HISTORY].value:
        return <OrdersHistoryTab />;

      case tabs[AccountTabs.ADDRESSES].value:
        return <AddressesTab />;

      default:
        return null;
    }
  }, [tab]);

  return <div>{content}</div>;
};

export default TabContent;
