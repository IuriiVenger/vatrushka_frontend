import { Dropdown, message } from 'antd';
import { MenuProps } from 'antd/lib';
import Link from 'next/link';
import { FC, useMemo, useState } from 'react';

import { FaRegUser } from 'react-icons/fa';

import { TMenuItem } from '../Header';

import UserInfo from './UserInfo';

import AuthModal from '@/components/modals/AuthModal';
import { AccountTabsOptions } from '@/constants';
import { useAppSelector } from '@/store';
import { selectIsUserLoggedIn } from '@/store/selectors';

const userItems: TMenuItem[] = [
  {
    label: <UserInfo user={{ name: 'Иван Иванов', phone: '+7 (912) 555-88-99', email: 'ivanov.ivan.22@mail.ru' }} />,
    key: 'info',
    type: 'group',
  },
  { type: 'divider' },
  { label: <Link href={`/account?tab=${AccountTabsOptions.PROFILE}`}>Профиль</Link>, key: 'profile' },
  {
    label: <Link href={`/account?tab=${AccountTabsOptions.CURRENT_ORDERS}`}>Текущие заказы</Link>,
    key: 'currentOrders',
  },
  {
    label: <Link href={`/account?tab=${AccountTabsOptions.ORDER_HISTORY}`}>История заказов</Link>,
    key: 'ordersHistory',
  },
  { label: <Link href={`/account?tab=${AccountTabsOptions.ADDRESSES}`}>Мои адреса</Link>, key: 'addresses' },
  { type: 'divider' },
  { label: 'Выйти из аккаунта', key: 'logOut' },
];

const UserMenu: FC = () => {
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const onUserIconClick = () => {
    if (!isUserLoggedIn) {
      setIsAuthModalOpen(true);
    }
  };

  const dropDownTrigger = useMemo(() => {
    const trigger: Array<'click'> = [];

    if (isUserLoggedIn) {
      trigger.push('click');
    }

    return trigger;
  }, [isUserLoggedIn]);

  return (
    <>
      <Dropdown
        trigger={dropDownTrigger}
        menu={{ items: userItems, onClick }}
        placement="bottomRight"
        overlayClassName="pt-2 w-60"
      >
        <FaRegUser
          onClick={onUserIconClick}
          className="h-6 w-4 cursor-pointer text-textTertiary transition-all hover:text-textQuaternary max-lg:h-5 max-lg:w-5"
        />
      </Dropdown>
      <AuthModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
    </>
  );
};

export default UserMenu;
