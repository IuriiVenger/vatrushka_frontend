import { FC, SetStateAction, Dispatch } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

type TStepperButtonProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>> | ((count: number) => void);
  minValue?: number;
};

const StepperButton: FC<TStepperButtonProps> = ({ count, setCount, minValue = 0 }) => {
  const isMinusButtonDisabled = minValue >= count;

  const onCountChange = (delta: number) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setCount(count + delta);
  };

  return (
    <div className="flex items-center rounded-3xl bg-textQuinary max-xs:justify-between">
      <button
        type="button"
        aria-label="Уменьшить количество на 1"
        disabled={isMinusButtonDisabled}
        className="flex h-10 w-10 items-center justify-center text-textTertiary transition-all hover:text-accent disabled:text-fill"
        onClick={onCountChange(-1)}
      >
        <FiMinus />
      </button>
      <span className="w-6 text-center text-text">{count}</span>
      <button
        type="button"
        aria-label="Увеличить количество на 1"
        className="flex h-10 w-10 items-center justify-center text-textTertiary transition-all hover:text-accent disabled:text-fill"
        onClick={onCountChange(1)}
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default StepperButton;
