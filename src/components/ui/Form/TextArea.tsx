import { Form as AntForm } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { TextAreaProps } from 'antd/lib/input';
import { FC, ReactNode } from 'react';
import { Controller, FieldError, FieldValues, Validate } from 'react-hook-form';

type TValidate = Validate<any, FieldValues> | Record<string, Validate<any, FieldValues>> | undefined;

export type Pattern = {
  value: RegExp;
  message: string;
};

type TTextAreaProps = {
  name: string;
  control: any;
  pattern?: Pattern;
  validate?: TValidate;
  label?: ReactNode;
  errors?: FieldError | undefined;
} & TextAreaProps;

export const TextAreaInput: FC<TTextAreaProps> = ({ name, control, pattern, validate, label, errors, ...props }) => (
  <Controller
    name={name}
    control={control}
    rules={{ required: props.required, pattern, validate }}
    render={({ field }) => (
      <AntForm.Item label={label} className={props.className} layout="vertical" required={props.required}>
        <TextArea
          {...field}
          {...props}
          status={field.value?.length && errors?.type === 'validate' ? 'error' : undefined}
        />
      </AntForm.Item>
    )}
  />
);
