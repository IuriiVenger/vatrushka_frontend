import { Button } from 'antd';

import { Dispatch, FC, SetStateAction, useEffect } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Checkbox } from '@/components/ui/Form/Checkbox';
import { Form } from '@/components/ui/Form/Form';
import { Input } from '@/components/ui/Form/Input';
import { legalLinks } from '@/config/links';
import { AuthModalProcessType } from '@/constants';

type TSignUpModalForm = {
  name: string;
  phone: string;
  email: string | null;
  getPromotions: boolean;
};

type TSignUpProps = {
  setNextStep: () => void;
  setProcessType: Dispatch<SetStateAction<AuthModalProcessType | null>>;
  setPhone: Dispatch<SetStateAction<string>>;
};

const SignUp: FC<TSignUpProps> = ({ setNextStep, setProcessType, setPhone }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<TSignUpModalForm>({
    mode: 'onChange',
    defaultValues: { name: '', phone: '', email: null, getPromotions: true },
  });

  const submitHandler: SubmitHandler<TSignUpModalForm> = (data) => {
    console.log('sign up', data);
    setPhone(data.phone);
    setNextStep();
  };

  useEffect(() => {
    setProcessType(AuthModalProcessType.SIGN_UP);
  }, []);

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
          disabled={!isValid || !isDirty}
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
