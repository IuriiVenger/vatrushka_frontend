import { DatePicker as AntDatePicker, DatePickerProps, Form } from 'antd';
import dayjs from 'dayjs';
import { FC, ReactNode } from 'react';
import { Controller } from 'react-hook-form';

import 'dayjs/locale/ru';

dayjs.locale('ru');

type TDatePickerProps = {
  name: string;
  control: any;
  errors: boolean;
  required?: boolean;
  label?: ReactNode;
  defaultValue?: Date | null;
  customValidate?: (value?: any) => boolean;
} & DatePickerProps;

const DatePicker: FC<TDatePickerProps> = ({
  name,
  control,
  required,
  errors,
  label,
  defaultValue,
  customValidate,
  ...props
}) => {
  const validateRule = (value: string): boolean => {
    if (typeof customValidate === 'function') {
      return customValidate(value);
    }

    if (!required && !value) {
      return true;
    }

    if (required && !value) {
      return false;
    }

    return true;
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const onDateChange = (
    value: dayjs.Dayjs,
    onChange: (date: dayjs.Dayjs, dateString: string | string[]) => void,
    onBlur: () => void,
  ) => {
    onChange(value, value.format('DD.MM.YYYY'));
    onBlur();
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required, validate: validateRule }}
      render={({ field: { onChange, onBlur, ...rest } }) => (
        <Form.Item label={label} layout="vertical" required={required} className={props.className}>
          <AntDatePicker
            {...rest}
            {...props}
            onChange={(value) => onDateChange(value, onChange, onBlur)}
            minDate={dayjs()}
            status={errors ? 'error' : undefined}
            format={{ format: 'DD.MM.YYYY', type: 'mask' }}
            superNextIcon={null}
            superPrevIcon={null}
            placement="bottomRight"
            onKeyDown={handleKeyDown}
            allowClear={false}
          />
        </Form.Item>
      )}
    />
  );
};

export default DatePicker;
