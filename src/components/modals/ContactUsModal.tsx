import { Button, Checkbox, CheckboxProps, Tabs, TabsProps } from 'antd';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useSuccessModal } from '../../hooks/useSuccessModal';

import { Modal } from './Modal';

import { Form } from '@/components/ui/Form/Form';
import { Input } from '@/components/ui/Form/Input';
import { TextAreaInput } from '@/components/ui/Form/TextArea';
import { legalLinks } from '@/config/links';
import { TModalProps } from '@/types';

type TContactUsModalForm = {
  name: string;
  phone: string;
  message: string;
};

const ContactUsModal: FC<TModalProps> = ({ isOpen, setIsOpen }) => {
  const [isAgree, setIsAgree] = useState(false);

  const { showSuccess } = useSuccessModal({
    setIsOpen,
    title: 'Ваша заявка успешно отправлена',
    text: 'В ближайшее время с вами свяжется менеджер.',
  });

  const onChange: CheckboxProps['onChange'] = () => {
    setIsAgree((prev) => !prev);
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<TContactUsModalForm>({
    mode: 'onChange',
  });

  const submitHandler: SubmitHandler<TContactUsModalForm> = (data) => {
    console.log('contact me:', data);
    showSuccess();
  };

  const items: TabsProps['items'] = [
    {
      key: 'message',
      label: 'Написать нам',
      children: (
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
            <TextAreaInput
              name="message"
              rows={3}
              style={{ resize: 'none' }}
              placeholder="Введите текст сообщения"
              inputMode="text"
              label="Сообщение"
              required
              control={control}
              errors={!!errors.message}
            />
          </div>
          <Checkbox onChange={onChange} checked={isAgree}>
            Я принимаю условия{' '}
            <a href={legalLinks.privacyPolicy} className="text-link transition-all hover:text-linkHover">
              Политики конфиденциальности
            </a>
          </Checkbox>
          <Button
            type="primary"
            className="w-full max-sm:text-base max-sm:leading-base"
            htmlType="submit"
            disabled={!isValid || !isDirty || !isAgree}
          >
            Отправить
          </Button>
        </Form>
      ),
    },
    {
      key: 'call',
      label: 'Заказать звонок',
      children: (
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
          </div>
          <Checkbox onChange={onChange} checked={isAgree}>
            Я принимаю условия{' '}
            <a href={legalLinks.privacyPolicy} className="text-link transition-all hover:text-linkHover">
              Политики конфиденциальности
            </a>
          </Checkbox>
          <Button
            type="primary"
            className="w-full max-sm:text-base max-sm:leading-base"
            htmlType="submit"
            disabled={!isValid || !isDirty || !isAgree}
          >
            Отправить
          </Button>
        </Form>
      ),
    },
  ];

  return (
    <Modal title="Связаться с нами" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-6 max-sm:gap-4">
        <Tabs defaultActiveKey="write" items={items} />
      </div>
    </Modal>
  );
};

export default ContactUsModal;
