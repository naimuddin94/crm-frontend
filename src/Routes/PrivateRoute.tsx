import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Utility/Loader";
import { login, setLoading } from "../redux/features/authSlice";
import { RootState } from "../redux/store/store";

interface IPrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parseUser = JSON.parse(user);
      dispatch(login(parseUser));
    }
    dispatch(setLoading(false));
  }, [dispatch]);

  const { isLoading, isLoggedIn } = useSelector(
    (state: RootState) => state.auth
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoute;
