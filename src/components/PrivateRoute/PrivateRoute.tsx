import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  isAuth: boolean;
  children: ReactNode;
}

export const PrivateRoute = ({ isAuth, children }: PrivateRouteProps) => {
  return isAuth ? <>{children}</> : <Navigate to="/login" />;
};
