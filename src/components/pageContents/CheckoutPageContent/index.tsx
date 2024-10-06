'use client';

import { Alert, Button, Divider, Segmented } from 'antd';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { FormProvider, SubmitHandler, useForm, DefaultValues } from 'react-hook-form';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import CheckoutItem from './CheckoutItem';
import CourierDelivery from './CourierDelivery';
import PickupDelivery from './PickupDelivery';

import OrderConfirmationModal from '@/components/modals/OrderConfirmationModal';
import DatePicker from '@/components/ui/Form/DatePicker';
import Form from '@/components/ui/Form/Form';
import Input from '@/components/ui/Form/Input';
import NumericInput from '@/components/ui/Form/NumericInput';
import TextAreaInput from '@/components/ui/Form/TextArea';
import StepperButton from '@/components/ui/StepperButton';
import { companyInfo, legalLinks } from '@/config/links';
import {
  addressesTypes,
  CurrencySymbol,
  DeliveryTimeOptions,
  deliveryTimeOptions,
  DeliveryTypeOptions,
  deliveryTypeOptions,
  PaymentOptions,
  paymentOptions,
} from '@/constants';
import { order, userInfo } from '@/mocks';
import { TTab } from '@/types';
import { getNounWithDeclension } from '@/utils/formatters';

const count = 3;

export type TCheckoutForm = {
  userAddress: {
    address: string;
    entrance: string;
    floor: string;
    apartment: string;
    type: {
      id: string;
      label: string;
    };
  };
  branchAddress: string | null;
  name: string;
  phone: string;
  message: string;
  date: dayjs.Dayjs | null;
  time: string;
  change: number | null;
  bonusPoints: number | null;
};

