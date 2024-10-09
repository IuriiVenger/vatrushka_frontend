import { Input, InputRef } from 'antd';
import { ChangeEvent, FC, forwardRef } from 'react';
import { IoSearch } from 'react-icons/io5';

type TSearchInputProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onClear?: () => void;
};

const SearchInput: FC<TSearchInputProps> = forwardRef<InputRef, TSearchInputProps>(
  ({ onChange, value, onClear }, ref) => (
    <Input
      ref={ref}
      size="small"
      onChange={onChange}
      value={value}
      placeholder="Поиск по сайту"
      prefix={<IoSearch className="h-4 w-4 text-textTertiary" />}
      style={{ borderRadius: '10rem' }}
      className="h-10 px-4 max-lg:w-76 max-md:w-full"
      allowClear
      onClear={onClear}
    />
  ),
);

export default SearchInput;
