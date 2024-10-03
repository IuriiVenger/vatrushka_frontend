'use client';

import { Button } from 'antd';
import { FC, useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Form from '@/components/ui/Form/Form';
import Input from '@/components/ui/Form/Input';
import { companyInfo } from '@/config/links';
import { AuthModalProcessType } from '@/constants';
import { useMessage } from '@/hooks/useMessage';
import { getNounWithDeclension } from '@/utils/formatters';
import { isConfirmationCodeValid } from '@/utils/validation';

type ConfirmPhoneForm = {
  confirmationCode: string;
};

type TConfirmPhoneModalProps = {
  processType: AuthModalProcessType | null;
  onClose: () => void;
  phone: string;
};

const ConfirmPhone: FC<TConfirmPhoneModalProps> = ({ processType, onClose, phone }) => {
  const [seconds, setSeconds] = useState(60);
  const [isSendingPossible, setIsSendingPossible] = useState(true);

  const { showMessage } = useMessage();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
    watch,
  } = useForm<ConfirmPhoneForm>({
    mode: 'onChange',
  });

  const successMessage = useMemo(() => {
    switch (processType) {
      case AuthModalProcessType.SIGN_IN:
        return 'Вы успешно авторизовались';

      case AuthModalProcessType.SIGN_UP:
        return 'Вы успешно зарегистрировались';

      default:
        return 'Номер успешно изменён';
    }
  }, [processType]);

  const submitHandler: SubmitHandler<ConfirmPhoneForm> = (data) => {
    console.log('code sent', data.confirmationCode);
    onClose();
    showMessage({ type: 'success', text: successMessage });
  };

  const onUpdateCode = () => {
    console.log('code sent again to', phone);
    setIsSendingPossible(false);
  };

  const validate = () => isConfirmationCodeValid(watch('confirmationCode'));

  useEffect(() => {
    if (isSendingPossible) return;

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 1) {
          return prevSeconds - 1;
        }

        clearInterval(interval);
        setIsSendingPossible(true);

        return 60;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSendingPossible]);

  return (
    <div className="flex flex-col gap-6 text-lg leading-lg max-sm:gap-4 max-sm:text-base max-sm:leading-base">
      <p className="mb-2">На ваш телефон {phone} выслан СМС-код для подтверждения</p>
      <Form className="flex flex-col gap-6 max-sm:gap-4" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <Input
            name="confirmationCode"
            label="Введите код подтверждения"
            control={control}
            validate={validate}
            min={0}
            inputMode="numeric"
            errors={!!errors.confirmationCode}
            autoComplete="off"
          />
          {isSendingPossible ? (
            <Button
              type="link"
              className="h-6 w-max text-accent transition-all hover:text-accentHover active:text-accentActive"
              style={{ padding: 0, marginBlock: 8 }}
              onClick={onUpdateCode}
            >
              отправить код повторно
            </Button>
          ) : (
            <p>
              код отправлен, запросить повторный можно через {seconds}{' '}
              {getNounWithDeclension(seconds, 'секунда', 'секунды', 'секунд')}
            </p>
          )}
          <p className="pt-2 text-textTertiary">
            Не получили код? Позвоните на номер
            <br />
            {companyInfo.mainPhone} и мы поможем.
          </p>
        </div>
        <Button
          type="primary"
          className="w-full max-sm:text-base max-sm:leading-base"
          disabled={!isValid || !isDirty}
          htmlType="submit"
        >
          Подтвердить
        </Button>
      </Form>
    </div>
  );
};

export default ConfirmPhone;
