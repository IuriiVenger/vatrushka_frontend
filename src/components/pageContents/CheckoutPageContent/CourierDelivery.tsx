import { AutoComplete, Button } from 'antd';
import { FC, useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { API } from '@/api/types';
import AddressesModal from '@/components/modals/AddressesModal';
import Input from '@/components/ui/Form/Input';
import Map from '@/components/ui/Map';

import useDebounce from '@/hooks/useDebounce';
import { TAddressForm, TCheckoutForm } from '@/types';
import { convertDadataAddressToAddress, convertAddressToCityStreetBuildingFlat } from '@/utils/converters';

type TCourierDeliveryProps = {
  getSuggestions: (value: string) => Promise<API.Dadata.Suggestions.Suggestion[]>;
  isUserLoggedIn: boolean;
  addresses: API.Address.Address[] | null;
  selectedAddress: API.Address.Create.Request | null;
  setSelectedAddress: (formData: TAddressForm) => Promise<void>;
};

const CourierDelivery: FC<TCourierDeliveryProps> = (props) => {
  const { getSuggestions, isUserLoggedIn, addresses, setSelectedAddress, selectedAddress } = props;

  const [isAddressesModalOpen, setIsAddressesModalOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<API.Dadata.Suggestions.Suggestion[] | null>(null);

  const {
    control,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext<TCheckoutForm>();

  const debouncedCityStreetBuildingFlat = useDebounce<string>(watch('userAddress.cityStreetBuildingFlat'));

  const dropdownOptions = useMemo(
    () => suggestions?.map((suggestion) => ({ label: suggestion.value, value: suggestion.value })),
    [suggestions],
  );

  const onMyAddressesClick = () => {
    setIsAddressesModalOpen(true);
  };

  const setFormData = () => {
    setSelectedAddress(getValues('userAddress'));
  };

  const onUserAddressSelect = (formData: TAddressForm) => {
    setSelectedAddress(formData);
    setValue('userAddress', formData);
  };

  const onAddressOptionSelect = (value: string) => {
    const suggestionData = suggestions?.find((suggestion) => suggestion.value === value)?.data;

    if (!suggestionData) return;

    const place = convertDadataAddressToAddress(suggestionData);
    const cityStreetBuildingFlat = convertAddressToCityStreetBuildingFlat(place);

    setValue('userAddress.cityStreetBuildingFlat', cityStreetBuildingFlat);
    setFormData();
  };

  const loadSuggestions = async () => {
    try {
      setIsSearching(true);
      const suggestionsData = await getSuggestions(debouncedCityStreetBuildingFlat);
      setSuggestions(suggestionsData);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if (debouncedCityStreetBuildingFlat?.length) {
      loadSuggestions();
    }
  }, [debouncedCityStreetBuildingFlat]);

  const placemarks = useMemo(() => {
    if (!selectedAddress || !selectedAddress.latitude || !selectedAddress.longitude) return [];
    return [
      {
        id: `${selectedAddress.latitude}-${selectedAddress.longitude}`,
        coords: [selectedAddress.latitude, selectedAddress.longitude],
        isSelected: true,
      },
    ];
  }, [selectedAddress]);

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium leading-2xl max-sm:text-xl max-sm:leading-xl">Адрес доставки</h3>
          {isUserLoggedIn && !!addresses?.length && (
            <Button type="link" onClick={onMyAddressesClick} className="h-6 p-0">
              Мои адреса
            </Button>
          )}
        </div>
        <Map placemarks={placemarks} width="100%" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span>Адрес (город, улица, номер дома, номер квартиры)</span>
            <AutoComplete
              onChange={(value) => setValue('userAddress.cityStreetBuildingFlat', value, { shouldDirty: true })}
              onBlur={setFormData}
              value={watch('userAddress.cityStreetBuildingFlat')}
              options={dropdownOptions}
              onSelect={onAddressOptionSelect}
              className="h-12 w-full"
              notFoundContent={
                debouncedCityStreetBuildingFlat?.length && !isSearching ? (
                  <p className="py-4 text-center">Ничего не найдено</p>
                ) : null
              }
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input
              name="userAddress.entrance"
              type="number"
              placeholder="00"
              inputMode="numeric"
              label="Подъезд"
              control={control}
              errors={!!errors.userAddress?.entrance}
              min={0}
              max={100}
            />
            <Input
              name="userAddress.floor"
              type="number"
              placeholder="00"
              inputMode="numeric"
              label="Этаж"
              control={control}
              errors={!!errors.userAddress?.floor}
              min={0}
              max={100}
            />
            <Input
              name="userAddress.doorphone"
              type="number"
              placeholder="000"
              inputMode="numeric"
              label="Домофон"
              control={control}
              errors={!!errors.userAddress?.doorphone}
              min={0}
              max={10000}
            />
          </div>
        </div>
      </div>
      <AddressesModal
        isOpen={isAddressesModalOpen}
        setIsOpen={setIsAddressesModalOpen}
        setSelectedAddressFormData={onUserAddressSelect}
        addresses={addresses}
      />
    </>
  );
};

export default CourierDelivery;
