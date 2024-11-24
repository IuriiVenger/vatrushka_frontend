import { Button } from 'antd';
import { FC, useState } from 'react';

import Modal from './Modal';

import { useMessage } from '@/hooks/useMessage';
import { TModalProps } from '@/types';

type TDeleteUserAddressModalProps = TModalProps & {
  addressId: string;
  onSubmit: () => Promise<void>;
};

const DeleteUserAddressModal: FC<TDeleteUserAddressModalProps> = ({ isOpen, setIsOpen, addressId, onSubmit }) => {
  const { showMessage } = useMessage();
  const [isLoading, setIsLoading] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await onSubmit();
      onClose();
      showMessage({ type: 'success', text: 'Адрес успешно удалён' });
    } catch (error) {
      showMessage({ type: 'error', text: 'Ошибка при удалении адреса' });
    } finally {
      setIsLoading(false);
    }
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
          <Button className="w-full max-sm:text-base max-sm:leading-base" onClick={onDelete} loading={isLoading}>
            Удалить
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteUserAddressModal;
