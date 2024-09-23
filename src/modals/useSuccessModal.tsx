import { App } from 'antd';
import { Dispatch, ReactNode, SetStateAction } from 'react';

type TUseSuccessModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: ReactNode;
  content: ReactNode;
};

export const useSuccessModal = (props: TUseSuccessModalProps) => {
  const { setIsOpen, title, content } = props;

  const { modal } = App.useApp();

  const showSuccess = () => {
    setIsOpen(false);
    modal.success({
      title,
      content: <div className="w-90 max-sm:w-70">{content}</div>,
      footer: null,
      closable: true,
      centered: true,
      className: 'text-success',
      width: 'auto',
    });
  };

  return { showSuccess };
};
