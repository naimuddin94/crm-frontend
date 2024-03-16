import { UseFormRegister } from "react-hook-form";
import { convertToSlug } from "../../lib/utils";

interface InputProps {
  label: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  defaultValue?: string;
  type?: string;
}

const Textarea = ({
  label,
  register,
  defaultValue,
}: InputProps) => {
  return (
    <div className="flex-1">
      <label className="mb-3 block text-black dark:text-white">{label}</label>
      <textarea
        {...register(convertToSlug(label, "_"))}
        defaultValue={defaultValue}
        placeholder={`Enter ${convertToSlug(label, " ")} here`}
        className="custom-input"
        required
      />
    </div>
  );
};

export default Textarea;
