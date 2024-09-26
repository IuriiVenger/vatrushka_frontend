import { Button } from 'antd';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import CustomImage from '../ui/CustomImage';
import { Form } from '../ui/Form/Form';
import { Input } from '../ui/Form/Input';
import { TextAreaInput } from '../ui/Form/TextArea';

import { Modal } from './Modal';
import { useSuccessModal } from './useSuccessModal';

import { CurrencySymbol } from '@/constants';
import { TModalProps } from '@/types';

type TRequestProductModalForm = {
  name: string;
  phone: string;
  message: string;
};

type TRequestProductModalProps = TModalProps & {
  name: string;
  pic: string;
  filling: string;
  weight: string;
  price: string;
};

const RequestProductModal: FC<TRequestProductModalProps> = ({
  isOpen,
  setIsOpen,
  name,
  pic,
  filling,
  weight,
  price,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<TRequestProductModalForm>({
    mode: 'onChange',
  });

  const { showSuccess } = useSuccessModal({
    setIsOpen,
    title: 'Спасибо за заказ',
    text: 'Менеджер свяжется с вами для подтверждения заказа.',
  });

  const submitHandler: SubmitHandler<TRequestProductModalForm> = (data) => {
    console.log('contact me:', data);
    showSuccess();
  };

  return (
    <Modal title="Товар под заказ" isOpen={isOpen} setIsOpen={setIsOpen} width="large">
      <div className="flex flex-col gap-4">
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">Срок изготовления торта: от 12 часов</p>
        <div className="flex gap-6 rounded-2xl border border-border p-4">
          <CustomImage
            src={pic}
            alt="123"
            width={104}
            height={104}
            placeholder="blur"
            className="aspect-square rounded-lg object-cover max-sm:h-16 max-sm:w-16"
          />
          <div className="flex w-full items-center justify-between text-base leading-base max-sm:flex-col max-sm:items-start max-sm:justify-normal max-sm:gap-4 max-sm:text-sm max-sm:leading-sm">
            <div className="flex flex-col">
              <p className="text-lg font-medium leading-lg max-sm:text-base max-sm:leading-base">{name}</p>
              <p className="pt-2 text-textTertiary">Начинка: {filling}</p>
              <p className="pt-0.5 text-textTertiary max-sm:pt-1">Вес: {weight}</p>
            </div>
            <p className="text-xl font-medium leading-xl max-sm:text-lg max-sm:leading-lg">
              {price} {CurrencySymbol.RUB}
            </p>
          </div>
        </div>
      </div>
      <Form onSubmit={handleSubmit(submitHandler)} className="gap-4 pt-6">
        <p className="text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">Ваши данные</p>
        <Input
          name="name"
          className="max-sm:-mt-1"
          placeholder="Иван"
          inputMode="text"
          label="Имя"
          required
          control={control}
          errors={errors.name}
        />
        <Input
          name="phone"
          type="tel"
          placeholder="+7 (999) 999-99-99"
          inputMode="tel"
          label="Номер телефона"
          required
          control={control}
          errors={errors.phone}
        />
        <p className="pt-2 text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">Дополнительно</p>
        <TextAreaInput
          name="message"
          className="max-sm:-mt-1"
          rows={3}
          style={{ resize: 'none' }}
          placeholder="Комментарий к заказу"
          inputMode="text"
          label="Сообщение"
          control={control}
          errors={errors.message}
        />
        <div className="flex flex-col gap-3 pt-2 max-sm:gap-2">
          <Button
            type="primary"
            className="w-max max-sm:text-base max-sm:leading-base"
            htmlType="submit"
            disabled={!isValid || !isDirty}
          >
            Отправить
          </Button>
          <p className="max-sm:text-sm max-sm:leading-sm">
            Нажимая на&nbsp;кнопку вы соглашаетесь с&nbsp;
            <a href="123" className="underline">
              политикой конфиденциальности
            </a>
          </p>
        </div>
      </Form>
    </Modal>
  );
};

export default RequestProductModal;
