'use client';

import { Button } from 'antd';
import { FC, useState } from 'react';

import image from '../../../assets/images/account_page.svg';

import AuthModal from '@/components/modals/AuthModal';

const UnauthorizedScreen: FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onClick = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <section className="flex flex-col items-center gap-6 py-14 max-sm:gap-4">
        <img src={image.src} alt="Личный кабинет" className="w-32" />
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Вы не авторизованы</h1>
          <p className="pt-2 text-lg leading-lg max-sm:text-base max-sm:leading-base">
            Войдите в личный кабинет, чтобы посмотреть историю своих заказов
          </p>
          <Button
            type="primary"
            onClick={onClick}
            className="mt-6 text-lg leading-lg max-sm:text-base max-sm:leading-base"
          >
            Войти
          </Button>
        </div>
      </section>
      <AuthModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
    </>
  );
};

export default UnauthorizedScreen;
