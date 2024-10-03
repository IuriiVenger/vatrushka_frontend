// import { Segmented } from 'antd';
// import { SegmentedOptions } from 'antd/es/segmented';
// import { FC } from 'react';

import { Segmented, SegmentedProps } from 'antd';
import { SegmentedOptions } from 'antd/es/segmented';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

// type TFormSegmentedProps = {
//   options: SegmentedOptions<any>
// }

// export const FormSegmented:FC<TFormSegmentedProps> = ({options}) => (
//   <Segmented
//     options={options}
//     value={deliveryType}
//     onChange={(value) => onDeliveryTypeClick(value as DeliveryTypeOptions)}
//     block
//     className="-mt-2 text-lg leading-lg max-lg:text-base max-lg:leading-base"
//   />
// );

type TFormSegmentedProps = {
  name: string;
  options: SegmentedOptions<any>;
  label?: string;
  control: any;
} & SegmentedProps;

export const FormSegmented: FC<TFormSegmentedProps> = ({ name, options, control, defaultValue, ...props }) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field }) => (
      // <FormControl fullWidth>
      //   <FormLabel>{label}</FormLabel>
      //   <MuiToggleButtonGroup {...field} {...props} value={field.value} onChange={(_, v) => v && field.onChange(v)}>
      //     {children}
      //   </MuiToggleButtonGroup>
      // </FormControl>

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
