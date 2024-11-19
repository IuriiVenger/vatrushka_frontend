import { Button } from 'antd';
import { FC, useEffect, useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import ConfirmPhone, { TConfirmPhoneModalProps } from '../CommonModalSteps/ConfirmPhone';
import Modal from '../Modal';

import AuthActionModal, { TAuthActionModalProps } from './steps/AuthActionModal';

import SignIn, { TSignInModalProps } from './steps/SignIn';
import SignUp, { TSignUpProps } from './steps/SignUp';

import { AuthModalProcessType, AuthModalSteps } from '@/constants';
import useAuth from '@/hooks/useAuth';
import { useAppDispatch } from '@/store';
import { TModalProps } from '@/types';

type TAuthModalProps = TModalProps & {
  firstStep?: AuthModalSteps;
  href?: string;
};
type TAuthModalStepsProps = TAuthActionModalProps & TConfirmPhoneModalProps & TSignInModalProps & TSignUpProps;

const AuthModal: FC<TAuthModalProps> = ({ isOpen, setIsOpen, firstStep = AuthModalSteps.AUTH_ACTION, href }) => {
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

  const confirmPhoneSuccessMessage = useMemo(() => {
    switch (processType) {
      case AuthModalProcessType.SIGN_IN:
        return 'Вы успешно авторизовались';

      case AuthModalProcessType.SIGN_UP:
        return 'Вы успешно зарегистрировались';

      default:
        return '';
    }
  }, [processType]);

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
    successMessage: confirmPhoneSuccessMessage,
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
      [AuthModalSteps.AUTH_ACTION]: <AuthActionModal href={href} {...stepsProps} />,
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
