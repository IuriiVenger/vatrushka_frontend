import { Button } from 'antd';
import { FC, useState } from 'react';

import Modal from './Modal';

import { useMessage } from '@/hooks/useMessage';
import { TModalProps } from '@/types';

type TConfirmModalProps = TModalProps & {
  title: string;
  text: string;
  onSubmit: () => Promise<void>;
  successMessage: string;
  errorMessage: string;
  confirmText?: string;
  resetText?: string;
};

const ConfirmModal: FC<TConfirmModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  text,
  onSubmit,
  successMessage,
  errorMessage,
  confirmText,
  resetText,
}) => {
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
      showMessage({ type: 'success', text: successMessage });
    } catch (error) {
      showMessage({ type: 'error', text: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-8 max-sm:gap-6">
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">{text}</p>
        <div className="flex flex-col gap-3 max-sm:gap-2">
          <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base" onClick={onClose}>
            {resetText ?? 'Нет, оставить'}
          </Button>
          <Button className="w-full max-sm:text-base max-sm:leading-base" onClick={onDelete} loading={isLoading}>
            {confirmText ?? 'Удалить'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
