import { useEffect, useState } from "react";
import { ISelectGroupProps } from "../../types/type";
import { convertToSlug } from "../../lib/utils";
import { RegisterOptions } from "react-hook-form";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Select = ({
  label,
  options,
  icon,
  register,
  defaultOption,
}: ISelectGroupProps) => {
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  useEffect(() => {
    if (defaultOption) {
      setIsOptionSelected(true);
    }
  }, [defaultOption]);

  return (
    <div className="flex-1">
      <label className="mb-3 block text-black dark:text-white">{label}</label>

      <div className="relative z-20 bg-white dark:bg-form-input">
        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
          {icon}
        </span>

        <select
          {...register(convertToSlug(label, "_"), {
            defaultValue: defaultOption,
          } as RegisterOptions)}
          onChange={(e) => setIsOptionSelected(!!e.target.value)}
          className={`relative z-20 w-full appearance-none rounded-md border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
          <option value="" disabled className="text-body dark:text-bodydark">
            Click here to select
          </option>
          {options &&
            options.map((option) => (
              <option
                key={option}
                value={option}
                className="text-body dark:text-bodydark"
              >
                {option}
              </option>
            ))}
        </select>
        <span className="absolute z-40 right-4 top-1/2 -translate-y-1/2">
          <MdOutlineKeyboardArrowDown size={20} />
        </span>
      </div>
    </div>
  );
};

export default Select;
