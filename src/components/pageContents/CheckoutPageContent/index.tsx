'use client';

import { Alert, Button, Divider, Radio, Segmented, Slider, Spin, message } from 'antd';

import cn from 'classnames';

import Link from 'next/link';
import { useRouter } from 'next-nprogress-bar';
import { FC, useEffect, useMemo, useState } from 'react';
import { FormProvider, SubmitHandler, useForm, DefaultValues } from 'react-hook-form';
import { HiOutlineCreditCard } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';

import sbp_icon from '../../../assets/images/payments/sbp_icon.svg';

import CheckoutItem from './CheckoutItem';
import CourierDelivery from './CourierDelivery';
import PickupDelivery from './PickupDelivery';

import ScheduledTime from './ScheduledTime';

import { address as addressesApi } from '@/api/address';

import { orders } from '@/api/orders';
import { API } from '@/api/types';
import EmptyCartScreen from '@/components/EmptyCartScreen';
import { TOrderPaymentStatusModalProps } from '@/components/modals/OrderPaymentStatusModal';
import Form from '@/components/ui/Form/Form';
import Input from '@/components/ui/Form/Input';
import RadioGroup from '@/components/ui/Form/Radio';
import TextAreaInput from '@/components/ui/Form/TextArea';
import { companyInfo, legalLinks } from '@/config/links';
import {
  CashPaymentOptions,
  CurrencySymbol,
  DeliveryTimeOptions,
  deliveryTimeOptions,
  deliveryTypeOptions,
  GlobalModalNames,
  OnlinePaymentOptions,
  onlinePaymentOptions,
  OrderType,
  PaymentOptions,
  paymentOptions,
} from '@/constants';
import useCart from '@/hooks/useCart';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectAddresses } from '@/store/slices/address';
import { loadActiveOrders, setPaymentStatusModalParams } from '@/store/slices/orders';
import { setModalVisible } from '@/store/slices/ui';
import { selectIsNonAnonymousUser, selectUser } from '@/store/slices/user';
import { TAddressForm, TCheckoutForm, TTab } from '@/types';
import { convertAddressFormDataToAddress, convertAddressToAddressFormData } from '@/utils/converters';
import { getNounWithDeclension } from '@/utils/formatters';

