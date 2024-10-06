import { Modal as AntModal } from 'antd';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { TModalProps } from '@/types';

type TProps = PropsWithChildren &
  TModalProps & {
    title: ReactNode;
    width?: 'xsmall' | 'small' | 'default' | 'large';
  };

const Modal: FC<TProps> = ({ isOpen, setIsOpen, title, children, width = 'default' }) => {
  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <AntModal
      title={title}
      open={isOpen}
      onCancel={handleCancel}
      width="max-content"
      footer={null}
      className={width}
      centered
    >
      {children}
    </AntModal>
  );
};

export default Modal;
