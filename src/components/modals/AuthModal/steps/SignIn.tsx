import { Button } from 'antd';

import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Form from '@/components/ui/Form/Form';
import Input from '@/components/ui/Form/Input';
import { AuthModalProcessType, AuthModalSteps } from '@/constants';
import { formatPhoneNumberInput } from '@/utils/formatters';

type TSignInForm = {
  phone: string;
};

export type TSignInModalProps = {
  setProcessType: Dispatch<SetStateAction<AuthModalProcessType | null>>;
  setStep: Dispatch<SetStateAction<number>>;
  setPhone: Dispatch<SetStateAction<string>>;
  getPhoneOtp: () => Promise<void>;
};

const SignIn: FC<TSignInModalProps> = ({ setProcessType, setStep, setPhone, getPhoneOtp }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
    watch,
    setValue,
    trigger,
  } = useForm<TSignInForm>({
    mode: 'onChange',
  });
  const [isPending, setIsPending] = useState(false);

  const formPhoneValue = watch('phone');

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('phone', formatPhoneNumberInput(e.target.value));
    trigger();
  };

  const submitHandler: SubmitHandler<TSignInForm> = async () => {
    try {
      setIsPending(true);
      await getPhoneOtp();
      setStep(AuthModalSteps.CONFIRM_PHONE);
    } finally {
      setIsPending(false);
    }
  };

  const onSignUp = () => {
    setStep(AuthModalSteps.SIGN_UP);
  };

  useEffect(() => {
    setProcessType(AuthModalProcessType.SIGN_IN);
  }, []);

  useEffect(() => {
    if (formPhoneValue) {
      setPhone(formatPhoneNumberInput(formPhoneValue));
      setValue('phone', formatPhoneNumberInput(formPhoneValue));
    }
  }, [formPhoneValue]);

  return (
    <div className="flex flex-col gap-6 text-lg leading-lg max-sm:gap-4 max-sm:text-base max-sm:leading-base ">
      <div className="flex gap-2">
        <p>Впервые здесь?</p>
        <Button
          type="link"
          className="h-6 text-primary hover:text-primaryHover"
          style={{ padding: 0, textDecoration: 'underline', textUnderlineOffset: 6 }}
          onClick={onSignUp}
        >
          Зарегистрироваться
        </Button>
      </div>
      <Form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-6 max-sm:gap-4 ">
        <Input
          name="phone"
          type="tel"
          placeholder="+7 (999) 999-99-99"
          inputMode="tel"
          label="Номер телефона"
          control={control}
          errors={!!errors.phone}
          onChange={onPhoneChange}
          required
          autoComplete="tel"
        />
        <Button
          type="primary"
          className="w-full max-sm:text-base max-sm:leading-base"
          htmlType="submit"
          disabled={!isValid || !isDirty}
          loading={isPending}
        >
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
