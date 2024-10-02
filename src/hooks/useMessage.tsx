import { App } from 'antd';
import { NoticeType } from 'antd/es/message/interface';

type TProps = {
  type: NoticeType;
  text: string;
};
export const useMessage = () => {
  const { message } = App.useApp();

  const showMessage = ({ type, text }: TProps) =>
    message.open({
      type,
      content: text,
      className: 'text-lg leading-lg max-sm:text-base max-sm:leading-base',
      // duration: 100,
      // style: {
      //   marginTop: '20vh',
      // },
    });

  return { showMessage };
};
