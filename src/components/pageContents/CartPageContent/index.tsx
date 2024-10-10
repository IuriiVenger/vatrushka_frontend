'use client';

import { Alert, Button, Divider } from 'antd';
import { FC, Fragment, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoIosArrowForward } from 'react-icons/io';

import ItemCard from './ItemCard';

import AuthModal from '@/components/modals/AuthModal';
import Input from '@/components/ui/Form/Input';
import { CurrencySymbol } from '@/constants';
import { order, products } from '@/mocks';
import { getNounWithDeclension } from '@/utils/formatters';

const count = 3;

type TDiscountForm = {
  promoCode: string;
};

const CartPageContent: FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const itemsCountText = `${count} ${getNounWithDeclension(count, 'товар', 'товара', 'товаров')}`;

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm<TDiscountForm>({
    mode: 'onChange',
  });

  const onClear = () => {
    console.log('Очистить корзину clicked');
  };

  const onCheckPromoCode: SubmitHandler<TDiscountForm> = (data) => {
    console.log('onCheckPromoCode:', data);
  };

  // TODO: fix
  const isLoggedIn = true;

  const onContinue = () => {
    if (!isLoggedIn) {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <>
      <section className="flex gap-24 max-xl:gap-10 max-lg:flex-col max-sm:gap-0">
        <div className="flex w-full flex-col gap-12 max-lg:gap-8">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2 max-sm:gap-1">
              <h1 className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">Корзина</h1>
              <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">{itemsCountText}</p>
            </div>
            <Button type="text" onClick={onClear} className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
              Очистить корзину
            </Button>
          </div>
          <div className="flex flex-col">
            {products.slice(0, 2).map((product, index) => (
              <Fragment key={product.id}>
                {index !== 0 && <Divider />}
                <ItemCard key={product.id} card={product} />
              </Fragment>
            ))}
          </div>
        </div>
        <Divider className="hidden max-sm:block" />

        <div className="sticky right-0 top-6 flex h-max min-w-96 flex-col gap-6 rounded-2xl border border-borderSecondary p-6 max-xl:min-w-min max-xl:max-w-72 max-lg:static max-lg:grid max-lg:max-w-full max-lg:grid-cols-2 max-lg:flex-row max-lg:items-end max-sm:flex max-sm:w-full max-sm:flex-col max-sm:gap-4 max-sm:border-none max-sm:p-0">
          <div className="flex w-full flex-col gap-6 max-sm:gap-4">
            <h2 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Сумма заказа</h2>
            <div className="flex flex-col gap-2 max-sm:gap-1">
              <div className="flex items-center justify-between">
                <p>{itemsCountText} на сумму</p>
                <p>
                  {order.totalPrice} {CurrencySymbol.RUB}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>Скидка по промокоду</p>
                <p>
                  {order.discounts[0].discount} {CurrencySymbol.RUB}
                </p>
              </div>
            </div>
            <Input
              name="promoCode"
              placeholder="Введите промокод"
              control={control}
              errors={!!errors.promoCode}
              autoComplete="off"
              addonAfter={
                <Button
                  type="link"
                  icon={<IoIosArrowForward className="h-4 w-4" />}
                  onClick={handleSubmit(onCheckPromoCode)}
                  disabled={!isDirty}
                  className="h-11 w-max px-4 py-0 text-primary hover:text-primaryHover"
                />
              }
            />
            <div className=" flex flex-col gap-1">
              <div className="flex justify-between text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">
                <p>Итого:</p>
                <p>
                  {order.totalPrice} {CurrencySymbol.RUB}
                </p>
              </div>
              <p className="text-base leading-base">Без учета возможной стоимости доставки</p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 max-sm:gap-4">
            <div className="flex flex-col gap-4 py-2 max-sm:gap-2">
              <Alert message="Время приготовления заказа от 45 минут" type="warning" showIcon />
              <Alert
                message={`Сумма заказа на доставку курьером должна быть не менее 500 ${CurrencySymbol.RUB}`}
                type="warning"
                showIcon
              />
            </div>
            <Button
              type="primary"
              className="text-lg leading-lg max-sm:text-base max-sm:leading-base"
              onClick={onContinue}
              href={isLoggedIn ? '/checkout' : undefined}
            >
              Перейти к оформлению
            </Button>
          </div>
        </div>
      </section>
      <AuthModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
    </>
  );
};

export default CartPageContent;
