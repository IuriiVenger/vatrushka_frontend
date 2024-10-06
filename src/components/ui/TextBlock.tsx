import { FC, ReactNode } from 'react';

type TProps = {
  title: string;
  text: string;
  additionalText?: ReactNode;
};

const TextBlock: FC<TProps> = ({ title, text, additionalText }) => (
  <div className="flex flex-col gap-1 pt-4">
    <p className="font-medium">{title}:</p>
    <p>{text}</p>
    {additionalText}
  </div>
);

export default TextBlock;
