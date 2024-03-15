import { IButtonProps } from '../../types/types';

const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button
      {...props}
      className="inline-flex max-w-32 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-primary/70 py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 disabled:cursor-not-allowed disabled:bg-primary/40"
    >
      {children}
    </button>
  );
};

export default Button;
