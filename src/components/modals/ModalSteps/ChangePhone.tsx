'use client';

import { Button } from 'antd';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Form } from '@/components/ui/Form/Form';
import { Input } from '@/components/ui/Form/Input';

type TChangePhoneModalForm = {
  phone: string;
};

type TChangePhoneModalProps = {
  onChangePhone: (phoneNumber: string) => void;
};

export const ChangePhone: FC<TChangePhoneModalProps> = ({ onChangePhone }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<TChangePhoneModalForm>({
    mode: 'onChange',
  });

  const submitHandler: SubmitHandler<TChangePhoneModalForm> = (data) => {
    console.log('code sent to', data.phone);
    onChangePhone(data.phone);
  };

  return (
    <Form className="flex flex-col gap-6 max-sm:gap-4" onSubmit={handleSubmit(submitHandler)}>
      <Input
        name="phone"
        type="tel"
        placeholder="+7 (999) 999-99-99"
        inputMode="tel"
        label="Введите новый номер телефона"
        control={control}
        errors={!!errors.phone}
        required
        autoComplete="tel"
      />
      <Button
        type="primary"
        className="w-full max-sm:text-base max-sm:leading-base"
        htmlType="submit"
        disabled={!isValid || !isDirty}
      >
        Подтвердить
      </Button>
    </Form>
  );
};

export default ChangePhone;
