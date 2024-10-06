import { Button } from 'antd';
import { FC } from 'react';

import { CurrencySymbol } from '@/constants';
import { userInfo } from '@/mocks';
import { getNounWithDeclension } from '@/utils/formatters';

const BonusesTab: FC = () => {
  const balance = `${userInfo.points} ${getNounWithDeclension(userInfo.points, 'балл', 'балла', 'баллов')}`;

  return (
    <div className="rounded-2xl border border-borderSecondary p-6 text-lg leading-lg max-sm:border-none  max-sm:p-0 max-sm:text-base max-sm:leading-base">
      <h2 className="text-2xl font-medium leading-2xl max-sm:hidden">Бонусные баллы</h2>
      <div className="mt-6 flex w-max gap-16 rounded-2xl bg-bgLayout p-6 text-xl leading-xl max-sm:mt-0 max-sm:w-full max-sm:justify-between max-sm:rounded-lg max-sm:p-4 max-sm:text-lg max-sm:leading-lg">
        <p className="">Мой баланс</p>
        <p className="font-medium text-primary">{balance}</p>
      </div>
      <div className="flex flex-col gap-2 pt-6 max-sm:pt-8">
        <p>1 бонусный балл = 1 {CurrencySymbol.RUB}</p>
        <p>Оплачивайте баллами до 100% стоимости следующего заказа.</p>
      </div>
      <Button className="mt-6 max-sm:mt-8 max-xs:w-full" href="/bonus">
        Подробнее
      </Button>
    </div>
  );
};

export default BonusesTab;
