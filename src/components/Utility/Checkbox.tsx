import { UseFormRegister } from 'react-hook-form';
import { convertToSlug } from '../../lib/utils';

interface CheckboxProps {
  label: string;
  register: UseFormRegister<any>;
  isChecked?: boolean;
}

const Checkbox = ({ label, register, isChecked }: CheckboxProps) => {
  return (
    <div>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            {...register(convertToSlug(label, "_"))}
            checked={isChecked}
          />
          <div
            className={`box mr-4 flex h-5 w-5 items-center justify-center rounded-full border border-primary ${
              isChecked && '!border-4'
            }`}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"></span>
          </div>
        </div>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
