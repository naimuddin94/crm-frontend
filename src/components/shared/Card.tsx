interface CardProps {
  title: string;
  value: number;
}

const Card = ({ title, value }: CardProps) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-3 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center p-1 justify-center rounded-full">
        <h4 className="font-extralight text-black dark:text-white">
          {title}
        </h4>
      </div>

      <div className="mt-2 flex items-end justify-center py-1">
        <h4 className="text-title-md font-bold text-black dark:text-white">
          {value}
        </h4>
      </div>
    </div>
  );
};

export default Card;
