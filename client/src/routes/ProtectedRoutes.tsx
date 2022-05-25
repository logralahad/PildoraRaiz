import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext, IAuthContext } from "../context/useAuth";

type isAdminProps = {
  isAdmin: boolean;
};

export const ProtectedRoute = ({ isAdmin }: isAdminProps) => {
  const { currentUser } = useContext(AuthContext) as IAuthContext;
  const location = useLocation();

  if (currentUser) {
    if (
      isAdmin &&
      currentUser.rolId !== Number(process.env.REACT_APP_ADMIN_ROL)
    ) {
      return <Navigate to="/" state={{ from: location.pathname }} replace />;
    }
    if (
      !isAdmin &&
      currentUser.rolId === Number(process.env.REACT_APP_ADMIN_ROL)
    ) {
      return <Navigate to="/" state={{ from: location.pathname }} replace />;
    }
    return <Outlet></Outlet>;
  }
  return <Navigate to="/login" state={{ from: location.pathname }} replace />;
};
