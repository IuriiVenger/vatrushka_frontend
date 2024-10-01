import { Button, Radio } from 'antd';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Form } from '../ui/Form/Form';

import { Input } from '../ui/Form/Input';

import { Modal } from './Modal';

import { RadioGroup } from '@/components/ui/Form/Radio';
import { addressesTypes } from '@/constants';
import { useMessage } from '@/hooks/useMessage';
import { TAddress, TModalProps } from '@/types';

type TAddressModalForm = {
  id: string;
  address: string;
  entrance: string;
  floor: string;
  apartment: string;
  type: string;
};

type TAddressModalProps = TModalProps & {
  isEdit?: boolean;
  address?: TAddress;
};

const AddressModal: FC<TAddressModalProps> = ({ isOpen, setIsOpen, isEdit = false, address }) => {
  const isEditMode = isEdit && address;

  const { showMessage } = useMessage();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<TAddressModalForm>({
    mode: 'onChange',
    ...(isEditMode && {
      defaultValues: { ...address, type: address?.type.id },
    }),
  });

  const submitHandler: SubmitHandler<TAddressModalForm> = (data) => {
    console.log('adress', data);
    setIsOpen(false);
    showMessage({ type: 'success', text: `Адрес успешно ${isEditMode ? 'изменен' : 'добавлен'} ` });
  };

  const title = isEditMode ? 'Изменить адрес' : 'Добавить адрес';

  const addressTypeOptions = Object.values(addressesTypes);

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <Form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4">
          <Input
            name="address"
            type="entrance"
            placeholder="г. Челябинск"
            inputMode="text"
            label="Адрес (город, улица, номер дома)"
            required
            control={control}
            errors={errors.address}
          />
          <div className="grid grid-cols-3 gap-4">
            <Input
              name="entrance"
              type="number"
              placeholder="00"
              inputMode="numeric"
              label="Подъезд"
              control={control}
              errors={errors.entrance}
              min={0}
              max={100}
            />
            <Input
              name="floor"
              type="number"
              placeholder="00"
              inputMode="numeric"
              label="Этаж"
              control={control}
              errors={errors.floor}
              min={0}
              max={100}
            />
            <Input
              name="apartment"
              type="number"
              placeholder="000"
              inputMode="numeric"
              label="Квартира"
              control={control}
              errors={errors.apartment}
              min={0}
              max={10000}
            />
          </div>
          <RadioGroup name="type" control={control} className="flex flex-col gap-3" required>
            {addressTypeOptions.map((type) => (
              <Radio key={type.id} value={type.id}>
                {type.label}
              </Radio>
            ))}
          </RadioGroup>
          <div className="flex flex-col gap-4 pt-2 max-sm:pt-0">
            <Button
              type="primary"
              className="w-full max-sm:text-base max-sm:leading-base"
              htmlType="submit"
              disabled={!isValid || !isDirty}
            >
              Отправить
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddressModal;
