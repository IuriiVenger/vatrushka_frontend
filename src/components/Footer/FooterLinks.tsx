import { FC } from 'react';

export const FooterLinks: FC = () => (
  <>
    <nav className="order-2">
      <ul className="flex flex-col gap-6">
        <li>
          <a href="https://www.google.com" className="text-nowrap text-text">
            О нас
          </a>
        </li>
        <li>
          <a href="https://www.google.com" className="text-nowrap text-text">
            Контакты
          </a>
        </li>
        <li>
          <a href="https://www.google.com" className="text-nowrap text-text">
            Акции
          </a>
        </li>
        <li>
          <a href="https://www.google.com" className="text-nowrap text-text">
            Оптовые продажи
          </a>
        </li>
      </ul>
    </nav>
    <nav className="order-3">
      <ul className="flex flex-col gap-6">
        <li>
          <a href="https://www.google.com" className="text-nowrap text-text">
            Условия доставки
          </a>
        </li>
        <li>
          <a href="https://www.google.com" className="text-nowrap text-text">
            Бонусная программа
          </a>
        </li>
        <li>
          <a href="https://www.google.com" className="text-nowrap text-text">
            Условия возврата и обмена
          </a>
        </li>
        <li>
          <a href="https://www.google.com" className="text-nowrap text-text">
            Ваши отзывы и предложения
          </a>
        </li>
      </ul>
    </nav>
  </>
);
