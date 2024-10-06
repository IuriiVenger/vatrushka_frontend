import { Button } from 'antd';

import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import { set, SubmitHandler, useForm } from 'react-hook-form';

import { Checkbox } from '@/components/ui/Form/Checkbox';
import { Form } from '@/components/ui/Form/Form';
import { Input } from '@/components/ui/Form/Input';
import { AuthModalProcessType } from '@/constants';

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
  } = useForm<TSignUpModalForm>({
    mode: 'onChange',
    defaultValues: { name: '', phone: '', email: null, getPromotions: true },
  });

  const [isPending, setIsPending] = useState(false);
  const formPhoneValue = watch('phone');

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
        <Input
          name="email"
          type="email"
          placeholder="ivanov@mail.ru"
          inputMode="email"
          label="Email"
          required
          control={control}
          errors={errors.email}
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
          disabled={!isValid || !isDirty}
          loading={isPending}
        >
          Отправить
        </Button>
        <p className="max-sm:text-sm max-sm:leading-sm">
          Нажимая кнопку &laquo;Отправить&raquo;, я&nbsp;даю согласие на&nbsp;обработку персональных данных
          и&nbsp;соглашаюсь&nbsp;с&nbsp;<a href="123">политикой обработки персональных данных</a> и&nbsp;
          <a href="123">пользовательским соглашением</a>
        </p>
      </div>
    </Form>
  );
};

export default SignUp;
