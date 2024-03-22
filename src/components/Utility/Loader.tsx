import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-boxdark">
      {/* <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div> */}
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#7F27FF"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
