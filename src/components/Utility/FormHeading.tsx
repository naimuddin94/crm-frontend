interface FormHeading {
  heading: string;
  borderY?: boolean;
}

const FormHeading = ({ heading, borderY }: FormHeading) => {
  return (
    <div
      className={`${borderY ? "border-y mt-5" : "border-b"} border-stroke py-4 px-6.5 dark:border-strokedark`}
    >
      <h3 className="font-medium text-black dark:text-white">{heading}</h3>
    </div>
  );
};

export default FormHeading;
