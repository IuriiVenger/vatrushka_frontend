import { FC } from 'react';

type TPromoTag = {
  text: string;
};

const PromoTag: FC<TPromoTag> = ({ text }) => (
  <p className="rounded-lg bg-primaryBg px-2 py-1 text-base leading-base text-primary transition-all hover:bg-primaryBgHover">
    {text}
  </p>
);

export default PromoTag;
