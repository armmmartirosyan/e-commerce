import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/configure-store";
import { getCurrentUser } from "store/auth/auth-thunks";
import WithHeaderLayout from "layouts/with-header-layout";
import { account } from "../providers/account-provider";

const requireAuth = (WrappedComponent: FC) => {
  return (props: any) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = account.getAuthToken();

    useEffect(() => {
      if (!token) {
        navigate("/");
      } else {
        dispatch(getCurrentUser());
      }
    }, [token]);

    return (
      <WithHeaderLayout>
        <WrappedComponent {...props} />
      </WithHeaderLayout>
    );
  };
};

export default requireAuth;
