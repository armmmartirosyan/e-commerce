import { ChangeEvent, useMemo, useState } from "react";
import { validators } from "utils/validators";

const { safePassword, validEmail } = validators;

export default function useSignInState() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onRememberChange = () => {
    setRemember((prev) => !prev);
  };

  const disableSignIn = useMemo(() => {
    return !validEmail(email) || !safePassword(password);
  }, [email, password]);

  return {
    email,
    password,
    remember,
    onPasswordChange,
    onEmailChange,
    onRememberChange,
    disableSignIn,
  };
}
