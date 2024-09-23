import { Button } from 'antd';
import { FC, useEffect, useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { Modal } from './Modal';
import { AuthActionModal } from './ModalSteps/AuthActionModal';
import ConfirmPhone from './ModalSteps/ConfirmPhone';
import SignIn from './ModalSteps/SignIn';
import SignUp from './ModalSteps/SignUp';

import { AuthModalProcessType } from '@/constants';
import { TModalProps } from '@/types';

type TAuthModalProps = TModalProps & {
  firstStep?: number;
};

const AuthModal: FC<TAuthModalProps> = ({ isOpen, setIsOpen, firstStep = 0 }) => {
  const [step, setStep] = useState(firstStep);
  const [processType, setProcessType] = useState<AuthModalProcessType | null>(null);
  const [phone, setPhone] = useState('');

  const onClose = () => {
    setIsOpen(false);
  };

  const setPreviousStep = () => {
    if (step === 3 && processType === AuthModalProcessType.SIGN_IN) {
      setStep(1);
      return;
    }

    setStep(step - 1);
  };

  const setNextStep = () => {
    setStep(step + 1);
  };

  const onSignIn = () => {
    setProcessType(AuthModalProcessType.SIGN_IN);
    setNextStep();
  };

  useEffect(() => {
    setStep(firstStep);
    setProcessType(null);
  }, [isOpen]);

  const title = useMemo(() => {
    switch (step) {
      case 0:
        return 'Вход на сайт';

      case 1:
        return 'Вход в аккаунт';

      case 2:
        return 'Регистрация';

      default:
        return 'Введите смс-код';
    }
  }, [step, processType]);

  return (
    <Modal
      title={
        <>
          {[2, 3].includes(step) && (
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
      width="small"
    >
      {step === 0 && <AuthActionModal onSignIn={onSignIn} onClose={onClose} />}
      {step === 1 && <SignIn setProcessType={setProcessType} setStep={setStep} setPhone={setPhone} />}
      {step === 2 && <SignUp setProcessType={setProcessType} setNextStep={setNextStep} setPhone={setPhone} />}
      {step === 3 && <ConfirmPhone processType={processType} onClose={onClose} phone={phone} />}
    </Modal>
  );
};

export default AuthModal;
