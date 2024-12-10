import { Select as AntSelect, Form, SelectProps } from 'antd';
import { type FC } from 'react';
import { Control, Controller } from 'react-hook-form';

export type TAutocompleteProps = {
  name: string;
  control: Control<any, any>;
  options: SelectProps['options'];
  defaultValue?: SelectProps['options'];
  label?: string;
  placeholder?: string;
  onChange?: (data: any) => void;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
} & SelectProps;

const Select: FC<TAutocompleteProps> = ({
  name,
  control,
  defaultValue,
  label,
  placeholder,
  required,
  disabled,
  options,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    rules={{ required }}
    defaultValue={defaultValue}
    render={({ field }) => (
      <Form.Item label={label} className={props.className} layout="vertical" required={required}>
        <AntSelect
          {...field}
          {...props}
          className="h-12"
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          options={options}
        />
      </Form.Item>
    )}
  />
);

export default Select;
