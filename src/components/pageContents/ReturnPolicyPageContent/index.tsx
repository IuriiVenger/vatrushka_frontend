import { Breadcrumb } from 'antd';
import Link from 'next/link';

import { companyInfo, contactLinks } from '@/config/links';

const ReturnPolicyPageContent = () => {
  const breadcrumbs = [
    {
      title: <Link href="/">Главная</Link>,
    },
    {
      title: 'Условия возврата и обмена',
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={breadcrumbs} />
      <section className="flex flex-col gap-12 text-lg leading-lg max-sm:gap-8 max-sm:text-sm max-sm:leading-sm">
        <h1 className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">
          Условия возврата и обмена продукции
        </h1>
        <div>
          <div className="flex flex-col gap-8 max-sm:gap-6">
            <div className="flex flex-col gap-6 max-sm:gap-4">
              <h2 className="text-lg font-medium leading-lg max-sm:text-base max-sm:leading-base">
                Отказ от услуг (Возврат товара надлежащего качества)
              </h2>
              <p>
                В соответствии с законодательством РФ возврат продовольственных товаров надлежащего качества не
                допускается, возврат денежных средств за такой товар не производится. На сайте «Консультант Плюс» Вы
                можете прочесть полный текст закона.
              </p>
            </div>
            <div className="flex flex-col gap-6 max-sm:gap-4">
              <h2 className="text-lg font-medium leading-lg max-sm:text-base max-sm:leading-base">
                Отказ от заказа до начала его приготовления
              </h2>
              <p>
                Вы можете отказаться от заказанного блюда не позднее чем за 24 часа до срока исполнения вашего заказа.
              </p>
              <p>Такие ограничения мы ввели, потому что:</p>
              <ul className="list-bullet space-y-2 pl-4">
                <li className="pl-1">
                  Повара начинают готовить Ваш заказ за 1.5-2 часа до времени доставки, в зависимости от сложности
                  блюда;
                </li>
                <li className="pl-1">
                  За несколько часов до начала приготовления вашего блюда мы делаем закупку продуктов чтобы Вы получали
                  блюда, приготовленные только из свежих ингредиентов.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 max-sm:gap-4">
              <h2 className="text-lg font-medium leading-lg max-sm:text-base max-sm:leading-base">
                Отказ от продукции ненадлежащего качества возможен в следующих случаях:
              </h2>
              <ol className="numeric-list">
                <li>
                  В случае выявления некачественной продукции, Клиент вправе до истечения срока годности:
                  <ol className="numeric-list pt-4">
                    <li>
                      полностью или частично вернуть заказ Исполнителю и потребовать возврата уплаченной денежной суммы;
                    </li>
                    <li>потребовать полной или частичной замены некачественной Продукции.</li>
                  </ol>
                </li>
                <li>Курьерская служба доставила ваш заказ с опозданием более чем на 60 минут;</li>
                <li>Продукция доставлена с повреждениями или потеряла товарный вид.</li>
              </ol>
            </div>
            <div className="flex flex-col gap-6 max-sm:gap-4">
              <h2 className="text-lg font-medium leading-lg max-sm:text-base max-sm:leading-base">
                Порядок действий при нарушении комплектности заказа:
              </h2>
              <ol className="numeric-list">
                <li>
                  Клиент должен проверить заказ в присутствии курьера. В случае неполной комплектации заказа необходимо
                  связаться с нами по телефону
                  <a
                    className="text-primary transition-all hover:text-primaryHover"
                    href={`tel:${companyInfo.mainPhone}`}
                  >
                    {` ${companyInfo.mainPhone} `}
                  </a>
                  для решения вопроса.
                </li>
                <li>
                  В случае получения товара, не соответствующего Заказу, Клиент вправе:
                  <ol className="numeric-list mt-4 pt-4">
                    <li>принять данную Продукцию и потребовать перерасчета стоимости заказа;</li>
                    <li>отказаться от заказа и получить возврат полной стоимости заказанного товара;</li>
                    <li>
                      отказаться от ошибочно доставленной Продукции и потребовать возврата средств за фактически
                      неполученный товар.
                    </li>
                  </ol>
                </li>
                <li>
                  В случае невозможности осуществить замену товара, продавец уведомляет об этом клиента по номеру
                  телефона. Клиент вправе сделать возврат товара.
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-6 max-sm:gap-4">
              <h2 className="text-lg font-medium leading-lg max-sm:text-base max-sm:leading-base">
                Требования к возвращаемой продукции
              </h2>
              <p>Возвращаемый остаток продукции должен составлять не менее 80% от исходного веса.</p>
            </div>
            <div className="flex flex-col gap-6 max-sm:gap-4">
              <h2 className="text-lg font-medium leading-lg max-sm:text-base max-sm:leading-base">
                Порядок возврата денежных средств при обмене или отказе от продукции:
              </h2>
              <ol className="numeric-list">
                <li>
                  Если оплата производилась безналичным способом, то точный срок возврата средств зависит от банка –
                  эмитента Вашей карты, мы со своей стороны осуществляем выплату в течение 10 дней после получения
                  заявления о возврате продукции.
                </li>
                <li>{`При оплате картой возврат средств можно делать только на банковскую карту покупателя на основании п. 1 Указания Банка России от 09.12.2019 N 5348-У "О правилах наличных расчетов";`}</li>
                <li>
                  Если товар был оплачен наличными, деньги можно вернуть наличными или перечислить на банковскую карту
                  покупателя.
                </li>
              </ol>
            </div>
            <p>
              Для оформления возврата или замены необходимо позвонить в службу доставки по номеру телефона{' '}
              <a className="text-primary transition-all hover:text-primaryHover" href={`tel:${companyInfo.mainPhone}`}>
                {companyInfo.mainPhone}
              </a>
              , оформить заявление о возврате продукции или написать электронное письмо в свободной форме на адрес:{' '}
              <a
                className="text-primary transition-all hover:text-primaryHover"
                href={`mailto:${contactLinks.mail.link}`}
              >
                {contactLinks.mail.link}
              </a>{' '}
              с указанием номера заказа, причиной возврата и указанием номера мобильного телефона для связи с
              Покупателем.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnPolicyPageContent;
