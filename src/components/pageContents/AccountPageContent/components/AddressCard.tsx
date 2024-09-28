import { Button } from 'antd';
import React, { FC, useState } from 'react';

import AddressModal from '@/components/modals/AddressModal';
import DeleteAddressModal from '@/components/modals/DeleteAddressModal';
import { AddressType } from '@/constants';
import { TAddress } from '@/types';

type TAddressCardProps = {
  address: TAddress;
};

export const AddressCard: FC<TAddressCardProps> = ({ address }) => {
  const { id, address: street, entrance, floor, apartment, type } = address;

  const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);
  const [isDeleteAddressModalOpen, setIsDeleteAddressModalOpen] = useState(false);

  const onEdit = () => {
    setIsEditAddressModalOpen(true);
  };

  const onDelete = () => {
    setIsDeleteAddressModalOpen(true);
  };

  const additionalInfo = `${entrance.length ? `Подъезд ${entrance}, ` : ''}${floor.length ? `этаж ${floor}, ` : ''}${type.id === AddressType.FLAT ? `квартира ${apartment}` : type.label}`;

  return (
    <>
      <div className="w-full max-w-144 rounded-2xl border border-borderSecondary p-6 text-lg leading-lg max-sm:p-4 max-sm:text-base max-sm:leading-base">
        <h2 className="text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">{street}</h2>
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
            type="text"
            className="h-6 p-0 text-lg leading-lg text-accent hover:text-accentHover active:text-accentActive max-sm:text-base max-sm:leading-base"
            onClick={onDelete}
          >
            Удалить
          </Button>
        </div>
      </div>
      <AddressModal isOpen={isEditAddressModalOpen} setIsOpen={setIsEditAddressModalOpen} isEdit address={address} />
      <DeleteAddressModal isOpen={isDeleteAddressModalOpen} setIsOpen={setIsDeleteAddressModalOpen} addressId={id} />
    </>
  );
};
