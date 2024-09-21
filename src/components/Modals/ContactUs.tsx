import { CheckCircleFilled } from '@ant-design/icons';
import { App, Button, Checkbox, CheckboxProps, Form, Input, Modal, Tabs, TabsProps } from 'antd';

import TextArea from 'antd/es/input/TextArea';
import { Dispatch, FC, SetStateAction } from 'react';

import { color } from '@/config/variables';

type TModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const ContactUsModal: FC<TModalProps> = ({ isOpen, setIsOpen }) => {
  const { modal } = App.useApp();

  const handleCancel = () => {
    setIsOpen(false);
  };

  const showSuccess = () => {
    setIsOpen(false);
    modal.success({
      title: 'Ваша заявка успешно отправлена',
      content: <p className="w-79">В ближайшее время с вами свяжется менеджер.</p>,
      footer: null,
      closable: true,
      centered: true,
      prefixCls: '',
      icon: <CheckCircleFilled color={color.success} className="text-success" width={150} height={150} />,
    });
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const items: TabsProps['items'] = [
    {
      key: 'message',
      label: 'Написать нам',
      children: (
        <Form layout="vertical">
          <Form.Item label="Имя" required>
            <Input type="phone" placeholder="Иван" />
          </Form.Item>
          <Form.Item label="Номер телефона" required>
            <Input type="phone" placeholder="+7 (999) 999-99-99" />
          </Form.Item>
          <Form.Item label="Сообщение" required>
            <TextArea rows={3} style={{ resize: 'none' }} placeholder="Введите текст сообщения" />
          </Form.Item>
        </Form>
      ),
    },
    {
      key: 'call',
      label: 'Заказать звонок',
      children: (
        <Form layout="vertical">
          <Form.Item label="Имя" required>
            <Input type="phone" placeholder="Иван" />
          </Form.Item>
          <Form.Item label="Номер телефона" required>
            <Input type="phone" placeholder="+7 (999) 999-99-99" />
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <Modal
      title="Связаться с нами"
      open={isOpen}
      okButtonProps={{ className: 'w-full' }}
      onCancel={handleCancel}
      width="max-content"
      centered
      footer={
        <Button type="primary" className="w-full" onClick={showSuccess}>
          Отправить
        </Button>
      }
    >
      <div className="w-80">
        <Tabs defaultActiveKey="write" items={items} />
        <Checkbox onChange={onChange} className="pb-3 pt-2">
          Я принимаю условия{' '}
          <a href="123" className="text-link transition-all hover:text-linkHover">
            Политики конфиденциальности
          </a>
        </Checkbox>
      </div>
    </Modal>
  );
};