const CheckoutPageContent: FC = () => {
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useAppSelector(selectIsNonAnonymousUser);
  const { userAddresses, organizationAddresses } = useAppSelector(selectAddresses);
  const { user } = useAppSelector(selectUser);
  const { activeCart, cartCardsData, isCartInitialized, initCart } = useCart();

  const router = useRouter();

  const [deliveryType, setDeliveryType] = useState<OrderType>(OrderType.DELIVERY);
  const [deliveryTime, setDeliveryTime] = useState<DeliveryTimeOptions>(DeliveryTimeOptions.ASAP);
  const [paymentType, setPaymentType] = useState<PaymentOptions>(PaymentOptions.ONLINE);
  // const [cutleryCount, setCutleryCount] = useState(0);
  const [availableToSpendBonusPoints, setAvailableToSpendBonusPoints] = useState(0);
  const [userBonusPoints, setUserBonusPoints] = useState(0);
  const [usedBonusPoint, setUsedBonusPoint] = useState(0);
  const [deliveryAddress, setAddress] = useState<API.Address.Create.Request | null>(null);

  const [isOrderLoading, setIsOrderLoading] = useState(false);
  const [availableDeliveryTimeframes, setAvailableDeliveryTimeframes] = useState<
    API.Orders.DeliveryTimeframes.DeliveryTimeframe[]
  >([]);

  const orderAmount = activeCart.data?.total_sum || 0;
  const totalSum = orderAmount - usedBonusPoint;
  const isDeliveryTypeDisabled = orderAmount < companyInfo.minSumForCourierDelivery;

  const [availablePaymentMethods, setAvailablePaymentMethods] = useState<API.Payment.PaymentMethods.PaymentMethod[]>(
    [],
  );

  const bonusPaymentMethod = useMemo(
    () => availablePaymentMethods.find((method) => method.is_loyalty),
    [availablePaymentMethods],
  );

  const loadAvailableToSpendBonusPoints = async () => {
    if (!user?.phone || !orderAmount) {
      setAvailableToSpendBonusPoints(0);
      return;
    }

    const { data: availableToSpend } = await orders.loyalty.bonus.calculate({
      order_amount: orderAmount,
      phone: user.phone,
    });

    setAvailableToSpendBonusPoints(availableToSpend.payable);
    setUserBonusPoints(availableToSpend.available);
  };

  const loadAvailablePaymentMethods = async () => {
    const { data } = await orders.paymentMethods({ sum: orderAmount });
    setAvailablePaymentMethods(data);
  };

  // const getSegmentedItems = (options: Record<string, TTab>) => Object.values(options).map((option) => option);

  const getSegmentedItems = (options: Record<string, TTab>, callback?: (option: TTab) => Partial<TTab>) =>
    Object.values(options).map((option) => ({
      ...option,
      ...(callback ? callback(option) : {}),
    }));

  // Условие для дизейбла
  // const orderAmount = 400;
  const deliveryTypeSegmentedItems = getSegmentedItems(deliveryTypeOptions, (option) => ({
    disabled: option.value === OrderType.DELIVERY && isDeliveryTypeDisabled,
  }));

  const timeSegmentedItems = getSegmentedItems(deliveryTimeOptions);
  const paymentSegmentedItems = getSegmentedItems(paymentOptions);
  // const deliveryTypeSegmentedItems = getSegmentedItems(deliveryTypeOptions);

  const itemsCountText = `${activeCart.data?.items?.length ?? 0} ${getNounWithDeclension(activeCart.data?.items?.length ?? 0, 'товар', 'товара', 'товаров')}`;

  const defaultFormData: DefaultValues<TCheckoutForm> = {
    userAddress: { cityStreetBuildingFlat: '', entrance: '', floor: '', doorphone: '' },
    branchAddress: companyInfo.branches[0].id,
    name: user?.user_metadata?.first_name || '',
    phone: user?.phone || '',
    message: '',
    date: null,
    time: '',
    change: null,
    onlinePaymentType: null,
  };

  const methods = useForm<TCheckoutForm>({
    mode: 'onChange',
    defaultValues: defaultFormData,
  });

  const {
    handleSubmit,
    control,
    unregister,
    register,
    setValue,
    watch,
    formState: { errors, isValid },
  } = methods;

  const dateFields: (keyof TCheckoutForm)[] = ['date', 'time'];

  const terminalAddressId = watch('branchAddress');
  const deliveryDate = watch('date');

  const isAddressSelected = !!deliveryAddress?.latitude || !!terminalAddressId;

  const isOrderButtonDisabled = !isValid || isOrderLoading || !isAddressSelected;

  const terminalAddress = organizationAddresses.data?.find((terminal) => terminal.id === terminalAddressId);

  const setSelectedAddress = async (formData: TAddressForm) => {
    const convertedAddress = await convertAddressFormDataToAddress(formData);
    setAddress(convertedAddress);
  };

  const getSuggestionsHandler = async (value: string) => {
    const { data } = await addressesApi.suggestions(value);
    return data.suggestions;
  };

  const loadAvailableDeliveryTimeframes = async () => {
    if (deliveryType === OrderType.DELIVERY && (!deliveryAddress?.latitude || !deliveryAddress?.longitude)) return;
    if (deliveryType === OrderType.TAKEOUT && !terminalAddress) return;

    const requestData: API.Orders.DeliveryTimeframes.Request =
      deliveryType === OrderType.DELIVERY
        ? {
            latitude: deliveryAddress!.latitude!,
            longitude: deliveryAddress!.longitude!,
            delivery_type: OrderType.DELIVERY,
          }
        : {
            terminal_id: terminalAddress!.terminal_group_id,
            delivery_type: OrderType.TAKEOUT,
            latitude: terminalAddress!.latitude,
            longitude: terminalAddress!.longitude,
          };

    const { data } = await orders.deliveryTimeframes(requestData);

    setAvailableDeliveryTimeframes(data.timeframes);
  };

  const onDeliveryTypeChange = (value: OrderType) => {
    setDeliveryType(value);

    if (value === OrderType.DELIVERY) {
      register('userAddress');
      deliveryAddress && setValue('userAddress', convertAddressToAddressFormData(deliveryAddress));
      unregister('branchAddress');
    } else {
      register('branchAddress');
      unregister('userAddress');
    }
  };

  const onDeliveryTimeChange = (value: DeliveryTimeOptions) => {
    setDeliveryTime(value);

    if (value === DeliveryTimeOptions.SCHEDULED) {
      dateFields.forEach((field) => register(field));
    } else {
      unregister(dateFields);
    }
  };

  const onPaymentTypeChange = (value: PaymentOptions) => {
    setPaymentType(value);

    if (value === PaymentOptions.CASH) {
      register('change');
      unregister('onlinePaymentType');
    } else {
      unregister('change');
      register('onlinePaymentType');
    }
  };

  const submitHandler: SubmitHandler<TCheckoutForm> = async (formData) => {
    const specialInstructions = `${deliveryTime === DeliveryTimeOptions.ASAP ? 'Доставить как можно скорее. ' : ''}${
      formData.change ? `Подготовить сдачу с ${formData.change}. ` : ''
    }${formData.message}`;

    const paymentId =
      paymentType === PaymentOptions.CASH
        ? availablePaymentMethods.find((method) => method.iiko_code === CashPaymentOptions.CASH)?.id ||
          CashPaymentOptions.CASH
        : formData.onlinePaymentType;

    const firstAvailableInterval = availableDeliveryTimeframes[0].intervals[0].start;

    const timeOfDelivery =
      deliveryTime === DeliveryTimeOptions.ASAP ? firstAvailableInterval : formData.time || firstAvailableInterval;

    if (!activeCart.data?.id || !paymentId) throw new Error();

    try {
      setIsOrderLoading(true);

      const payment_methods = [
        {
          payment_method_id: paymentId,
          sum: totalSum,
        },
      ];

      if (bonusPaymentMethod && usedBonusPoint > 0) {
        payment_methods.push({
          payment_method_id: bonusPaymentMethod.id,
          sum: usedBonusPoint,
        });
      }

      const requestData: API.Orders.Create.Request =
        deliveryType === OrderType.DELIVERY
          ? {
              cart_id: activeCart.data?.id,
              delivery_address: deliveryAddress!,
              special_instructions: specialInstructions,
              delivery_time: timeOfDelivery,
              type: deliveryType,
              payment_methods,
            }
          : {
              cart_id: activeCart.data?.id,
              terminal_id: terminalAddress!.terminal_group_id,
              special_instructions: specialInstructions,
              delivery_time: timeOfDelivery,
              type: deliveryType,
              payment_methods,
            };

      const { data } = await orders.create(requestData);

      if (data.payment_link) {
        router.push(data.payment_link);
      } else {
        const paymentStatusModalProps: TOrderPaymentStatusModalProps = {
          isPaymentSuccessful: paymentType === PaymentOptions.CASH,
          isCashPayment: paymentType === PaymentOptions.CASH,
          isUserLoggedIn: !user?.is_anonymous,
          phoneNumber: user?.phone || null,
          orderNumber: data.order_number,
        };
        dispatch(setPaymentStatusModalParams(paymentStatusModalProps));
        dispatch(setModalVisible(GlobalModalNames.ORDER_PAYMENT_STATUS));
        router.push('/');
        message.success('Заказ успешно создан'); // TODO implement global successOrder message
        await initCart();
        dispatch(loadActiveOrders());
      }
    } finally {
      setIsOrderLoading(false);
    }
  };

  useEffect(() => {
    if (user?.phone) {
      setValue('phone', user.phone);
      user?.user_metadata?.first_name && setValue('name', user.user_metadata.first_name);
    }
  }, [user]);

  useEffect(() => {
    loadAvailablePaymentMethods();
  }, [orderAmount]);

  useEffect(() => {
    setAddress(null);
    setValue('branchAddress', null);
  }, [deliveryType]);

  useEffect(() => {
    loadAvailableDeliveryTimeframes();
  }, [deliveryAddress, terminalAddress]);

  useEffect(() => {
    setValue('time', null);
  }, [deliveryDate, deliveryAddress]);

  useEffect(() => {
    if (!isDeliveryTypeDisabled || orderAmount === 0) return;

    onDeliveryTypeChange(OrderType.TAKEOUT);
  }, [orderAmount]);

  useEffect(() => {
    loadAvailableToSpendBonusPoints();
  }, [orderAmount, userBonusPoints]);

  if (!isCartInitialized || !user)
    return (
      <div className="flex min-h-100 items-center justify-center">
        <Spin />
      </div>
    );

  if (!cartCardsData.length) return <EmptyCartScreen />;

  return (
    <section className="flex flex-col items-start gap-6 max-sm:gap-4">
      <Link href="/cart">
        <Button className="h-10 border-none p-0 text-lg leading-lg max-sm:mb-6 max-sm:h-8 max-sm:text-base max-sm:leading-base max-xs:mb-0">
          <IoIosArrowBack />В корзину
        </Button>
      </Link>

      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(submitHandler)} className="flex gap-24 max-xl:gap-10 max-lg:flex-col">
          <div className="flex max-w-full flex-col gap-10 max-sm:gap-8">
            <div className="flex flex-col gap-4 max-sm:gap-2">
              <h1 className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">Оформление заказа</h1>
              <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">{`Заказы доставляются ежедневно с 8:00 до 20:00. По вопросам доставки можно обратиться по номеру ${companyInfo.mainPhone} с 8:00 до 20:00.`}</p>
            </div>
            <Segmented
              options={deliveryTypeSegmentedItems}
              value={deliveryType}
              onChange={(value) => onDeliveryTypeChange(value as OrderType)}
              block
              className="-mt-2 text-lg leading-lg max-lg:text-base max-lg:leading-base"
            />
            {deliveryType === OrderType.DELIVERY ? (
              <CourierDelivery
                selectedAddress={deliveryAddress}
                setSelectedAddress={setSelectedAddress}
                getSuggestions={getSuggestionsHandler}
                isUserLoggedIn={isUserLoggedIn}
                addresses={userAddresses.data}
              />
            ) : (
              <PickupDelivery addresses={organizationAddresses.data || []} />
            )}
            {!isAddressSelected && <Alert message="Выберите адрес доставки" type="warning" showIcon />}

            <div
              className={cn(
                'relative flex flex-col gap-10 max-sm:gap-8',
                !isAddressSelected && 'cursor-not-allowed opacity-70 grayscale',
              )}
            >
              {!isAddressSelected && <div className="absolute left-0 top-0 z-10 h-full w-full" />}

              <div className="flex flex-col gap-5">
                <h3 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Дата и время</h3>
                <div className="flex flex-col gap-4">
                  <Segmented
                    options={timeSegmentedItems}
                    value={deliveryTime}
                    onChange={(value) => onDeliveryTimeChange(value as DeliveryTimeOptions)}
                    block
                    className="outlined text-lg leading-lg max-lg:text-base max-lg:leading-base"
                  />
                  {deliveryTime === DeliveryTimeOptions.SCHEDULED && (
                    <>
                      <ScheduledTime
                        timeframes={availableDeliveryTimeframes}
                        date={deliveryDate}
                        control={control}
                        errors={errors}
                      />
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
                    onChange={(value) => onPaymentTypeChange(value as PaymentOptions)}
                    block
                    className="outlined text-lg leading-lg max-lg:text-base max-lg:leading-base"
                  />
                  {paymentType === PaymentOptions.ONLINE ? (
                    <RadioGroup className="flex flex-col gap-4" name="onlinePaymentType" control={control} required>
                      {availablePaymentMethods.map((method) => {
                        const { id, is_online, iiko_code } = method;

                        if (!is_online) return null;

                        const isSelected = watch('onlinePaymentType') === id;

                        return (
                          <div
                            className={`rounded-2xl border  p-4 ${isSelected ? 'border-primary' : 'border-borderSecondary'}`}
                          >
                            <Radio value={id} className="flex items-start gap-2">
                              <div className="flex items-center gap-2">
                                <p>{onlinePaymentOptions[iiko_code as OnlinePaymentOptions].label || iiko_code}</p>
                                {iiko_code === OnlinePaymentOptions.SBP ? (
                                  <img src={sbp_icon.src} alt="СБП" height={24} width={19} className="mb-1" />
                                ) : (
                                  <HiOutlineCreditCard fontSize={24} className="mb-1" />
                                )}
                              </div>
                            </Radio>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  ) : (
                    <Input
                      label="Подготовим сдачу"
                      placeholder="Введите сумму"
                      name="change"
                      control={control}
                      errors={!!errors.change}
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
          </div>

          <div className="sticky right-0 top-6 flex h-max min-w-96 flex-col gap-6 rounded-2xl border border-borderSecondary p-6 max-xl:min-w-0 max-lg:static max-lg:grid max-lg:max-w-full max-lg:grid-cols-2 max-lg:flex-row max-sm:flex max-sm:w-full max-sm:flex-col max-sm:gap-4 max-sm:border-none max-sm:p-0">
            <div className="flex w-full flex-col gap-6 max-sm:gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Ваш заказ</h2>
                <Link href="/cart">
                  <Button type="link" className="h-6 p-0">
                    Изменить
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col">
                {cartCardsData.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <CheckoutItem
                      name={item.name}
                      weight={item.weight}
                      description={item.description}
                      quantity={item.quantity}
                      price={item.price}
                    />
                    <Divider />
                  </div>
                ))}
                {/* <div className="flex items-center justify-between">
                    <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">Приборы</p>
                    <div className="w-min">
                      <StepperButton count={cutleryCount} setCount={setCutleryCount} />
                    </div>
                  </div> */}
              </div>
            </div>
            <div className="flex w-full flex-col gap-6 max-sm:gap-4">
              <div className="flex flex-col gap-2 ">
                <Alert message="Время приготовления заказа от 45 минут" type="warning" showIcon />
                {isDeliveryTypeDisabled && (
                  <Alert
                    message={`Сумма заказа на доставку курьером должна быть не менее ${companyInfo.minSumForCourierDelivery} ${CurrencySymbol.RUB}`}
                    type="warning"
                    showIcon
                  />
                )}
              </div>
              <div className="hidden flex-col gap-6 max-sm:flex">
                <h3 className="text-xl leading-xl">Оплата</h3>
                <div className="flex flex-col gap-4">
                  <Segmented
                    options={paymentSegmentedItems}
                    value={paymentType}
                    onChange={(value) => onPaymentTypeChange(value as PaymentOptions)}
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
                      autoComplete="off"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2 max-sm:gap-1">
                <div className="flex items-center justify-between">
                  <p>{itemsCountText} на сумму</p>
                  <p>
                    {activeCart.data?.total_sum} {CurrencySymbol.RUB}
                  </p>
                </div>
                {/* <div className="flex items-center justify-between">
                    <p>Скидка по промокоду</p>
                    <p>
                      {order.discounts[0].discount} {CurrencySymbol.RUB}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Стоимость доставки</p>
                    <p>200 {CurrencySymbol.RUB}</p>
                  </div> */}
              </div>
              {!!userBonusPoints && (
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-nowrap text-lg font-medium leading-lg">
                      <p>Бонусов</p>
                      <p>{userBonusPoints} Б</p>
                    </div>
                    <div className="flex justify-between text-nowrap text-lg leading-lg">
                      <p>Доступно к списанию</p>
                      <p>{availableToSpendBonusPoints} Б</p>
                    </div>
                    {!!availableToSpendBonusPoints && (
                      <div className="flex justify-between text-nowrap text-lg leading-lg">
                        <p>Использовано</p>
                        <p>{usedBonusPoint} Б</p>
                      </div>
                    )}
                  </div>

                  <p className="text-lg leading-lg">Сколько хотите списать?</p>
                  <Slider
                    marks={{
                      0: {
                        label: <span className="whitespace-nowrap text-lg leading-lg">0</span>,
                      },
                      [availableToSpendBonusPoints]: {
                        label: (
                          <span className="whitespace-nowrap text-lg leading-lg">{`${availableToSpendBonusPoints}`}</span>
                        ),
                      },
                    }}
                    className="cursor-pointer"
                    min={0}
                    max={availableToSpendBonusPoints}
                    value={usedBonusPoint}
                    onChange={setUsedBonusPoint}
                  />
                </div>
              )}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">
                    <p>К оплате:</p>
                    <p>
                      {totalSum} {CurrencySymbol.RUB}
                    </p>
                  </div>
                </div>
                <Button
                  type="primary"
                  className="text-lg leading-lg max-sm:text-base max-sm:leading-base"
                  htmlType="submit"
                  disabled={isOrderButtonDisabled}
                  loading={isOrderLoading}
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
  );
};

export default CheckoutPageContent;
