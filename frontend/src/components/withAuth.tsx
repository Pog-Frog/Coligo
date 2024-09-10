import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";


const AuthHOC = (Component: React.ComponentType): React.FC => {
  const AuthenticatedLayout: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.user);

    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }

    return <Component />;
  };

  return AuthenticatedLayout;
}

export default AuthHOC;