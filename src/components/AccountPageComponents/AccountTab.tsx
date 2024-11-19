import { Input as AntInput, Form as AntForm } from 'antd';

import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import ChangePhoneModal from '@/components/modals/ChangePhoneModal';
import DeleteAccountModal from '@/components/modals/DeleteAccountModal';
import Form from '@/components/ui/Form/Form';
import { useMessage } from '@/hooks/useMessage';
import { SupabaseUser } from '@/types';
import { prettifyPhone } from '@/utils/formatters';

type TAccountForm = {
  name: string;
  email: string;
  smsNewsletter: boolean;
  emailNewsletter: boolean;
};

type TAccountTabProps = {
  user: SupabaseUser | null;
};

const AccountTab: FC<TAccountTabProps> = ({ user }) => {
  const [isChangePhoneModalOpen, setIsChangePhoneModalOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);

  const { showMessage } = useMessage();
  const prettifiedPhone = user?.phone && prettifyPhone(user?.phone);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<TAccountForm>({
    mode: 'onChange',
  });

  const submitHandler: SubmitHandler<TAccountForm> = (data) => {
    console.log('account:', data);
    showMessage({ type: 'success', text: 'Профиль успешно обновлён' });
  };

  const onChangePhone = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsChangePhoneModalOpen(true);
  };

  const onDelete = () => {
    setIsDeleteAccountModalOpen(true);
  };

  return (
    <>
      <div className="rounded-2xl border border-borderSecondary p-6">
        {/* <h2 className="text-2xl font-medium leading-2xl">Настройки профиля</h2> */}
        <h2 className="text-2xl font-medium leading-2xl">Профиль</h2>
        <Form className="flex flex-col gap-8 pt-6" onSubmit={handleSubmit(submitHandler)}>
          <div className=" grid grid-cols-3 gap-4 max-md:flex max-md:flex-col">
            {/* <Input
              name="name"
              placeholder="Иван"
              inputMode="text"
              label="Имя и Фамилия"
              required
              control={control}
              errors={!!errors.name}
              autoComplete="given-name"
            /> */}
            <AntForm.Item label="Номер телефона" layout="vertical">
              <AntInput
                type="tel"
                placeholder="+7 (999) 999-99-99"
                defaultValue={prettifiedPhone}
                readOnly
                // suffix={
                //   <Button
                //     type="link"
                //     className="h-5 p-0 text-base leading-base text-primary underline hover:text-primaryHover"
                //     onClick={onChangePhone}
                //   >
                //     Изменить
                //   </Button>
                // }
              />
            </AntForm.Item>
            {/* <Input
              name="email"
              type="email"
              placeholder="ivanov@mail.ru"
              inputMode="email"
              label="Email"
              control={control}
              errors={!!errors.email}
              autoComplete="email"
            /> */}
          </div>
          {/* <div className="flex flex-col gap-4">
            <Switch
              name="smsNewsletter"
              control={control}
              label="Получать SMS-уведомления об акциях и особых предложениях"
            />
            <Switch name="emailNewsletter" control={control} label="Получать e-mail рассылки" />
          </div>
          <div className="flex justify-between max-xs:flex-col max-xs:gap-2">
            <Button
              type="primary"
              className="w-max max-sm:text-base max-sm:leading-base max-xs:w-full"
              htmlType="submit"
              disabled={!isValid || !isDirty}
            >
              Сохранить изменения
            </Button>
            <Button
              className="w-max border-border text-textTertiary hover:text-errorHover active:text-errorActive max-sm:text-base max-sm:leading-base max-xs:w-full"
              onClick={onDelete}
            >
              Удалить аккаунт
            </Button>
          </div> */}
        </Form>
      </div>
      <DeleteAccountModal isOpen={isDeleteAccountModalOpen} setIsOpen={setIsDeleteAccountModalOpen} />
      <ChangePhoneModal isOpen={isChangePhoneModalOpen} setIsOpen={setIsChangePhoneModalOpen} />
    </>
  );
};

export default AccountTab;