const CheckoutPageContent: FC = () => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const [deliveryType, setDeliveryType] = useState<DeliveryTypeOptions>(DeliveryTypeOptions.COURIER);
  const [deliveryTime, setDeliveryTime] = useState<DeliveryTimeOptions>(DeliveryTimeOptions.ASAP);
  const [paymentType, setPaymentType] = useState<PaymentOptions>(PaymentOptions.ONLINE);

  const [cutleryCount, setCutleryCount] = useState(0);

  const [userBonusPoint, setUserBonusPoint] = useState(userInfo.points);
  const [totalSum, setTotalSum] = useState(order.totalPrice);

  const getSegmentedItems = (options: Record<string, TTab>) => Object.values(options).map((option) => option);

  const deliveryTypeSegmentedItems = getSegmentedItems(deliveryTypeOptions);
  const timeSegmentedItems = getSegmentedItems(deliveryTimeOptions);
  const paymentSegmentedItems = getSegmentedItems(paymentOptions);

  const itemsCountText = `${count} ${getNounWithDeclension(count, 'товар', 'товара', 'товаров')}`;

  const defaultFormData: DefaultValues<TCheckoutForm> = {
    userAddress: { address: '', entrance: '', floor: '', apartment: '', type: addressesTypes.flat },
    branchAddress: companyInfo.branches[0].id,
    name: '',
    phone: '',
    message: '',
    date: null,
    time: '',
    change: null,
    bonusPoints: null,
  };

  const methods = useForm<TCheckoutForm>({
    mode: 'onChange',
    defaultValues: defaultFormData,
  });

  const {
    handleSubmit,
    getValues,
    control,
    unregister,
    register,
    resetField,
    formState: { errors, isDirty, isValid },
  } = methods;

  const dateFields: (keyof TCheckoutForm)[] = ['date', 'time'];

  const onDeliveryTypeClick = (value: DeliveryTypeOptions) => {
    setDeliveryType(value);

    if (value === DeliveryTypeOptions.COURIER) {
      register('userAddress');
      unregister('branchAddress');
    } else {
      register('branchAddress');
      unregister('userAddress');
    }
  };

  const onDeliveryTimeClick = (value: DeliveryTimeOptions) => {
    setDeliveryTime(value);

    if (value === DeliveryTimeOptions.SCHEDULED) {
      dateFields.forEach((field) => register(field));
    } else {
      unregister(dateFields);
    }
  };

  const onPaymentClick = (value: PaymentOptions) => {
    setPaymentType(value);

    if (value === PaymentOptions.CASH) {
      register('change');
    } else {
      unregister('change');
    }
  };

  const onRedeemBonusPoints = () => {
    const inputValue = getValues('bonusPoints');

    if (!inputValue) return;

    setUserBonusPoint((prevBonusPoints) => prevBonusPoints - inputValue);
    setTotalSum((prevBonusPoints) => prevBonusPoints - inputValue);

    resetField('bonusPoints');
  };

  const submitHandler: SubmitHandler<TCheckoutForm> = (data) => {
    console.log(
      'checkout order',
      data,
      'time:',
      deliveryTime === DeliveryTimeOptions.ASAP ? deliveryTime : ` ${(data.date?.toDate(), data.time)}`,
      'payment:',
      paymentType === PaymentOptions.ONLINE ? paymentType : data.change,
      'cutlery:',
      cutleryCount,
      'data.change,',
      data.change,
    );
    setIsConfirmationModalOpen(true);
  };

  return (
    <>
      <section className="flex flex-col items-start gap-6 max-sm:gap-4 max-xs:pt-6">
        <Button
          className="h-10 border-none p-0 text-lg leading-lg max-sm:mb-6 max-sm:h-8 max-sm:text-base max-sm:leading-base max-xs:mb-0 max-xs:mt-4"
          href="/cart"
        >
          <IoIosArrowBack />В корзину
        </Button>

        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(submitHandler)} className="flex gap-24 max-xl:gap-10 max-lg:flex-col">
            <div className="flex max-w-full flex-col gap-10 max-sm:gap-8">
              <div className="flex flex-col gap-4 max-sm:gap-2">
                <h1 className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">
                  Оформление заказа
                </h1>
                <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">{`Заказы доставляются ежедневно с 8:00 до 20:00. По вопросам доставки можно обратиться по номеру ${companyInfo.mainPhone} с 8:00 до 20:00.`}</p>
              </div>
              <Segmented
                options={deliveryTypeSegmentedItems}
                value={deliveryType}
                onChange={(value) => onDeliveryTypeClick(value as DeliveryTypeOptions)}
                block
                className="-mt-2 text-lg leading-lg max-lg:text-base max-lg:leading-base"
              />
              {deliveryType === DeliveryTypeOptions.COURIER ? <CourierDelivery /> : <PickupDelivery />}
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Дата и время</h3>
                <div className="flex flex-col gap-4">
                  <Segmented
                    options={timeSegmentedItems}
                    value={deliveryTime}
                    onChange={(value) => onDeliveryTimeClick(value as DeliveryTimeOptions)}
                    block
                    className="outlined text-lg leading-lg max-lg:text-base max-lg:leading-base"
                  />
                  {deliveryTime === DeliveryTimeOptions.SCHEDULED && (
                    <>
                      <div className="flex gap-4">
                        <DatePicker
                          placeholder="Выберите дату"
                          className="h-12 w-full"
                          required
                          name="date"
                          label="Дата"
                          control={control}
                          errors={!!errors.date}
                        />
                        <Input
                          className="w-full"
                          name="time"
                          placeholder="Выберите время"
                          label="Время"
                          control={control}
                          errors={!!errors.time}
                          required
                        />
                      </div>
                      <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
                        Время изготовления заказа может быть скорректировано в зависимости от состава
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Ваши данные</h3>
                <div className="flex gap-4">
                  <Input
                    className="w-full"
                    name="name"
                    placeholder="Иван"
                    label="Имя"
                    control={control}
                    errors={!!errors.name}
                    autoComplete="given-name"
                    required
                  />
                  <Input
                    className="w-full"
                    name="phone"
                    placeholder="+7 (999) 999-99-99"
                    label="Номер телефона"
                    control={control}
                    errors={!!errors.phone}
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 max-sm:hidden">
                <h3 className="text-2xl leading-2xl">Оплата</h3>
                <div className="flex flex-col gap-4">
                  <Segmented
                    options={paymentSegmentedItems}
                    value={paymentType}
                    onChange={(value) => onPaymentClick(value as PaymentOptions)}
                    block
                    className="outlined text-lg leading-lg max-lg:text-base max-lg:leading-base"
                  />
                  {paymentType === PaymentOptions.CASH && (
                    <Input
                      label="Подготовим сдачу"
                      placeholder="Введите сумму"
                      name="change"
                      control={control}
                      errors={!!errors.change}
                      required
                      autoComplete="off"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Дополнительно</h3>
                <TextAreaInput
                  label="Комментарий к заказу"
                  placeholder="Введите текст"
                  name="message"
                  control={control}
                  errors={!!errors.message}
                  rows={4}
                  style={{ resize: 'none' }}
                />
              </div>
            </div>

            <div className="flex h-max min-w-96 flex-col gap-6 rounded-2xl border border-borderSecondary p-6 max-xl:min-w-0 max-lg:grid max-lg:max-w-full max-lg:grid-cols-2 max-lg:flex-row max-sm:flex max-sm:w-full max-sm:flex-col max-sm:gap-4 max-sm:border-none max-sm:p-0">
              <div className="flex w-full flex-col gap-6 max-sm:gap-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Ваш заказ</h2>
                  <Button type="link" href="/cart" className="h-6 p-0">
                    Изменить
                  </Button>
                </div>
                <div className="flex flex-col">
                  {order.items.map((item) => (
                    <div className="flex flex-col" key={item.id}>
                      <CheckoutItem
                        name={item.name}
                        weight={item.weight}
                        modifiers={item.modifiers}
                        quantity={item.quantity}
                        price={item.unitPrice}
                      />
                      <Divider />
                    </div>
                  ))}
                  <div className="flex items-center justify-between">
                    <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">Приборы</p>
                    <div className="w-min">
                      <StepperButton count={cutleryCount} setCount={setCutleryCount} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-6 max-sm:gap-4">
                <Alert message="Время приготовления заказа от 45 минут" type="warning" showIcon />
                <div className="hidden flex-col gap-6 max-sm:flex">
                  <h3 className="text-xl leading-xl">Оплата</h3>
                  <div className="flex flex-col gap-4">
                    <Segmented
                      options={paymentSegmentedItems}
                      value={paymentType}
                      onChange={(value) => onPaymentClick(value as PaymentOptions)}
                      block
                      className="outlined text-base leading-base"
                    />
                    {paymentType === PaymentOptions.CASH && (
                      <Input
                        label="Подготовим сдачу"
                        placeholder="Введите сумму"
                        name="change"
                        control={control}
                        errors={!!errors.change}
                        required
                        autoComplete="off"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-2 max-sm:gap-1">
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
                  <div className="flex items-center justify-between">
                    <p>Стоимость доставки</p>
                    <p>200 {CurrencySymbol.RUB}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-nowrap text-lg font-medium leading-lg">
                    <p>Бонусов</p>
                    <p>{userBonusPoint} Б</p>
                  </div>
                  <NumericInput
                    type="number"
                    inputMode="numeric"
                    name="bonusPoints"
                    placeholder="Сколько хотите списать?"
                    control={control}
                    errors={!!errors.bonusPoints}
                    max={userBonusPoint}
                    min={0}
                    disabled={!userBonusPoint}
                    autoComplete="off"
                    className="w-full"
                    addonAfter={
                      <Button
                        type="link"
                        icon={<IoIosArrowForward className="h-4 w-4" />}
                        onClick={onRedeemBonusPoints}
                        disabled={!isDirty || !userBonusPoint}
                        className="h-12 w-max px-4 py-0 text-primary hover:text-primaryHover"
                      />
                    }
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">
                      <p>Итого:</p>
                      <p>
                        {totalSum} {CurrencySymbol.RUB}
                      </p>
                    </div>
                  </div>
                  <Button
                    type="primary"
                    className="text-lg leading-lg max-sm:text-base max-sm:leading-base"
                    htmlType="submit"
                    disabled={!isDirty || !isValid}
                  >
                    Заказать
                  </Button>
                  <p className="text-sm leading-sm">
                    Нажимая кнопку «заказать», я подтверждаю согласие с&nbsp;условиями{' '}
                    <a href={legalLinks.privacyPolicy} className="text-primary hover:text-primaryHover">
                      политики конфиденциальности
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Form>
        </FormProvider>
      </section>
      <OrderConfirmationModal isOpen={isConfirmationModalOpen} setIsOpen={setIsConfirmationModalOpen} />
    </>
  );
};

export default CheckoutPageContent;
