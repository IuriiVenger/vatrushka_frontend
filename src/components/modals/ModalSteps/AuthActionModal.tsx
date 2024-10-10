import { Button } from 'antd';
import { FC, MouseEventHandler } from 'react';

import { color } from '@/config/variables';

export type TAuthActionModalProps = {
  onSignIn: MouseEventHandler<HTMLElement>;
  onClose: MouseEventHandler<HTMLElement>;
  href?: string;
};

const AuthActionModal: FC<TAuthActionModalProps> = ({ onSignIn, onClose, href }) => (
  <div className="flex flex-col gap-8 max-sm:gap-6">
    <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
      Войдите или зарегистрируйтесь на сайте, чтобы просматривать историю заказов
    </p>
    <div className="flex flex-col gap-3 max-sm:gap-2">
      <Button type="primary" className="w-full max-sm:text-base max-sm:leading-base" onClick={onSignIn}>
        Войти/Зарегистрироваться
      </Button>
      <Button
        className="w-full text-accent max-sm:text-base max-sm:leading-base"
        onClick={onClose}
        style={{ color: color.accent.default }}
        href={href}
      >
        Продолжить как гость
      </Button>
    </div>
  </div>
);

export default AuthActionModal;
