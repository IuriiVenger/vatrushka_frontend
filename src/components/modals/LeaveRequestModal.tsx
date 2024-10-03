import { Button } from 'antd';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useSuccessModal } from '../../hooks/useSuccessModal';

import { Modal } from './Modal';

import { Form } from '@/components/ui/Form/Form';
import { Input } from '@/components/ui/Form/Input';
import { legalLinks } from '@/config/links';
import { TModalProps } from '@/types';

type TLeaveRequestModalForm = {
  name: string;
  phone: string;
  email: string;
};

const LeaveRequestModal: FC<TModalProps> = ({ isOpen, setIsOpen }) => {
  const { showSuccess } = useSuccessModal({
    setIsOpen,
    title: 'Заявка отправлена',
    text: 'Наши менеджеры скоро свяжутся с вами.',
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<TLeaveRequestModalForm>({
    mode: 'onChange',
  });

  const submitHandler: SubmitHandler<TLeaveRequestModalForm> = (data) => {
    console.log('request for', data);
    showSuccess();
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
              onClick={showSuccess}
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
      </div>
    </Modal>
  );
};

export default LeaveRequestModal;
