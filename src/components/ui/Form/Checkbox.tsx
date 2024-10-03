import { Checkbox as AntCheckbox, CheckboxProps } from 'antd';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

type TCustomCheckboxProps = {
  name: string;
  control: any;
  label: string | React.ReactNode;
} & CheckboxProps;

export const Checkbox: FC<TCustomCheckboxProps> = ({ name, control, label, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <AntCheckbox
        checked={field.value}
        defaultChecked={props.defaultChecked}
        onChange={(e) => field.onChange(e.target.checked)}
      >
        {label}
      </AntCheckbox>
    )}
  />
);
