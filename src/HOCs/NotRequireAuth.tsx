import React, { FC } from "react";
import { account } from "providers/account-provider";
import { Navigate, useLocation } from "react-router-dom";

const notRequireAuth = (WrappedComponent: FC) => {
  return (props: any) => {
    const token = account.getAuthToken();
    const location = useLocation();

    if (token) {
      return (
        <Navigate to="/product-list" state={{ path: location.pathname }} />
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default notRequireAuth;
