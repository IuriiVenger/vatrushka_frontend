import { Button, Radio, RadioChangeEvent } from 'antd';
import { FC, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import { TCheckoutForm } from '../pageContents/CheckoutPageContent';

import { Modal } from './Modal';

import { addressesTypes } from '@/constants';
import { userInfo } from '@/mocks';
import { TAddress, TModalProps } from '@/types';

type TAddressesModalProps = TModalProps & {
  setSelectedAddress: UseFormSetValue<TCheckoutForm>;
};

const AddressesModal: FC<TAddressesModalProps> = ({ isOpen, setIsOpen, setSelectedAddress }) => {
  const [value, setValue] = useState<Omit<TAddress, 'id'>>(userInfo.addresses[0]);

  const onConfirm = () => {
    setSelectedAddress('userAddress', value);
    setIsOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Modal title="Мои адреса" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-6 max-sm:gap-4">
        <Radio.Group onChange={onChange} value={value}>
          <div className="flex flex-col gap-4 max-sm:gap-2">
            {userInfo.addresses.map((userAddress) => (
              <Radio key={userAddress.id} value={userAddress}>
                {`${userAddress.address}${userAddress.entrance ? `, подъезд ${userAddress.entrance}` : ''}${userAddress.floor ? `, этаж ${userAddress.floor}` : ''}${userAddress.apartment ? `, квартира ${userAddress.apartment}` : ''}${userAddress.type !== addressesTypes.flat ? `, ${userAddress.type.label}` : ''}`}
              </Radio>
            ))}
          </div>
        </Radio.Group>
        <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base" onClick={onConfirm}>
          Выбрать
        </Button>
      </div>
    </Modal>
  );
};

export default AddressesModal;
