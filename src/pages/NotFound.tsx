import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[url('/notFound.gif')] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col items-center gap-5 bg-gradient-to-t from-boxdark/30 p-10 rounded mt-[20%]">
        <button
          onClick={() => navigate("/")}
          className="flex text-boxdark-2 items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-yellow-200 hover:brightness-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Go back
        </button>
        <h1 className="text-3xl font-semibold text-slate-800">
          Oops page not found!
        </h1>
        <p className="text-black">Sorry, an unexpected error has occurred.</p>
      </div>
    </div>
  );
};

export default NotFound;
