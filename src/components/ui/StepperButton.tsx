import { FC, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

type TStepperButtonProps = {
  initialCount: number;
};

export const StepperButton: FC<TStepperButtonProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const isMinusButtonDisabled = count === 1;

  const onCountChange = (delta: number) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setCount((prevCount) => prevCount + delta);
  };

  return (
    <div className="flex w-max items-center rounded-3xl bg-textQuinary">
      <button
        type="button"
        disabled={isMinusButtonDisabled}
        className="flex h-10 w-10 items-center justify-center text-textTertiary transition-all hover:text-accent disabled:text-fill"
        onClick={onCountChange(-1)}
      >
        <FiMinus />
      </button>
      <span className="w-6 text-center text-text">{count}</span>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center text-textTertiary transition-all hover:text-accent disabled:text-fill"
        onClick={onCountChange(1)}
      >
        <FiPlus />
      </button>
    </div>
  );
};
