import { Radio } from 'antd';
import { FC } from 'react';

type TRadioAddressProps = {
  id: string;
  address: string;
  isSelected: boolean;
  businessHours: string;
};

const RadioAddress: FC<TRadioAddressProps> = ({ id, address, isSelected, businessHours }) => (
  <div className={`rounded-2xl border  p-4 ${isSelected ? 'border-primary' : 'border-borderSecondary'}`}>
    <Radio value={id} className="flex items-start gap-2">
      <div className="flex flex-col gap-2">
        <p>{address}</p>
        <p>{businessHours}</p>
      </div>
    </Radio>
  </div>
);

export default RadioAddress;
