import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import RadioAddress from './RadioAddress';

import RadioGroup from '@/components/ui/Form/Radio';
import Map from '@/components/ui/Map';
import { companyInfo } from '@/config/links';
import { TBranch, TCheckoutForm } from '@/types';

const PickupDelivery: FC = () => {
  const { control, watch } = useFormContext<TCheckoutForm>();

  const selectedAddress = watch('branchAddress');

  const getPlacemarks = (places: TBranch[]) =>
    places.map((place) => ({
      id: place.id,
      coords: place.coords,
      isSelected: place.id === selectedAddress,
    }));

  const allMarks = [...getPlacemarks(companyInfo.branches), ...getPlacemarks(companyInfo.partners)];

  return (
    <div className="flex flex-col gap-6">
      <RadioGroup className="flex flex-col gap-4" name="branchAddress" control={control} required>
        {companyInfo.branches.map((branch) => (
          <RadioAddress
            id={branch.id}
            address={branch.address}
            businessHours={branch.businessHours}
            isSelected={selectedAddress === branch.id}
          />
        ))}
        {companyInfo.partners.map((partner) => (
          <RadioAddress
            id={partner.id}
            address={partner.address}
            businessHours={partner.businessHours}
            isSelected={selectedAddress === partner.id}
          />
        ))}
      </RadioGroup>

      <Map placemarks={allMarks} width="100%" />
    </div>
  );
};

export default PickupDelivery;
