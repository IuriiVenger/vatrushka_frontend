import { FC, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

type TProps = {
  initialCount: number;
};

export const StepperButton: FC<TProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="flex w-max items-center rounded-3xl bg-textQuinary">
      <button
        type="button"
        disabled={count === 1}
        className="flex h-10 w-10 items-center justify-center text-textTertiary transition-all hover:text-accent disabled:text-fill"
        onClick={(e) => {
          e.stopPropagation();
          setCount(count - 1);
        }}
      >
        <FiMinus />
      </button>
      <span className="w-6 text-center text-text">{count}</span>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center text-textTertiary transition-all hover:text-accent disabled:text-fill"
        onClick={(e) => {
          e.stopPropagation();
          setCount(count + 1);
        }}
      >
        <FiPlus />
      </button>
    </div>
  );
};
