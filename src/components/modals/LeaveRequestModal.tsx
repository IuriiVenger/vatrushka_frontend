import { Button } from 'antd';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useSuccessModal } from '../../hooks/useSuccessModal';

import Modal from './Modal';

import Form from '@/components/ui/Form/Form';
import Input from '@/components/ui/Form/Input';
import { legalLinks } from '@/config/links';
import { TModalProps } from '@/types';

type TLeaveRequestModalForm = {
  name: string;
  phone: string;
  email: string;
};

type TLeaveRequestModalProps = TModalProps & {
  onSubmit: (data: TLeaveRequestModalForm) => Promise<void> | void;
};

const LeaveRequestModal: FC<TLeaveRequestModalProps> = ({ isOpen, setIsOpen, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { showSuccess } = useSuccessModal({
    setIsOpen,
    title: 'Заявка отправлена',
    text: 'Наши менеджеры скоро свяжутся с вами.',
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<TLeaveRequestModalForm>({
    mode: 'onChange',
  });

  const submitHandler: SubmitHandler<TLeaveRequestModalForm> = async (data) => {
    try {
      setIsLoading(true);
      await onSubmit(data);
      showSuccess();
      reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal title="Оставить заявку" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <Form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4">
          <Input
            name="name"
            type="text"
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
          <div className="flex flex-col gap-4 pt-2 max-sm:pt-0">
            <Button
              type="primary"
              className="w-full max-sm:text-base max-sm:leading-base"
              htmlType="submit"
              disabled={!isValid && isDirty}
              loading={isLoading}
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
      </div>
    </Modal>
  );
};

export default LeaveRequestModal;
