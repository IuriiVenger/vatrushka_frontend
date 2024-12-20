import { Button } from 'antd';

import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import Checkbox from '@/components/ui/Form/Checkbox';
import Form from '@/components/ui/Form/Form';
import Input from '@/components/ui/Form/Input';
import { legalLinks } from '@/config/links';
import { AuthModalProcessType } from '@/constants';
import { formatPhoneNumberInput } from '@/utils/formatters';

type TSignUpModalForm = {
  name: string;
  phone: string;
  email: string | null;
  getPromotions: boolean;
};

export type TSignUpProps = {
  setNextStep: () => void;
  setProcessType: Dispatch<SetStateAction<AuthModalProcessType | null>>;
  setPhone: Dispatch<SetStateAction<string>>;
  getPhoneOtp: () => Promise<void>;
};

const SignUp: FC<TSignUpProps> = ({ setNextStep, setProcessType, setPhone, getPhoneOtp }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
    watch,
    setValue,
    trigger,
  } = useForm<TSignUpModalForm>({
    mode: 'onChange',
    defaultValues: { name: '', phone: '', email: null, getPromotions: true },
  });

  const [isPending, setIsPending] = useState(false);
  const formPhoneValue = watch('phone');

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('phone', formatPhoneNumberInput(e.target.value));
    trigger();
  };

  const submitHandler: SubmitHandler<TSignUpModalForm> = async () => {
    try {
      setIsPending(true);
      await getPhoneOtp();
      setNextStep();
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    setProcessType(AuthModalProcessType.SIGN_UP);
  }, []);

  useEffect(() => {
    setPhone(formPhoneValue);
  }, [formPhoneValue]);

  return (
    <Form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-6 max-sm:gap-4">
      <div className="flex flex-col gap-4">
        <Input
          name="name"
          placeholder="Иван"
          inputMode="text"
          label="Имя"
          required
          control={control}
          errors={!!errors.name}
          autoComplete="given-name"
        />
        <Input
          name="phone"
          type="tel"
          placeholder="+7 (999) 999-99-99"
          inputMode="tel"
          label="Номер телефона"
          required
          control={control}
          errors={!!errors.phone}
          onChange={onPhoneChange}
          autoComplete="tel"
        />
        <Input
          name="email"
          type="email"
          placeholder="ivanov@mail.ru"
          inputMode="email"
          label="Email"
          required
          control={control}
          errors={!!errors.email}
          autoComplete="email"
        />
      </div>
      <Checkbox
        name="getPromotions"
        className="pb-3 pt-2 max-sm:pb-2"
        control={control}
        label="Сообщайте мне об акциях и особых предложениях"
      />
      <div className="flex flex-col gap-4">
        <Button
          type="primary"
          className="w-full max-sm:text-base max-sm:leading-base"
          htmlType="submit"
          disabled={!isValid && isDirty}
          loading={isPending}
        >
          Отправить
        </Button>
        <p className="max-sm:text-sm max-sm:leading-sm">
          Нажимая кнопку &laquo;Отправить&raquo;, я&nbsp;даю согласие на&nbsp;обработку персональных данных
          и&nbsp;соглашаюсь&nbsp;с&nbsp;
          <a href={legalLinks.dataProcessingPolicy}>политикой обработки персональных данных</a> и&nbsp;
          <a href={legalLinks.termsOfService}>пользовательским соглашением</a>
        </p>
      </div>
    </Form>
  );
};

export default SignUp;
