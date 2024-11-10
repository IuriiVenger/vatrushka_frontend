import { Button, Dropdown } from 'antd';
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

type TUserMenuProps = {
  onCloseAll: () => void;
};

const UserMenu: FC<TUserMenuProps> = ({ onCloseAll }) => {
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onUserButtonClick = () => {
    onCloseAll();
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
      <Dropdown trigger={dropDownTrigger} menu={{ items: userItems }} placement="bottomRight" overlayClassName="pt-2">
        <Button
          aria-label="Открыть личный кабинет или войти в аккаунт"
          type="link"
          onClick={onUserButtonClick}
          className="h-6 w-4 p-0 text-textTertiary transition-all hover:text-textQuaternary"
          icon={<FaRegUser className="h-6 min-w-4" />}
        />
      </Dropdown>
      <AuthModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
    </>
  );
};

export default UserMenu;
