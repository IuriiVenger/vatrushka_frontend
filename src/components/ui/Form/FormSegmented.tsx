import { Segmented, SegmentedProps } from 'antd';
import { SegmentedOptions } from 'antd/es/segmented';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

type TFormSegmentedProps = {
  name: string;
  options: SegmentedOptions<any>;
  label?: string;
  control: any;
} & SegmentedProps;

const FormSegmented: FC<TFormSegmentedProps> = ({ name, options, control, defaultValue, ...props }) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field }) => (
      <Segmented
        {...field}
        {...props}
        options={options}
        value={field.value}
        onChange={(v) => v && field.onChange(v)}
        block
        className="-mt-2 text-lg leading-lg max-lg:text-base max-lg:leading-base"
      />
    )}
  />
);

export default FormSegmented;
