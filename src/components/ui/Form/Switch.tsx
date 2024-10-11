import { Switch as AntSwitch, SwitchProps } from 'antd';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

type TSwitchProps = {
  name: string;
  control: any;
  labelClassName?: string;
  defaultChecked?: boolean | undefined;
  label?: string;
} & SwitchProps;

const Switch: FC<TSwitchProps> = ({ name, control, labelClassName, defaultChecked, label, ...props }) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultChecked ?? false}
    render={({ field: { onChange, value } }) => (
      <div className="flex items-center gap-2" aria-label={label}>
        <AntSwitch {...props} onChange={(checked) => onChange(checked)} checked={value ?? defaultChecked ?? false} />
        {label && (
          <p className={`text-lg leading-lg max-sm:text-base max-sm:leading-base ${labelClassName}`}>{label}</p>
        )}
      </div>
    )}
  />
);

export default Switch;
