import { Button, Checkbox, CheckboxProps, Rate } from 'antd';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Form } from '../ui/Form/Form';

import { Input } from '../ui/Form/Input';

import { TextAreaInput } from '../ui/Form/TextArea';

import { Modal } from './Modal';

import { useMessage } from '@/hooks/useMessage';
import { TModalProps } from '@/types';

type TFeedbackModalForm = {
  name: string;
  phone: string;
  message: string;
};

const FeedbackModal: FC<TModalProps> = ({ isOpen, setIsOpen }) => {
  const [serviceRate, setServiceRate] = useState(0);
  const [productRate, setProductRate] = useState(0);

  const [isAgree, setIsAgree] = useState(false);

  const { showMessage } = useMessage();

  const onAgree: CheckboxProps['onChange'] = () => {
    setIsAgree(!isAgree);
  };

  const onChangeServiceRate = (value: number) => {
    setServiceRate(value);
  };

  const onChangeProductRate = (value: number) => {
    setProductRate(value);
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<TFeedbackModalForm>({
    mode: 'onChange',
  });

  const submitHandler: SubmitHandler<TFeedbackModalForm> = (data) => {
    console.log('FeedbackModalForm data:', data, 'serviceRate:', serviceRate, 'productRate', productRate);
    setIsOpen(false);
    showMessage({ type: 'success', text: 'Ваше сообщение успешно отправлено' });
  };

  return (
    <Modal title="Ваши отзывы и предложения" isOpen={isOpen} setIsOpen={setIsOpen}>
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
          <TextAreaInput
            name="message"
            rows={3}
            style={{ resize: 'none' }}
            placeholder="Введите текст сообщения"
            inputMode="text"
            label="Сообщение"
            required
            control={control}
            errors={errors.message}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base leading-base">Оцените качество сервиса</p>
          <Rate onChange={onChangeServiceRate} value={serviceRate} allowHalf />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base leading-base">Оцените качество продукции</p>
          <Rate onChange={onChangeProductRate} value={productRate} allowHalf />
        </div>
        <Checkbox onChange={onAgree} checked={isAgree} className="max-sm:pt-2">
          Я принимаю условия{' '}
          <a href="123" className="text-link transition-all hover:text-linkHover">
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
    </Modal>
  );
};

export default FeedbackModal;
