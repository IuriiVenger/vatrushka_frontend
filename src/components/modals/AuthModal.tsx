import { Button } from 'antd';
import { FC, useEffect, useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import Modal from './Modal';
import AuthActionModal, { TAuthActionModalProps } from './ModalSteps/AuthActionModal';
import ConfirmPhone, { TConfirmPhoneModalProps } from './ModalSteps/ConfirmPhone';
import SignIn, { TSignInModalProps } from './ModalSteps/SignIn';
import SignUp, { TSignUpProps } from './ModalSteps/SignUp';

import { AuthModalProcessType, AuthModalSteps } from '@/constants';
import useAuth from '@/hooks/useAuth';
import { useAppDispatch } from '@/store';
import { TModalProps } from '@/types';

type TAuthModalProps = TModalProps & {
  firstStep?: AuthModalSteps;
};
type TAuthModalStepsProps = TAuthActionModalProps & TConfirmPhoneModalProps & TSignInModalProps & TSignUpProps;

const AuthModal: FC<TAuthModalProps> = ({ isOpen, setIsOpen, firstStep = AuthModalSteps.AUTH_ACTION }) => {
  const [step, setStep] = useState<AuthModalSteps>(firstStep);
  const [processType, setProcessType] = useState<AuthModalProcessType | null>(null);
  const dispatch = useAppDispatch();

  const { phone, setPhone, getPhoneOtp, verifyPhoneOtp, setOtp } = useAuth(dispatch);

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

  const stepsProps: TAuthModalStepsProps = {
    processType,
    setProcessType,
    setStep,
    setPhone,
    onClose,
    phone,
    onSignIn,
    setNextStep,
    getPhoneOtp,
    verifyPhoneOtp,
    setOtp,
  };

  const stepsMap = useMemo(
    () => ({
      [AuthModalSteps.AUTH_ACTION]: <AuthActionModal {...stepsProps} />,
      [AuthModalSteps.SIGN_IN]: <SignIn {...stepsProps} />,
      [AuthModalSteps.SIGN_UP]: <SignUp {...stepsProps} />,
      [AuthModalSteps.CONFIRM_PHONE]: <ConfirmPhone {...stepsProps} />,
    }),
    [stepsProps],
  );

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
      {stepsMap[step]}
    </Modal>
  );
};

export default AuthModal;
