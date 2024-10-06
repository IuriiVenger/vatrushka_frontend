import cn from 'classnames';
import { FC } from 'react';

import { API } from '@/api/types';
import { TagColorSchema } from '@/constants';

type LabelProps = {
  label: API.Products.Label;
  className?: string;
};

const Label: FC<LabelProps> = ({ label, className }) => (
  <span
    className={cn('px-2 py-1 leading-base', className)}
    style={{
      backgroundColor:
        (label.slug && TagColorSchema[label.slug]?.backgroundColor) || TagColorSchema.default.backgroundColor,
      color: (label.slug && TagColorSchema[label.slug]?.textColor) || TagColorSchema.default.textColor,
    }}
  >
    {label.name}
  </span>
);

export default Label;
