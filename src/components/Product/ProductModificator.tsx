import { Button } from 'antd';
import { FC } from 'react';

import { CurrencySymbol } from '@/constants';

type ProductModificatorProps = {
  isSelected: boolean;
  onClick: () => void;
  title: string;
  price?: number | string | null;
};

const ProductModificator: FC<ProductModificatorProps> = ({ isSelected, onClick, title, price }) => {
  const isPriceAvailable = price && Number(price) > 0;

  return (
    <Button
      className={`w-max ${isSelected ? 'border-primary bg-primary text-white' : 'border-bgLayout bg-bgLayout text-text hover:border-transparent hover:bg-fill active:border-transparent active:bg-fill'}  disabled:border-textQuinary disabled:bg-textQuinary`}
      onClick={onClick}
    >
      <span>{title}</span>
      {isPriceAvailable && (
        <span>
          {' '}
          / {price} {CurrencySymbol.RUB}
        </span>
      )}
    </Button>
  );
};

export default ProductModificator;
