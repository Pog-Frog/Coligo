import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../store/store";


const AuthHOC = (Component: React.ComponentType): React.FC => {
  const AuthenticatedLayout: React.FC = () => {
    const isAuthenticated = useSelector(selectUser);

    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }

    return <Component />;
  };

  return AuthenticatedLayout;
}

export default AuthHOC;