import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { RxCross2 } from 'react-icons/rx';

type RoundCloseButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const RoundCloseButton: FC<RoundCloseButtonProps> = ({ className, ...otherProps }) => (
  <button
    type="button"
    className={cn('absolute right-3 top-3 rounded-full bg-white p-1 text-black', className)}
    {...otherProps}
  >
    <RxCross2 />
  </button>
);

export default RoundCloseButton;
