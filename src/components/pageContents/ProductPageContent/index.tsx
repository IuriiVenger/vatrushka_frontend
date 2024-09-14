'use client';

import { FC } from 'react';

type TProductPageContentProps = {
  productInfo: any; // have to fix
};

const ProductPageContent: FC<TProductPageContentProps> = (props) => {
  const { productInfo } = props;

  const { title, description, price, image } = productInfo;

  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt={title} />
    </section>
  );
};

export default ProductPageContent;
