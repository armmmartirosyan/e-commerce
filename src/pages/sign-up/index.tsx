import React, { JSX, useEffect } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import notRequireAuth from "HOCs/not-require-auth";
import { PROFILE_FIELDS } from "constants/sign-up-constants";
import SignUpInput from "pages/sign-up/components/input";
import Button from "./components/button";
import SignUpRole from "./components/role-checkbox";
import { useAppDispatch } from "store/configure-store";
import { resetSignUpState } from "store/sign-up/sign-up-slice";
import useSignUpResponse from "hooks/use-sign-up-response";
import { signUpRequestLoadingSelector } from "store/sign-up/sign-up-selectors";
import "./index.scss";

function SignUp(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(signUpRequestLoadingSelector);

  useSignUpResponse();

  useEffect(() => {
    return () => {
      dispatch(resetSignUpState());
    };
  }, []);

  return (
    <main className="sign_up_main">
      <div className="sign_up_wrapper">
        <Link to="/" className="sign_up_back_link">
          <ArrowBackIcon />
          Sign in
        </Link>

        <div className="sign_up_head_box">
          <h1 className="sign_up_head_text">Sign up</h1>
          <SecurityIcon sx={{ width: 40, height: 40 }} />
        </div>

        <form className="sign_up_form">
          {PROFILE_FIELDS.map((field) => (
            <SignUpInput key={field.keyName} {...field} disabled={isLoading} />
          ))}

          <SignUpRole disabled={isLoading} />
          <Button disabled={isLoading} />
        </form>
      </div>
    </main>
  );
}

export default notRequireAuth(SignUp);
