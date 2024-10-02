import { Radio, RadioChangeEvent } from 'antd';
import { RadioGroupProps } from 'antd/lib';
import { FC, useMemo } from 'react';
import { Controller, ControllerRenderProps, FieldValues } from 'react-hook-form';

type RadioProps = {
  name: string;
  control: any;
  defaultValue?: any;
  required?: boolean;
  onChange?: (value: string) => void;
} & Omit<RadioGroupProps, 'onChange'>;
export const RadioGroup: FC<RadioProps> = ({ name, control, children, defaultValue, required, onChange, ...props }) => {
  const onRadioChange = useMemo(
    () => (e: RadioChangeEvent, field: ControllerRenderProps<FieldValues, string>) => {
      onChange && onChange(e.target.value);
      field.onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required }}
      render={({ field }) => (
        <Radio.Group
          onChange={(e) => onRadioChange(e, field)}
          value={field.value ?? null}
          defaultValue={defaultValue}
          {...props}
        >
          {children}
        </Radio.Group>
      )}
    />
  );
};
