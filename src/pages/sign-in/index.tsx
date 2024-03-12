import React, { JSX } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import SecurityIcon from "@mui/icons-material/Security";
import notRequireAuth from "HOCs/NotRequireAuth";
import useSignInState from "hooks/useSignInState";
import useSignInRequest from "hooks/useSignInRequest";
import "./index.scss";

function SignIn(): JSX.Element {
  const {
    email,
    password,
    remember,
    disableSignIn,
    onEmailChange,
    onPasswordChange,
    onRememberChange,
  } = useSignInState();

  const { isLoading, onSignIn } = useSignInRequest({
    email,
    password,
    remember,
    disableSignIn,
  });

  return (
    <main className="sign_in_main">
      <div className="sign_in_head_box">
        <h1 className="sign_in_head_text">Sign in</h1>
        <SecurityIcon sx={{ width: 40, height: 40 }} />
      </div>
      <form className="sign_in_form">
        <TextField
          type="email"
          label="Email*"
          variant="outlined"
          className="sign_in_input"
          value={email}
          onChange={onEmailChange}
          disabled={isLoading}
        />
        <TextField
          type="password"
          label="Password*"
          variant="outlined"
          className="sign_in_input"
          value={password}
          onChange={onPasswordChange}
          disabled={isLoading}
        />

        <label htmlFor="checkbox" className="sign_in_remember_label">
          <Checkbox
            id="checkbox"
            checked={remember}
            disabled={isLoading}
            onChange={onRememberChange}
          />
          Remember me
        </label>

        <Button
          variant="contained"
          disabled={disableSignIn || isLoading}
          onClick={onSignIn}
        >
          Sign in
        </Button>
      </form>

      <p className="sign_in_copy">
        Copyright &copy;{" "}
        <a
          href="https://portfolio-armen.vercel.app/en"
          target="_blank"
          className="sign_in_copy_link"
        >
          Armen Martirosyan
        </a>{" "}
        2024.
      </p>
    </main>
  );
}

export default notRequireAuth(SignIn);
