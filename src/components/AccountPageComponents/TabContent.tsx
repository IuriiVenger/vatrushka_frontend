import { FC, useMemo } from 'react';

import AccountTab from './AccountTab';
import AddressesTab from './AddressesTab';
import BonusesTab from './BonusesTab';
import CurrentOrdersTab from './CurrentOrdersTab';
import OrdersHistoryTab from './OrdersHistoryTab';

import { AccountTabs, accountTabs } from '@/constants';

type TTabContentProps = {
  tab: AccountTabs | null;
};

const TabContent: FC<TTabContentProps> = ({ tab }) => {
  const content = useMemo(() => {
    switch (tab) {
      case accountTabs[AccountTabs.PROFILE].value:
        return <AccountTab />;

      case accountTabs[AccountTabs.BONUSES].value:
        return <BonusesTab />;

      case accountTabs[AccountTabs.CURRENT_ORDERS].value:
        return <CurrentOrdersTab />;

      case accountTabs[AccountTabs.ORDER_HISTORY].value:
        return <OrdersHistoryTab />;

      case accountTabs[AccountTabs.ADDRESSES].value:
        return <AddressesTab />;

      default:
        return null;
    }
  }, [tab]);

  return <div>{content}</div>;
};

export default TabContent;
