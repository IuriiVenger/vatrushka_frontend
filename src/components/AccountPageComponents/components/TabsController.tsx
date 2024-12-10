import { Button, Divider, Grid, Segmented, Skeleton } from 'antd';
import cn from 'classnames';
import { Dispatch, FC, Fragment, SetStateAction } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

import { AccountTabsOptions, accountTabs } from '@/constants';
import useAuth from '@/hooks/useAuth';
import { useUrlParams } from '@/hooks/useUrlParams';
import { useAppDispatch } from '@/store';

type TTabsControllerProps = {
  tab: AccountTabsOptions | null;
  setTab: Dispatch<SetStateAction<AccountTabsOptions | null>>;
  isProfileTab: boolean;
};

const TabsController: FC<TTabsControllerProps> = ({ tab, setTab, isProfileTab }) => {
  const dispatch = useAppDispatch();
  const { signOut } = useAuth(dispatch);
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const { setParam } = useUrlParams('tab');

  const options = Object.values(accountTabs);

  const segmentedItems = options.map((option) => option);

  const onClick = (value: AccountTabsOptions) => {
    setTab(value);
    setParam(value);
  };

  if (!Object.keys(screens).length) return <Skeleton className="pt-10 max-sm:pt-0" />;

  if (!screens.md && tab) return null;

  if (!screens.md)
    return (
      <div className="flex-flex-col w-full">
        {options.map((option) => (
          <Fragment key={option.value}>
            <Button
              type="text"
              onClick={() => onClick(option.value as AccountTabsOptions)}
              className="h-10 w-full justify-between rounded-lg pl-0 text-base leading-base hover:bg-white hover:text-primaryHover"
            >
              {option.label}
              <IoIosArrowForward className="h-5 w-5 opacity-55" />
            </Button>
            <Divider className="m-2" />
          </Fragment>
        ))}
      </div>
    );

  return (
    <div className={cn('flex justify-between pb-14 pt-10 max-lg:pb-10 max-lg:pt-6')}>
      <Segmented
        options={segmentedItems}
        value={tab}
        onChange={(value) => onClick(value as AccountTabsOptions)}
        className="w-max text-lg leading-lg max-lg:text-base max-lg:leading-base"
      />
      {isProfileTab && (
        <Button className="border-none max-lg:text-base max-lg:leading-base max-md:hidden" onClick={signOut}>
          <FiLogOut className="h-6 w-6" />
          Выйти из аккаунта
        </Button>
      )}
    </div>
  );
};

export default TabsController;
