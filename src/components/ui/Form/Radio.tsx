import { Radio, RadioChangeEvent } from 'antd';
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
      const onRadioChange = (e: RadioChangeEvent) => {
        onChange && onChange(e.target.value);
        field.onChange(e.target.value);
      };

      return (
        <Radio.Group onChange={onRadioChange} value={field.value ?? null} defaultValue={defaultValue} {...props}>
          {children}
        </Radio.Group>
      );
    }}
  />
);
