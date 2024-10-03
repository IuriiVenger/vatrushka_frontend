import { Breadcrumb, Divider } from 'antd';
import Link from 'next/link';

import { BranchInfo } from '@/components/BranchInfo';
import { Contacts } from '@/components/Contacts';
import { Map } from '@/components/ui/Map';
import { companyInfo, contactLinks } from '@/config/links';
import { ContactLinks } from '@/constants';
import { TContact } from '@/types';

const ContactsPageContent = () => {
  const breadcrumbs = [
    {
      title: <Link href="/">Главная</Link>,
    },
    {
      title: 'Контакты',
    },
  ];

  const contacts = Object.fromEntries(
    Object.entries(contactLinks).filter(([key]) => key !== 'vk' && key !== 'chiefMail'),
  ) as Omit<Record<ContactLinks, TContact>, 'mail' | 'chiefMail'>;

  const chiefMail = { [ContactLinks.CHIEF_MAIL]: contactLinks.chiefMail };

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={breadcrumbs} />
      <section className="flex flex-col gap-12">
        <h1 className="text-4xl font-medium leading-4xl max-sm:text-2xl max-sm:leading-2xl">Контакты</h1>
        <div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">
              {companyInfo.fullName}
            </h2>
            <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">{companyInfo.legalName}</p>
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
            {companyInfo.branches.map((branch) => (
              <BranchInfo
                address={`${companyInfo.fullName}, ${branch.address}`}
                phone={branch.phone}
                businessHours={branch.businessHours}
              />
            ))}
          </div>
          <Divider />
          <div className="flex flex-wrap gap-28">
            <div className="flex flex-col gap-3">
              <h3 className=" text-lg font-medium leading-lg max-sm:text-base max-sm:leading-base">Отдел доставки</h3>
              <Contacts contacts={contacts} className="bg-bgLayout" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className=" text-lg font-medium leading-lg max-sm:text-base max-sm:leading-base">
                Написать директору
              </h3>
              <Contacts contacts={chiefMail} className="bg-bgLayout" />
            </div>
          </div>
          <Divider />
          <Map
            placemarks={companyInfo.branches.map((address) => ({
              id: address.id,
              coords: address.coords,
              isSelected: false,
            }))}
            width="100%"
            mapZoom={14}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactsPageContent;
