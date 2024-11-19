import { Button, Radio, RadioChangeEvent } from 'antd';
import { FC, useMemo, useState } from 'react';

import Modal from './Modal';

import { API } from '@/api/types';

import { TAddressForm, TModalProps } from '@/types';
import { convertAddressToAddressFormData, convertAddressToCityStreetBuildingFlat } from '@/utils/converters';

type TAddressesModalProps = TModalProps & {
  setSelectedAddressFormData: (formData: TAddressForm) => void;
  addresses: API.Address.Address[] | null;
};

const AddressesModal: FC<TAddressesModalProps> = ({ isOpen, setIsOpen, setSelectedAddressFormData, addresses }) => {
  const [address, setAddress] = useState<API.Address.Address | null>(addresses?.[0] || null);

  const onConfirm = () => {
    if (!address) return;
    const addressFormData = convertAddressToAddressFormData(address);
    setSelectedAddressFormData(addressFormData);
    setIsOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setAddress(e.target.value);
  };

  const options = useMemo(
    () =>
      addresses?.map((userAddress) => ({
        label: convertAddressToCityStreetBuildingFlat(userAddress),
        value: userAddress,
      })),
    [addresses],
  );

  return (
    <Modal title="Мои адреса" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-6 max-sm:gap-4">
        <Radio.Group onChange={onChange} value={address}>
          <div className="flex flex-col gap-4 max-sm:gap-2">
            {options?.map(({ value, label }) => (
              <Radio key={value.id} value={value}>
                {label}
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
