import { Button, Radio } from 'antd';
import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { TCheckoutForm } from '.';

import AddressesModal from '@/components/modals/AddressesModal';
import Input from '@/components/ui/Form/Input';
import RadioGroup from '@/components/ui/Form/Radio';
import Map from '@/components/ui/Map';
import { addressesTypes, AddressType } from '@/constants';
import { userInfo } from '@/mocks';

const CourierDelivery: FC = () => {
  const [isAddressesModalOpen, setIsAddressesModalOpen] = useState(false);

  const addressTypeOptions = Object.values(addressesTypes);

  const {
    control,
    watch,
    formState: { errors },
    setValue,
  } = useFormContext<TCheckoutForm>();

  const inputAddress = watch('userAddress');

  const onClick = () => {
    setIsAddressesModalOpen(true);
  };

  // TODO: fix
  const isLoggedIn = true;

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Адрес доставки</h3>
          {isLoggedIn && userInfo.addresses.length && (
            <Button type="link" onClick={onClick} className="h-6 p-0">
              Мои адреса
            </Button>
          )}
        </div>
        <Map placemarks={[]} width="100%" inputAddress={inputAddress.address} />
        <div className="flex flex-col gap-4">
          <Input
            name="userAddress.address"
            type="entrance"
            placeholder="г. Челябинск"
            inputMode="text"
            label="Адрес (город, улица, номер дома)"
            required
            control={control}
            errors={!!errors.userAddress?.address}
          />
          <div className="grid grid-cols-3 gap-4">
            <Input
              name="userAddress.entrance"
              type="number"
              placeholder="00"
              inputMode="numeric"
              label="Подъезд"
              control={control}
              errors={!!errors.userAddress?.address}
              min={0}
              max={100}
            />
            <Input
              name="userAddress.floor"
              type="number"
              placeholder="00"
              inputMode="numeric"
              label="Этаж"
              control={control}
              errors={!!errors.userAddress?.floor}
              min={0}
              max={100}
            />
            <Input
              name="userAddress.apartment"
              type="number"
              placeholder="000"
              inputMode="numeric"
              label={watch('userAddress.type.id') === AddressType.OFFICE ? 'Офис' : 'Квартира'}
              control={control}
              errors={!!errors.userAddress?.apartment}
              min={0}
              max={10000}
            />
          </div>
          <RadioGroup name="userAddress.type.id" control={control} className="flex flex-col gap-3" required>
            {addressTypeOptions.map((type) => (
              <Radio key={type.id} value={type.id}>
                {type.label}
              </Radio>
            ))}
          </RadioGroup>
        </div>
      </div>
      <AddressesModal isOpen={isAddressesModalOpen} setIsOpen={setIsAddressesModalOpen} setSelectedAddress={setValue} />
    </>
  );
};

export default CourierDelivery;
