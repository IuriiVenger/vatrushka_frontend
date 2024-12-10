import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import RadioAddress from './RadioAddress';

import { API } from '@/api/types';
import RadioGroup from '@/components/ui/Form/Radio';
import Map from '@/components/ui/Map';

import { TCheckoutForm } from '@/types';
import { convertAddressToCityStreetBuildingFlat, covertScheduleToBusinessHours } from '@/utils/converters';

type PickupDeliveryProps = {
  addresses: API.Address.TerminalAddress[];
};

const PickupDelivery: FC<PickupDeliveryProps> = ({ addresses }) => {
  const { control, watch } = useFormContext<TCheckoutForm>();

  const selectedAddress = watch('branchAddress');

  const allMarks = addresses.map((address) => ({
    id: address.terminal_group_id,
    coords: [address.latitude, address.longitude],
    isSelected: address.id === selectedAddress,
  }));

  return (
    <div className="flex flex-col gap-6">
      <RadioGroup className="flex flex-col gap-4" name="branchAddress" control={control} required>
        {addresses.map((address) => (
          <RadioAddress
            id={address.id}
            address={convertAddressToCityStreetBuildingFlat(address)}
            businessHours={covertScheduleToBusinessHours(address.working_hours.schedule)}
            isSelected={selectedAddress === address.id}
          />
        ))}
        {/* {companyInfo.partners.map((partner) => (
          <RadioAddress
            id={partner.id}
            address={partner.address}
            businessHours={partner.businessHours}
            isSelected={selectedAddress === partner.id}
          />
        ))} */}
      </RadioGroup>

      <Map placemarks={allMarks} width="100%" />
    </div>
  );
};

export default PickupDelivery;
