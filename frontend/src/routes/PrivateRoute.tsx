import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
