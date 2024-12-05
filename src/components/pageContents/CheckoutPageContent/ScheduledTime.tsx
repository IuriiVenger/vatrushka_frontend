'use client';

import dayjs from 'dayjs';
import { FC } from 'react';

import { Control, FieldErrors } from 'react-hook-form';

import { API } from '@/api/types';
import DatePicker from '@/components/ui/Form/DatePicker';
import Select from '@/components/ui/Form/Select';
import { TCheckoutForm } from '@/types';

type TScheduledTimeProps = {
  timeframes: API.Orders.DeliveryTimeframes.DeliveryTimeframe['timeframes'];
  date: dayjs.Dayjs | null;
  control: Control<TCheckoutForm, any>;
  errors: FieldErrors<TCheckoutForm>;
};

const ScheduledTime: FC<TScheduledTimeProps> = ({ timeframes, date, control, errors }) => {
  const formattedDate = date?.format('YYYY-MM-DD').split('T')[0];

  const intervals = timeframes.find((timeframe) => timeframe.date === formattedDate)?.intervals || [];

  const getLabel = (start: string, end: string) => `${dayjs(start).format('HH:mm')} - ${dayjs(end).format('HH:mm')} `;

  const options = intervals.map((interval) => ({
    value: interval.start,
    label: getLabel(interval.start, interval.end),
    disabled: !interval.available,
  }));

  return (
    <div className="flex gap-4">
      <DatePicker
        placeholder="Выберите дату"
        className="w-full"
        required
        name="date"
        label="Дата"
        control={control}
        errors={!!errors.date}
      />
      <Select
        options={options}
        placeholder="Выберите время"
        label="Время"
        className="w-full"
        name="time"
        control={control}
        required
        disabled={!date}
      />
    </div>
  );
};

export default ScheduledTime;
