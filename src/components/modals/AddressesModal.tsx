import { Button, Radio } from 'antd';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Modal } from './Modal';

import { RadioGroup } from '@/components/ui/Form/Radio';
import { userInfo } from '@/mocks';
import { TModalProps } from '@/types';

type TAddressesModalForm = {
  address: string;
};

const AddressesModal: FC<TModalProps> = ({ isOpen, setIsOpen }) => {
  const onClick = () => {
    setIsOpen(false);
  };

  const [value, setValue] = useState<string>(userInfo.addresses[0].id);

  const onChange = (address: string) => {
    console.log('radio checked', address);
    setValue(address);
  };

  const { control } = useForm<TAddressesModalForm>({
    mode: 'onChange',
  });

  return (
    <Modal title="Мои адреса" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-6 max-sm:gap-4">
        <RadioGroup onChange={onChange} value={value} name="address" control={control}>
          <div className="flex flex-col gap-4 max-sm:gap-2">
            {userInfo.addresses.map(({ id, address }) => (
              <Radio key={id} value={id}>
                {address}
              </Radio>
            ))}
          </div>
        </RadioGroup>
        <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base" onClick={onClick}>
          Выбрать
        </Button>
      </div>
    </Modal>
  );
};

export default AddressesModal;
