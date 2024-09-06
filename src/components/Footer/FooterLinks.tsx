import Link from 'next/link';
import { FC } from 'react';

export const FooterLinks: FC = () => (
  <>
    <nav className="order-2">
      <ul className="flex flex-col gap-6">
        <li>
          <Link href="https://www.google.com" className="text-nowrap text-text">
            О нас
          </Link>
        </li>
        <li>
          <Link href="https://www.google.com" className="text-nowrap text-text">
            Контакты
          </Link>
        </li>
        <li>
          <Link href="https://www.google.com" className="text-nowrap text-text">
            Акции
          </Link>
        </li>
        <li>
          <Link href="https://www.google.com" className="text-nowrap text-text">
            Оптовые продажи
          </Link>
        </li>
      </ul>
    </nav>
    <nav className="order-3">
      <ul className="flex flex-col gap-6">
        <li>
          <Link href="https://www.google.com" className="text-nowrap text-text">
            Условия доставки
          </Link>
        </li>
        <li>
          <Link href="https://www.google.com" className="text-nowrap text-text">
            Бонусная программа
          </Link>
        </li>
        <li>
          <Link href="https://www.google.com" className="text-nowrap text-text">
            Условия возврата и обмена
          </Link>
        </li>
        <li>
          <Link href="https://www.google.com" className="text-nowrap text-text">
            Ваши отзывы и предложения
          </Link>
        </li>
      </ul>
    </nav>
  </>
);
