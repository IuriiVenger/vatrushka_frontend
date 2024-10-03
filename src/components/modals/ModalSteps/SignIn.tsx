import { Button } from 'antd';

import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Form from '@/components/ui/Form/Form';
import Input from '@/components/ui/Form/Input';
import { AuthModalProcessType, AuthModalSteps } from '@/constants';

type TSignInForm = {
  phone: string;
};

type TSignInModalProps = {
  setProcessType: Dispatch<SetStateAction<AuthModalProcessType | null>>;
  setStep: Dispatch<SetStateAction<number>>;
  setPhone: Dispatch<SetStateAction<string>>;
};

const SignIn: FC<TSignInModalProps> = ({ setProcessType, setStep, setPhone }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<TSignInForm>({
    mode: 'onChange',
  });

  const submitHandler: SubmitHandler<TSignInForm> = (data) => {
    setPhone(data.phone);
    setStep(AuthModalSteps.CONFIRM_PHONE);
    console.log('code sent to', data.phone);
  };

  const onSignUp = () => {
    setStep(AuthModalSteps.SIGN_UP);
  };

  useEffect(() => {
    setProcessType(AuthModalProcessType.SIGN_IN);
  }, []);

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
          required
          autoComplete="tel"
        />
        <Button
          type="primary"
          className="w-full max-sm:text-base max-sm:leading-base"
          htmlType="submit"
          disabled={!isValid || !isDirty}
        >
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
