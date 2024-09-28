import { Radio } from 'antd';
import { RadioGroupProps } from 'antd/lib';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

type RadioProps = {
  name: string;
  control: any;
  defaultValue?: any;
  required?: boolean;
  onChange?: (value: string) => void;
} & Omit<RadioGroupProps, 'onChange'>;
export const RadioGroup: FC<RadioProps> = ({ name, control, children, defaultValue, required, onChange, ...props }) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    rules={{ required }}
    render={({ field }) => {
      console.log('field.value', field.value);

      return (
        <Radio.Group
          onChange={(e) => {
            onChange && onChange(e.target.value);
            field.onChange(e.target.value);
          }}
          value={field.value ?? null}
          defaultValue={defaultValue}
          {...props}
        >
          {children}
        </Radio.Group>
      );
    }}
  />
);
