import { App } from 'antd';
import { Dispatch, ReactNode, SetStateAction } from 'react';

type TUseSuccessModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: ReactNode;
  text: ReactNode;
};

export const useSuccessModal = (props: TUseSuccessModalProps) => {
  const { setIsOpen, title, text } = props;

  const { modal } = App.useApp();

  const showSuccess = () => {
    setIsOpen(false);
    modal.success({
      title,
      content: <p className="w-79 text-lg leading-lg max-sm:w-60 max-sm:text-base max-sm:leading-base">{text}</p>,
      footer: null,
      closable: true,
      centered: true,
      className: 'text-success',
      width: 'auto',
    });
  };

  return { showSuccess };
};
