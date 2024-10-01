import { Button } from 'antd';
import { FC, useEffect, useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { Modal } from './Modal';
import { AuthActionModal } from './ModalSteps/AuthActionModal';
import ConfirmPhone from './ModalSteps/ConfirmPhone';
import SignIn from './ModalSteps/SignIn';
import SignUp from './ModalSteps/SignUp';

import { AuthModalProcessType, AuthModalSteps } from '@/constants';
import { TModalProps } from '@/types';

type TAuthModalProps = TModalProps & {
  firstStep?: AuthModalSteps;
};

const AuthModal: FC<TAuthModalProps> = ({ isOpen, setIsOpen, firstStep = AuthModalSteps.AUTH_ACTION }) => {
  const [step, setStep] = useState<AuthModalSteps>(firstStep);
  const [processType, setProcessType] = useState<AuthModalProcessType | null>(null);
  const [phone, setPhone] = useState('');

  const title = useMemo(() => {
    switch (step) {
      case AuthModalSteps.AUTH_ACTION:
        return 'Вход на сайт';

      case AuthModalSteps.SIGN_IN:
        return 'Вход в аккаунт';

      case AuthModalSteps.SIGN_UP:
        return 'Регистрация';

      default:
        return 'Введите смс-код';
    }
  }, [step, processType]);

  const hasBackButton = [AuthModalSteps.SIGN_UP, AuthModalSteps.CONFIRM_PHONE].includes(step);

  const onClose = () => {
    setIsOpen(false);
  };

  const setPreviousStep = () => {
    if (step === AuthModalSteps.CONFIRM_PHONE && processType === AuthModalProcessType.SIGN_IN) {
      setStep(AuthModalSteps.SIGN_IN);
      return;
    }

    setStep((prevStep) => prevStep - 1);
  };

  const setNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const onSignIn = () => {
    setProcessType(AuthModalProcessType.SIGN_IN);
    setNextStep();
  };

  useEffect(() => {
    setStep(firstStep);
    setProcessType(null);
  }, [isOpen]);

  return (
    <Modal
      title={
        <>
          {hasBackButton && (
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
      {step === AuthModalSteps.AUTH_ACTION && <AuthActionModal onSignIn={onSignIn} onClose={onClose} />}
      {step === AuthModalSteps.SIGN_IN && (
        <SignIn setProcessType={setProcessType} setStep={setStep} setPhone={setPhone} />
      )}
      {step === AuthModalSteps.SIGN_UP && (
        <SignUp setProcessType={setProcessType} setNextStep={setNextStep} setPhone={setPhone} />
      )}
      {step === AuthModalSteps.CONFIRM_PHONE && (
        <ConfirmPhone processType={processType} onClose={onClose} phone={phone} />
      )}
    </Modal>
  );
};

export default AuthModal;
