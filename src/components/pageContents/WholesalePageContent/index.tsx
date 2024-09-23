'use client';

import { Breadcrumb, Button } from 'antd';
import Link from 'next/link';

import { useState } from 'react';

import { companyInfo } from '@/config/links';
import LeaveRequestModal from '@/modals/LeaveRequestModal';

export const WholesalePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbs = [
    {
      title: <Link href="/">Главная</Link>,
    },
    {
      title: 'Оптовые продажи',
    },
  ];

  const onClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-8 max-sm:gap-6">
        <Breadcrumb items={breadcrumbs} />
        <section className="flex flex-col text-lg leading-lg max-sm:text-base max-sm:leading-base">
          <h1 className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">Оптовые продажи</h1>
          <p className="pt-6 max-sm:gap-4">
            Приглашаем к сотрудничеству кофейни, рестораны, отели, магазины. Предлагаем регулярные поставки
            полуфабрикатов и готовой продукции собственного производства. Для вас выгодные условия, гибкий ассортимент,
            всегда качественная продукция.
          </p>

          <div className="flex flex-col gap-6 pt-10 max-sm:gap-4 max-sm:pt-6">
            <h2 className="text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">Контакты</h2>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <p>Руководитель оптовых продаж тел.:</p>
                  <a
                    className="text-primary transition-all hover:text-primaryHover"
                    href={`tel:${companyInfo.wholesaleManagerPhone}`}
                  >
                    {companyInfo.wholesaleManagerPhone}
                  </a>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <p>Адрес электронной почты:</p>
                  <a
                    className="text-primary transition-all hover:text-primaryHover"
                    href={`mailto:${companyInfo.wholesaleManagerEmail}`}
                  >
                    {companyInfo.wholesaleManagerEmail}
                  </a>
                </div>
              </div>

              <div className="flex gap-6 max-sm:flex-col max-sm:gap-2">
                <Button type="primary" onClick={onClick} className="max-sm:text-base">
                  Оставить заявку
                </Button>
                <Button href="https://www.google.com" className="max-sm:text-base">
                  Скачать прайс-лист/бланк заказа
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <LeaveRequestModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};
