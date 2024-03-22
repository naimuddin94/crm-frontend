import { HTMLProps } from "react";
import { UseFormRegister } from "react-hook-form";
import { convertToSlug } from "../../lib/utils";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  defaultValue?: string | number | readonly string[];
  type?: string;
  required?: boolean;
}

const Input = ({
  label,
  register,
  placeholder,
  defaultValue,
  type = "text",
  required = true,
  ...props
}: InputProps) => {
  return (
    <div className="flex-1">
      <label className="mb-3 block text-black dark:text-white">{label}</label>
      <input
        {...register(convertToSlug(label, "_"))}
        defaultValue={defaultValue ?? ""}
        type={type}
        placeholder={
          placeholder ? placeholder : `Enter ${convertToSlug(label, " ")} here`
        }
        className="custom-input"
        required={required}
        {...props}
      />
    </div>
  );
};

export default Input;
