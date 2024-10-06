import { FC, SetStateAction, Dispatch } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

type TStepperButtonProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  minValue?: number;
};

const StepperButton: FC<TStepperButtonProps> = ({ count, setCount, minValue = 0 }) => {
  const isMinusButtonDisabled = minValue >= count;

  const onCountChange = (delta: number) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setCount((prevCount) => prevCount + delta);
  };

  return (
    <div className="flex h-max w-max items-center rounded-3xl bg-textQuinary max-xs:w-full max-xs:justify-between">
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

export default StepperButton;
