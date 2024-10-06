import { Breadcrumb, Divider } from 'antd';
import Link from 'next/link';
import { FC } from 'react';
import { FiInfo } from 'react-icons/fi';

import deliveryMap from '@/assets/images/delivery_map.png';
import jcb from '@/assets/images/payments/jcb.svg';
import mc from '@/assets/images/payments/mc.svg';
import mir from '@/assets/images/payments/mir.svg';
import visa from '@/assets/images/payments/visa.svg';

import BranchInfo from '@/components/BranchInfo';
import Accordion from '@/components/ui/Accordion';
import { companyInfo } from '@/config/links';

const DeliveryPageContent: FC = () => {
  const breadcrumbs = [
    {
      title: <Link href="/">Главная</Link>,
    },
    {
      title: 'Условия доставки',
    },
  ];

  return (
    <section className="flex flex-col gap-8 max-sm:gap-6 max-xs:pt-6">
      <Breadcrumb items={breadcrumbs} />
      <h1 className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">Условия доставки</h1>
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        <div className="flex flex-col gap-6">
          <Accordion
            title="Способы оформления заказа"
            text={
              <>
                <div className="flex flex-col gap-4 max-sm:gap-3">
                  <h4 className="text-xl leading-xl max-sm:text-base max-sm:leading-base">Заказать на сайте</h4>
                  <div className="flex flex-col gap-2">
                    <a
                      className="font-medium text-primary transition-all hover:text-primaryHover"
                      href="www.pirogvatrushka.ru"
                    >
                      www.pirogvatrushka.ru
                    </a>
                    <p className="text-textTertiary">круглосуточно</p>
                  </div>
                </div>
                <Divider />
                <div className="flex flex-col gap-4 max-sm:gap-3">
                  <h4 className="text-xl leading-xl max-sm:text-base max-sm:leading-base">Позвонить по телефону</h4>
                  <div className="flex flex-col gap-2">
                    <a
                      className="font-medium text-accent transition-all hover:text-accentHover"
                      href={`tel:${companyInfo.mainPhone}`}
                    >
                      {` ${companyInfo.mainPhone} `}
                    </a>
                    <p className="text-textTertiary">ежедневно с 8:00 до 19:00</p>
                    <div className="flex gap-1 text-textTertiary">
                      <FiInfo className="mt-0.5 min-w-4" />
                      <p>
                        с 18:00 до 19:00 на текущий день принимаются заказы только на продукцию из наличия на точках
                      </p>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className="flex flex-col gap-4 max-sm:gap-3">
                  <h4 className="text-xl leading-xl max-sm:text-base max-sm:leading-base">Прийти к нам и заказать</h4>
                  {companyInfo.branches.map((branch) => (
                    <BranchInfo
                      address={`${companyInfo.fullName}, ${branch.address}`}
                      phone={branch.phone}
                      businessHours={branch.businessHours}
                      colored
                    />
                  ))}
                </div>
                <Divider />
                <div className="flex flex-col gap-4 max-sm:gap-3">
                  <h4 className="text-xl leading-xl max-sm:text-base max-sm:leading-base">
                    Прийти к нашим партнёрам и заказать
                  </h4>
                  {companyInfo.partners.map((partner) => (
                    <BranchInfo
                      address={`${companyInfo.fullName}, ${partner.address}`}
                      phone={partner.phone}
                      businessHours={partner.businessHours}
                      colored
                    />
                  ))}
                </div>
              </>
            }
          />
          <Accordion
            title="Стоимость доставки"
            text={
              <div className="flex flex-col gap-4">
                <p>Стоимость доставки заказа рассчитывается исходя из местоположения, указанного на карте</p>
                <ul className="list-bullet space-y-2 pl-4">
                  <li className="pl-1">
                    Синяя зона
                    <p className="pt-2">
                      Бесплатная доставка от 1500 руб. Заказы меньшей стоимости мы привезем за 200 рублей
                    </p>
                  </li>
                  <li className="pl-1">
                    Зеленая зона
                    <p className="pt-2">
                      Бесплатная доставка от 2000 руб. Заказы меньшей стоимости мы привезем за 350 рублей
                    </p>
                  </li>
                  <li className="pl-1">
                    Желтая зона
                    <p className="pt-2">
                      Рассчитывается по тарифу Яндекс доставки, уточняйте стоимость доставки у оператора.
                    </p>
                  </li>
                  <li className="pl-1">
                    Другие населенные пункты
                    <p className="pt-2">
                      Услуги Яндекс Доставки доступны на территори Челябинской области. Стоимость доставки Вашего заказа
                      уточнит оператор при подтверждении заказа.
                    </p>
                  </li>
                </ul>
                <img src={deliveryMap.src} alt="Зоны доставки" width="100%" />
              </div>
            }
          />
          <Accordion
            title="Бесконтактная доставка"
            text={
              <div className="flex flex-col gap-4">
                <p>
                  Мы хотим обеспечить максимальное чувство защищенности для наших клиентов. Специально для вашего
                  спокойствия предлагаем бесконтактная доставку.
                </p>
                <h4 className="text-xl font-medium leading-xl">Как сделать заказ</h4>
                <ol className="numeric-list">
                  <li>
                    При оформлении заказа на сайте pirogvatrushka.ru в разделе «комментарий для курьера» необходимо
                    написать бесконтактная доставка.
                  </li>
                  <li>Курьер привезет заказ и позвонит Вам.</li>
                  <li>
                    После этого курьер оставит ваш заказ возле двери на специальной подставке, которую привезет с собой.
                  </li>
                  <li>
                    Курьер отойдет на безопасное расстояние не менее чем на 1,5 метра и подождет пока вы примите заказ.
                  </li>
                  <li>
                    Для максимальной безопасности просим Вас{' '}
                    <span className="font-medium">ипользовать безналичный способ оплаты</span>. Это позволит снизить
                    риски. Если все же, Вы оплачиваете наличными деньгами, то пересчитайте деньги на глазах и курьера и
                    положите их на подставку.
                  </li>
                </ol>
              </div>
            }
          />
        </div>
        <div className="flex flex-col gap-6">
          <Accordion
            title="Порядок приема и выполнения заказов"
            text={
              <div className="flex flex-col">
                <div className="flex flex-col gap-5 max-sm:gap-3">
                  <h4 className="text-xl font-medium leading-xl">Интервал доставки</h4>
                  <p>
                    В будние и выходные дни интервал 1 час (например, если Вам необходимы пироги до 12:00, интервал
                    лучше выбрать с 11:00 до 12:00).
                  </p>
                  <p>
                    В праздничные дни и пиковые часы, интервал доставки может быть увеличен с предварительным
                    согласованием.
                  </p>
                  <p>
                    {`Первый интервал доставки с 8:00 до 9:00, последний с 19:00 до 20:00. Получасовые интервалы
                    предварительно согласовываются с оператором по телефону ${companyInfo.mainPhone}.`}
                  </p>
                </div>
                <Divider />
                <div className="flex flex-col gap-5 max-sm:gap-3">
                  <h4 className="text-xl font-medium leading-xl">Заказы на доставку, поступившие после 18:00</h4>
                  <p>
                    Все заказы на доставку, поступившие после 18:00, принимаются на продукцию из наличия на розничных
                    точках, при свободных курьерах на линии.
                  </p>
                  <p>
                    {`Заказы принимаются по телефону ${companyInfo.mainPhone} до 19.00. Последний интервал доставки с 19.00 до 20.00. Звоните!`}
                  </p>
                </div>
                <Divider />
                <div className="flex flex-col gap-5 max-sm:gap-3">
                  <h4 className="text-xl font-medium leading-xl">Минимальное время приготовления</h4>
                  <p>Заказы на доставку принимаются за 2-3 часа до желаемого времени доставки.</p>
                  <p>Заказы на праздничные дни мы начинаем принимать за 2 недели.</p>
                  <p>Заказы на текущий день принимаются с 8:00-18:00.</p>
                  <p>Заказы на банкеты и заказные торты принимаются за 2-3 дня.</p>
                </div>
                <Divider />
                <div className="flex flex-col gap-5 max-sm:gap-3">
                  <h4 className="text-xl font-medium leading-xl">Предварительный заказ</h4>
                  <p>Вы можете оформить заказ на более поздний срок. Сроки не ограничены!</p>
                </div>
              </div>
            }
          />
          <Accordion
            title="Способы оплаты заказа"
            text={
              <div className="flex flex-col">
                <div className="flex flex-col gap-5 max-sm:gap-3">
                  <h4 className="text-xl font-medium leading-xl">Для физических лиц</h4>
                  <ol className="numeric-list">
                    <li>
                      Наличный расчет при получении.
                      <p className="pt-2">При необходимости курьер привезет сдачу с указанной суммы.</p>
                    </li>
                    <li>
                      Безналичный расчет при получении.
                      <p className="pt-2">Оплата картой, курьер приезжает с терминалом.</p>
                    </li>
                    <li>Онлайн расчет на сайте</li>
                  </ol>
                  <p>
                    Возможность оплатить заказ заранее (например в подарок). Для оплаты, на странице оформления заказа
                    необходимо выбрать пункт «Онлайн» в списке способов оплаты. Расчет происходит через ПАО СБЕРБАНК с
                    использованием банковских карт следующих платёжных систем:
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <img src={visa.src} alt="Visa" />
                    <img src={mc.src} alt="MasterCard" />
                    <img src={mir.src} alt="Мир" />
                    <img src={jcb.src} alt="JCB" />
                  </div>
                </div>
                <Divider />
                <div className="flex flex-col gap-5 max-sm:gap-3">
                  <h4 className="text-xl font-medium leading-xl">Описание процесса передачи данных</h4>
                  <p>
                    Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК.
                    Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с
                    использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного
                    проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure для
                    проведения платежа также может потребоваться ввод специального пароля.
                  </p>
                  <p>
                    Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной
                    информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за
                    исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам
                    осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard
                    Europe Sprl, JCB.
                  </p>
                </div>
                <Divider />
                <div className="flex flex-col gap-5 max-sm:gap-3">
                  <h4 className="text-xl font-medium leading-xl">Для юридических лиц</h4>
                  <p>Возможна оплата безналичным расчетом при сумме заказа свыше 5000 рублей.</p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default DeliveryPageContent;
