import { Button } from 'antd';
import { FC, MouseEventHandler } from 'react';

export type TAuthActionModalProps = {
  onSignIn: MouseEventHandler<HTMLElement>;
  onClose: MouseEventHandler<HTMLElement>;
};

export const AuthActionModal: FC<TAuthActionModalProps> = ({ onSignIn, onClose }) => (
  <div className="flex flex-col gap-8 max-sm:gap-6">
    <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
      Войдите или зарегистрируйтесь на сайте, чтобы просматривать историю заказов
    </p>
    <div className="flex flex-col gap-3 max-sm:gap-2">
      <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base" onClick={onSignIn}>
        Войти/Зарегистрироваться
      </Button>
      <Button className="w-full max-sm:text-base max-sm:leading-base" onClick={onClose}>
        Продолжить как гость
      </Button>
    </div>
  </div>
);
