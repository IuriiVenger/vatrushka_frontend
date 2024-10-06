import { InputNumber, Form as AntForm, InputNumberProps } from 'antd';
import { FC, ReactNode } from 'react';
import { Controller } from 'react-hook-form';

export type Pattern = {
  value: RegExp;
  message: string;
};

type TNumericInputProps = {
  name: string;
  control: any;
  pattern?: Pattern;
  validate?: (value: string | number) => boolean;
  label?: ReactNode;
  errors: boolean;
} & InputNumberProps;

const NumericInput: FC<TNumericInputProps> = ({ name, control, pattern, validate, label, errors, ...props }) => {
  const validateRule = (value: string): boolean => {
    if (typeof validate === 'function') {
      return validate(value);
    }

    if (!props.required && !value) {
      return true;
    }

    if (props.required && !value) {
      return false;
    }

    return true;
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: props.required, pattern, validate: validateRule }}
      render={({ field }) => (
        <AntForm.Item label={label} className={props.className} layout="vertical" required={props.required}>
          <InputNumber {...field} {...props} status={errors ? 'error' : undefined} />
        </AntForm.Item>
      )}
    />
  );
};

export default NumericInput;
