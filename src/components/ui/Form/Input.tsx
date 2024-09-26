import { Input as AntInput, Form as AntForm } from 'antd';
import { InputProps } from 'antd/lib/input';
import { FC, ReactNode } from 'react';
import { Controller, FieldError } from 'react-hook-form';

import { isEmailValid, isPhoneNumberValid } from '@/utils/validation';

export type Pattern = {
  value: RegExp;
  message: string;
};

type TInputProps = {
  name: string;
  control: any;
  pattern?: Pattern;
  // validate?: TValidate;
  validate?: (value: string | number) => boolean;
  label?: ReactNode;
  errors: FieldError | undefined;
} & InputProps;

export const Input: FC<TInputProps> = ({ name, control, pattern, validate, label, errors, ...props }) => {
  const validateRule = (value: string): boolean => {
    if (typeof validate === 'function') {
      return validate(value);
    }

    if (!props.required && !value) {
      return true; // поле не обязательно и не заполнено - валидно
    }

    if (props.required && !value) {
      return false; // поле обязательно, но не заполнено - невалидно
    }

    let isValid = true;

    switch (props.type) {
      case 'email':
        isValid = isEmailValid(value);
        break;
      case 'tel':
        isValid = isPhoneNumberValid(value);
        break;
      default:
        break;
    }

    return isValid;
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: props.required, pattern, validate: validateRule }}
      render={({ field }) => (
        <AntForm.Item label={label} className={props.className} layout="vertical" required={props.required}>
          <AntInput
            {...field}
            {...props}
            status={field.value?.length && errors?.type === 'validate' ? 'error' : undefined}
          />
        </AntForm.Item>
      )}
    />
  );
};
