import { Button } from 'antd';
import { FC, useState } from 'react';

import { API } from '@/api/types';
import AddressModal from '@/components/modals/AddressModal';
import DeleteUserAddressModal from '@/components/modals/DeleteUserAddressModal';
import { TAddressForm } from '@/types';
import { convertAddressToCityStreetBuildingFlat } from '@/utils/converters';

type TAddressCardProps = {
  address: API.Address.Address;
  getSuggestions: (value: string) => Promise<API.Dadata.Suggestions.Suggestion[]>;
  updateUserAddress: (address_id: string, data: TAddressForm) => Promise<void>;
  deleteUserAddress: (id: string) => Promise<void>;
};

const AddressCard: FC<TAddressCardProps> = (props) => {
  const { address, getSuggestions, updateUserAddress, deleteUserAddress } = props;
  const { id, street_name } = address;

  const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);
  const [isdeleteUserAddressModalOpen, setIsdeleteUserAddressModalOpen] = useState(false);

  const onEdit = () => {
    setIsEditAddressModalOpen(true);
  };

  const onDelete = () => {
    setIsdeleteUserAddressModalOpen(true);
  };

  const handleupdateUserAddress = async ({ formData }: { formData: TAddressForm }) => updateUserAddress(id, formData);

  const handleDeleteUserAddress = async () => deleteUserAddress(id);

  const additionalInfo = convertAddressToCityStreetBuildingFlat(address);

  return (
    <>
      <div className="w-full max-w-144 rounded-2xl border border-borderSecondary p-6 text-lg leading-lg max-sm:p-4 max-sm:text-base max-sm:leading-base">
        <h2 className="text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">{street_name}</h2>
        <p className="pt-3 max-sm:pt-2">{additionalInfo}</p>
        <div className="flex gap-6 pt-5">
          <Button
            type="link"
            className="h-6 p-0 text-lg leading-lg text-accent hover:text-accentHover active:text-accentActive max-sm:text-base max-sm:leading-base"
            onClick={onEdit}
          >
            Изменить
          </Button>
          <Button
            type="link"
            className="h-6 p-0 text-lg leading-lg text-textTertiary hover:text-errorHover active:text-errorActive max-sm:text-base max-sm:leading-base"
            onClick={onDelete}
          >
            Удалить
          </Button>
        </div>
      </div>
      <AddressModal
        isOpen={isEditAddressModalOpen}
        setIsOpen={setIsEditAddressModalOpen}
        isEdit
        address={address}
        getSuggestions={getSuggestions}
        onSubmit={handleupdateUserAddress}
      />
      <DeleteUserAddressModal
        isOpen={isdeleteUserAddressModalOpen}
        setIsOpen={setIsdeleteUserAddressModalOpen}
        addressId={id}
        onSubmit={handleDeleteUserAddress}
      />
    </>
  );
};

export default AddressCard;
