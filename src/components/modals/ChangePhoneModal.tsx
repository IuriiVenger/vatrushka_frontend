import { Button } from 'antd';
import { FC, useState } from 'react';

import { IoIosArrowBack } from 'react-icons/io';

import { Modal } from './Modal';
import ChangePhone from './ModalSteps/ChangePhone';
import ConfirmPhone from './ModalSteps/ConfirmPhone';

import useAuth from '@/hooks/useAuth';
import { useAppDispatch } from '@/store';
import { TModalProps } from '@/types';

const ChangePhoneModal: FC<TModalProps> = ({ isOpen, setIsOpen }) => {
  const [step, setStep] = useState(0);

  const dispatch = useAppDispatch();
  const { phone, setPhone, getPhoneOtp, verifyPhoneOtp, setOtp } = useAuth(dispatch);

  const firstStep = step === 0;

  const title = firstStep ? 'Изменение телефона' : 'Введите смс-код';

  const onClose = () => {
    setIsOpen(false);
  };

  const setPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onChangePhone = (phoneNumber: string) => {
    setStep((prevStep) => prevStep + 1);
    setPhone(phoneNumber);
  };

  return (
    <Modal
      title={
        <>
          {!firstStep && (
            <Button
              type="link"
              className="h-6 text-accent transition-all hover:text-accentHover active:text-accentActive"
              style={{ padding: 0 }}
              onClick={setPreviousStep}
            >
              <IoIosArrowBack />
              Назад
            </Button>
          )}
          <h2 className="pt-4">{title}</h2>
        </>
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {firstStep ? (
        <ChangePhone onChangePhone={onChangePhone} />
      ) : (
        <ConfirmPhone
          processType={null}
          onClose={onClose}
          phone={phone}
          setOtp={setOtp}
          verifyPhoneOtp={verifyPhoneOtp}
          getPhoneOtp={getPhoneOtp}
        />
      )}
    </Modal>
  );
};

export default ChangePhoneModal;
