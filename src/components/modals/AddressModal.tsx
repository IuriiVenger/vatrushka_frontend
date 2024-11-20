import { AutoComplete, Button } from 'antd';
import { FC, useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Form from '../ui/Form/Form';
import Input from '../ui/Form/Input';

import Modal from './Modal';

import { API } from '@/api/types';
import useDebounce from '@/hooks/useDebounce';
import { useMessage } from '@/hooks/useMessage';
import { TAddressForm, TModalProps } from '@/types';
import { convertAddressToCityStreetBuildingFlat, convertDadataAddressToAddress } from '@/utils/converters';

type TAddressModalProps = TModalProps & {
  isEdit?: boolean;
  address?: API.Address.Address;
  getSuggestions: (value: string) => Promise<API.Dadata.Suggestions.Suggestion[]>;
  onSubmit: ({ id, formData }: { id?: string; formData: TAddressForm }) => Promise<void>;
};

const AddressModal: FC<TAddressModalProps> = (props) => {
  const { isOpen, setIsOpen, isEdit = false, address, getSuggestions, onSubmit } = props;

  const [suggestions, setSuggestions] = useState<API.Dadata.Suggestions.Suggestion[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dropdownOptions = useMemo(
    () => suggestions?.map((suggestion) => ({ label: suggestion.value, value: suggestion.value })),
    [suggestions],
  );

  const isEditMode = isEdit && address;

  const { showMessage } = useMessage();

  const defaultValues: TAddressForm = {
    cityStreetBuildingFlat: address ? convertAddressToCityStreetBuildingFlat(address) : '',
    entrance: address?.entrance || '',
    floor: address?.floor || '',
    doorphone: address?.doorphone || '',
  };

  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm<TAddressForm>({
    mode: 'onChange',
    values: defaultValues,
  });

  const debouncedCityStreetBuildingFlat = useDebounce<string>(watch('cityStreetBuildingFlat'));

  const loadSuggestions = async () => {
    try {
      setIsSearching(true);
      const suggestionsData = await getSuggestions(debouncedCityStreetBuildingFlat);
      setSuggestions(suggestionsData);
    } finally {
      setIsSearching(false);
    }
  };

  const onOptionSelect = (value: string) => {
    const suggestionData = suggestions?.find((suggestion) => suggestion.value === value)?.data;

    if (!suggestionData) return;

    const place = convertDadataAddressToAddress(suggestionData);
    const cityStreetBuildingFlat = convertAddressToCityStreetBuildingFlat(place);

    setValue('cityStreetBuildingFlat', cityStreetBuildingFlat);
  };

  useEffect(() => {
    if (debouncedCityStreetBuildingFlat.length) {
      loadSuggestions();
    }
  }, [debouncedCityStreetBuildingFlat]);

  const submitHandler: SubmitHandler<TAddressForm> = async (formData) => {
    try {
      setIsLoading(true);
      await onSubmit({ id: address?.id, formData });
      setIsOpen(false);
      showMessage({ type: 'success', text: `Адрес успешно ${isEditMode ? 'изменен' : 'добавлен'} ` });
    } finally {
      setIsLoading(false);
    }
  };

  const title = isEditMode ? 'Изменить адрес' : 'Добавить адрес';

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <Form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span>Адрес (город, улица, номер дома, номер квартиры)</span>
            <AutoComplete
              onChange={(value) => setValue('cityStreetBuildingFlat', value, { shouldDirty: true })}
              value={watch('cityStreetBuildingFlat')}
              options={dropdownOptions}
              onSelect={onOptionSelect}
              className="h-12 w-full"
              notFoundContent={
                debouncedCityStreetBuildingFlat.length && !isSearching ? (
                  <p className="py-4 text-center">Ничего не найдено</p>
                ) : null
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Input
              name="entrance"
              type="number"
              inputMode="numeric"
              label="Подъезд"
              control={control}
              errors={!!errors.entrance}
              min={0}
              max={100}
            />
            <Input
              name="floor"
              type="number"
              inputMode="numeric"
              label="Этаж"
              control={control}
              errors={!!errors.floor}
              min={0}
              max={100}
            />
            <Input
              name="doorphone"
              type="string"
              placeholder=""
              label="Домофон"
              control={control}
              errors={!!errors.doorphone}
            />
          </div>
          {/* <RadioGroup name="type.id" control={control} className="flex flex-col gap-3" required>
            {addressTypeOptions.map((type) => (
              <Radio key={type.id} value={type.id}>
                {type.label}
              </Radio>
            ))}
          </RadioGroup> */}
          <div className="flex flex-col gap-4 pt-2 max-sm:pt-0">
            <Button
              type="primary"
              className="w-full max-sm:text-base max-sm:leading-base"
              htmlType="submit"
              disabled={!isValid || !isDirty}
              loading={isLoading}
            >
              Отправить
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddressModal;
