import { Button } from 'antd';
import { FC, useState } from 'react';

import AddressCard from './components/AddressCard';

import { API } from '@/api/types';
import AddressModal from '@/components/modals/AddressModal';
import { TAddressForm } from '@/types';

type TAddressesTabProps = {
  addresses: API.Address.Address[] | null;
  getSuggestions: (value: string) => Promise<API.Dadata.Suggestions.Suggestion[]>;
  updateUserAddress: (address_id: string, data: TAddressForm) => Promise<void>;
  createUserAddress: (data: TAddressForm) => Promise<void>;
  deleteUserAddress: (id: string) => Promise<void>;
};

const AddressesTab: FC<TAddressesTabProps> = (props) => {
  const { addresses, getSuggestions, updateUserAddress, createUserAddress, deleteUserAddress } = props;
  const [isNewAddressModalOpen, setIsNewAddressModalOpen] = useState(false);

  const onClick = () => {
    setIsNewAddressModalOpen(true);
  };

  const handlecreateUserAddress = async ({ formData }: { formData: TAddressForm }) => {
    await createUserAddress(formData);
    setIsNewAddressModalOpen(false);
  };

  return (
    <>
      {addresses && addresses.length ? (
        <div className="flex flex-col gap-6 max-sm:gap-4">
          {addresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              getSuggestions={getSuggestions}
              updateUserAddress={updateUserAddress}
              deleteUserAddress={deleteUserAddress}
            />
          ))}
          <Button
            type="primary"
            onClick={onClick}
            className="mt-2 w-max text-lg leading-lg max-sm:text-base max-sm:leading-base"
          >
            Добавить новый адрес
          </Button>
        </div>
      ) : (
        <div className="flex flex-col rounded-2xl border border-borderSecondary p-6 text-lg leading-lg max-sm:p-4">
          <h2 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">
            У вас нет сохраненных адресов
          </h2>
          <p className="pt-2 text-lg leading-lg max-sm:text-base max-sm:leading-base">
            Добавьте адрес, чтобы сделать процесс оформления заказа быстрым и удобным
          </p>
          <Button
            type="primary"
            onClick={onClick}
            className="mt-6 w-max text-lg leading-lg max-sm:text-base max-sm:leading-base"
          >
            Добавить адрес
          </Button>
        </div>
      )}

      <AddressModal
        isOpen={isNewAddressModalOpen}
        setIsOpen={setIsNewAddressModalOpen}
        getSuggestions={getSuggestions}
        onSubmit={handlecreateUserAddress}
      />
    </>
  );
};

export default AddressesTab;
