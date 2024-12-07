import { Input as AntInput, Form as AntForm, Button } from 'antd';

import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from '../ui/Form/Input';

import { API } from '@/api/types';
import ChangePhoneModal from '@/components/modals/ChangePhoneModal';
import DeleteAccountModal from '@/components/modals/DeleteAccountModal';
import Form from '@/components/ui/Form/Form';
import { useMessage } from '@/hooks/useMessage';
import { prettifyPhone } from '@/utils/formatters';

type TAccountForm = {
  first_name: string;
  last_name: string;
  // smsNewsletter: boolean;
  // emailNewsletter: boolean;
};

type TAccountTabProps = {
  user: API.Auth.Me | null;
  updateUserMetadata: (data: API.Auth.UserMetadata.Update.Request) => Promise<void>;
};

const AccountTab: FC<TAccountTabProps> = ({ user, updateUserMetadata }) => {
  const [isChangePhoneModalOpen, setIsChangePhoneModalOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
  const [isAccountUpdating, setIsAccountUpdating] = useState(false);

  const { showMessage } = useMessage();
  const prettifiedPhone = user?.phone && prettifyPhone(user?.phone);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<TAccountForm>({
    mode: 'onChange',
    defaultValues: {
      first_name: user?.user_metadata?.first_name,
      last_name: user?.user_metadata?.last_name,
    },
  });

  const submitHandler: SubmitHandler<TAccountForm> = async (data) => {
    try {
      setIsAccountUpdating(true);
      await updateUserMetadata(data);
      showMessage({ type: 'success', text: 'Профиль успешно обновлён' });
    } catch (e) {
      showMessage({ type: 'error', text: 'Ошибка при обновлении профиля' });
      // eslint-disable-next-line no-console
      console.error('error:', e);
    } finally {
      setIsAccountUpdating(false);
    }
  };

  // const onChangePhone = (e: React.MouseEvent<HTMLElement>) => {
  //   e.stopPropagation();
  //   setIsChangePhoneModalOpen(true);
  // };

  // const onDelete = () => {
  //   setIsDeleteAccountModalOpen(true);
  // };

  return (
    <>
      <div className="rounded-2xl border border-borderSecondary p-6">
        <h2 className="text-2xl font-medium leading-2xl">Профиль</h2>

        <Form className="flex flex-col gap-8 pt-6" onSubmit={handleSubmit(submitHandler)}>
          <div className=" grid grid-cols-3 gap-4 max-md:flex max-md:flex-col">
            <Input
              name="first_name"
              placeholder="Иван"
              inputMode="text"
              label="Имя"
              control={control}
              errors={!!errors.first_name}
              autoComplete="given-name"
            />
            <Input
              name="last_name"
              placeholder="Иванов"
              inputMode="text"
              label="Фамилия"
              control={control}
              errors={!!errors.last_name}
              autoComplete="family-name"
            />
            <AntForm.Item label="Номер телефона" layout="vertical">
              <AntInput
                type="tel"
                placeholder="+7 (999) 999-99-99"
                defaultValue={prettifiedPhone}
                readOnly
                className="hover:cursor-not-allowed"
              />
            </AntForm.Item>
          </div>
          <div className="flex flex-col gap-4">
            {/* <Switch
              name="smsNewsletter"
              control={control}
              label="Получать SMS-уведомления об акциях и особых предложениях"
            />
            <Switch name="emailNewsletter" control={control} label="Получать e-mail рассылки" /> */}
          </div>
          <div className="flex justify-between max-xs:flex-col max-xs:gap-2">
            <Button
              type="primary"
              className="w-max max-sm:text-base max-sm:leading-base max-xs:w-full"
              htmlType="submit"
              disabled={!isValid && isDirty}
              loading={isAccountUpdating}
            >
              Сохранить изменения
            </Button>
            {/* <Button
              className="w-max border-border text-textTertiary hover:text-errorHover active:text-errorActive max-sm:text-base max-sm:leading-base max-xs:w-full"
              onClick={onDelete}
            >
              Удалить аккаунт
            </Button> */}
          </div>
        </Form>
      </div>
      <DeleteAccountModal isOpen={isDeleteAccountModalOpen} setIsOpen={setIsDeleteAccountModalOpen} />
      <ChangePhoneModal isOpen={isChangePhoneModalOpen} setIsOpen={setIsChangePhoneModalOpen} />
    </>
  );
};

export default AccountTab;
