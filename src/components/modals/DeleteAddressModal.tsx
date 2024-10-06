import { Button } from 'antd';
import { FC } from 'react';

import Modal from './Modal';

import { useMessage } from '@/hooks/useMessage';
import { TModalProps } from '@/types';

type TDeleteAddressModalProps = TModalProps & {
  addressId: string;
};

const DeleteAddressModal: FC<TDeleteAddressModalProps> = ({ isOpen, setIsOpen, addressId }) => {
  const { showMessage } = useMessage();

  const onClose = () => {
    setIsOpen(false);
  };

  const onDelete = () => {
    console.log('address deleted', addressId);
    onClose();
    showMessage({ type: 'success', text: 'Адрес успешно удалён' });
  };

  return (
    <Modal title="Удаление адреса" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-8 max-sm:gap-6">
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Вы действительно хотите удалить адрес?
        </p>
        <div className="flex flex-col gap-3 max-sm:gap-2">
          <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base" onClick={onClose}>
            Нет, оставить
          </Button>
          <Button className="w-full max-sm:text-base max-sm:leading-base" onClick={onDelete}>
            Удалить
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAddressModal;
