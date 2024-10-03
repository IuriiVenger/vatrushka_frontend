import { Button } from 'antd';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Modal } from './Modal';

import { Form } from '@/components/ui/Form/Form';
import { TextAreaInput } from '@/components/ui/Form/TextArea';
import { TModalProps } from '@/types';

type TDeleteAccountModalForm = {
  reason: string;
};

const DeleteAccountModal: FC<TModalProps> = ({ isOpen, setIsOpen }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TDeleteAccountModalForm>({
    mode: 'onChange',
  });

  const onClose = () => {
    setIsOpen(false);
  };

  const submitHandler: SubmitHandler<TDeleteAccountModalForm> = (data) => {
    console.log('the reason i want to delete my account is', data.reason);
    onClose();
  };

  return (
    <Modal title="Точно хотите удалить аккаунт?" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-6 max-sm:gap-4">
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Вместе с ним удалятся: имя и фамилия, телефон, email, история заказов и сохранённые адреса.
        </p>
        <Form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-6 max-sm:gap-4">
          <TextAreaInput
            name="reason"
            rows={3}
            style={{ resize: 'none' }}
            placeholder="Введите текст"
            showCount
            maxLength={1000}
            inputMode="text"
            label="Опишите, пожалуйста, причину удаления:"
            control={control}
            errors={!!errors.reason}
          />
          <div className="flex flex-col gap-3 pt-2 max-sm:gap-2">
            <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base" onClick={onClose}>
              Нет, оставить
            </Button>
            <Button className="w-full max-sm:text-base max-sm:leading-base" htmlType="submit">
              Удалить
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
