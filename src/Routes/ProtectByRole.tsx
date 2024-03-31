import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Utility/Loader";
import { RootState } from "../redux/store/store";

interface ProtectByRoleProps {
  children: ReactNode;
  role: string;
}

const ProtectByRole = ({ children, role }: ProtectByRoleProps) => {
  const { isLoading, user } = useSelector((state: RootState) => state.auth);

  if (isLoading) {
    return <Loader />;
  }

  if (user?.role === role) {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};

export default ProtectByRole;
