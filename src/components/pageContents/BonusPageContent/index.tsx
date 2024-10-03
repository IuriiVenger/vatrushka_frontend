import { Breadcrumb, Button } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import Accordion from '@/components/ui/Accordion';
import { companyInfo } from '@/config/links';

const BonusPageContent: FC = () => {
  const breadcrumbs = [
    {
      title: <Link href="/">Главная</Link>,
    },
    {
      title: 'Бонусная программа',
    },
  ];

  return (
    <section className="flex flex-col gap-8 max-sm:gap-6 max-xs:pt-6">
      <Breadcrumb items={breadcrumbs} />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">
          Бонусная программа «Premium Bonus Club»
        </h1>
        <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
          Участие в бонусной программе позволяет накапливать и тратить бонусные баллы в заведениях участниках программы
          и онлайн фудмаркете pirovatrushka.ru, а также получать специальные предложения для участников программы.
        </p>
      </div>
      <div className="flex flex-col gap-6 rounded-2xl bg-bgLayout p-6 max-sm:p-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">
            Получите 200 бонусов за регистрацию
          </h2>
          <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">
            Зарегистрируйтесь на сайте прямо сейчас и получите 200 бонусов на покупки.
          </p>
        </div>
        <Button type="primary" className="w-max max-sm:text-base max-sm:leading-base">
          Зарегистрироваться
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        <div className="flex flex-col gap-6">
          <Accordion
            title="Как накопить бонусы"
            text={
              <div className="flex flex-col gap-4">
                <p>
                  Начисление бонусов происходит при совершении покупок в кафе и ресторане участников бонусной программы
                  Premium Bonus Club&#42; и на сайте pirogvatrushka.ru в следующем объеме:
                </p>
                <ul className="list-bullet space-y-2 pl-4">
                  <li className="pl-1">5% от стоимости товаров, произведенных нашим производством;</li>
                  <li className="pl-1">2% от стоимости купленных у нас товаров сторонних производителей;</li>
                  <li className="pl-1">
                    При покупке подарочного сертификата, баллы начисляются в объеме 2% на бонусный счет того, кто
                    приобрел подарочный сертификат.
                  </li>
                </ul>
                <p>Стоимость товаров, приобретенных по акциям, не участвует в начислении бонусов.</p>
                <p>При оплате покупки подарочным сертификатом бонусы не начисляются.</p>
              </div>
            }
          />
          <Accordion
            title="Как стать участником бонусной программы"
            text={
              <ul className="list-bullet space-y-2 pl-4">
                <li className="pl-1">
                  Зарегистрироваться в телеграм боте Premium Bonus Club:
                  <a className="text-primary transition-all hover:text-primaryHover" href={companyInfo.telegramBot}>
                    {` ${companyInfo.telegramBot}`}
                  </a>
                </li>
                <li className="pl-1">
                  Совершить покупку с процедурой авторизации на сайте «https://pirogvatrushka.ru», заполнив мини-анкету
                  с обязательными полями: фамилия, имя, дата рождения, номер телефона.
                </li>
                <li className="pl-1">
                  Зарегистрироваться с помощью оператора при заказе доставки в фудмаркете https://pirogvatrushka.ru
                </li>
                <li className="pl-1">
                  Заполнить анкету на стойке администратора в розничной точке и получить пластиковую карту при покупке
                  от 500 рублей бесплатно, либо за 100 руб без ограничения величины покупки.
                </li>
              </ul>
            }
          />
          <Accordion
            title="Утеря бонусной карты"
            text={
              <p>
                При утере Бонусной карты, покупатель может пользоваться дальше приложением или обратиться к сотруднику
                розничной точки для приобретения новой карты и привязки её к Вашему бонусному счёту.
              </p>
            }
          />
        </div>
        <div className="flex flex-col gap-6">
          <Accordion
            title="Как потратить бонусы"
            text={
              <div className="flex flex-col gap-4">
                <p>Баллами можно оплачивать до 100% стоимости покупки</p>
                <p>1 бонусный балл равен 1 рублю</p>
              </div>
            }
          />
          <Accordion
            title="Начисление, активация и подпись бонусов"
            text={
              <div className="flex flex-col gap-4">
                <p className="font-medium">Начисление и списание бонусов производится:</p>
                <ul className="list-bullet space-y-2 pl-4">
                  <li className="pl-1">по штрих-коду из телеграм-бота PBClub;</li>
                  <li className="pl-1">по штрих-коду на пластиковой карте PremiumBonusClub;</li>
                  <li className="pl-1">по номеру телефона зарегистрированного участника программы PremiumBonusClub.</li>
                </ul>
                <p className="font-medium">В онлайн-фудмаркете «Ватрушка»::</p>
                <ul className="list-bullet space-y-2 pl-4">
                  <li className="pl-1">по номеру телефона во время подтверждения заказа оператором.</li>
                </ul>
                <p>Бонусы начисляются в день совершения покупки и становятся активными в этот же день.</p>
                <p>За одну покупку возможно начисление бонусов только на один Бонусный счет (карта/приложение).</p>
                <p>На оплаченную покупку новые бонусы не начисляются.</p>
                <p>Бонусы можно использовать для полной оплаты покупок.</p>
                <p>Сумма накопленных бонусов не может быть получена в денежной форме.</p>
                <p>Балансы активных бонусов отображается на всех чеках, а также в телеграм-боте PBClub.</p>
                <p>
                  Максимальный срок действия бонусов – 1 год, с момента их активации, по окончании этого периода
                  неиспользованные бонусы аннулируются.
                </p>
                <p>Карта и ТГ-бот не имеют ограничений по сроку действия.</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default BonusPageContent;
