import { FC } from 'react';

type TUserInfoProps = {
  user: {
    name: string;
    phone: string;
    email: string;
  };
};

export const UserInfo: FC<TUserInfoProps> = ({ user }) => {
  const { name, phone, email } = user;

  return (
    <div className="flex flex-col gap-1">
      <p className="text-500 text-text">{name}</p>
      <p className="text-textTertiary">{phone}</p>
      <p className="text-textTertiary">{email}</p>
    </div>
  );
};
