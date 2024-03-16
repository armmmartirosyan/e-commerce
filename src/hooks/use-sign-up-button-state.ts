import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/configure-store";
import { signUpAllLocalFieldsSelector } from "store/sign-up/sign-up-selectors";
import { signUp } from "store/sign-up/sign-up-thunks";
import { validators } from "utils/validators";

export default function useSignUpButtonState(disabled: boolean | undefined) {
  const dispatch = useAppDispatch();
  const {
    firstName,
    lastName,
    email,
    phone,
    imageUrl,
    password,
    confirmPassword,
    role,
  } = useSelector(signUpAllLocalFieldsSelector);

  const isDisabled = useMemo(() => {
    return (
      !validators.validNotNumbAndSymExceptDash(firstName) ||
      !validators.validNotNumbAndSymExceptDash(lastName) ||
      !validators.validEmail(email) ||
      !validators.validPhoneNumber(phone) ||
      !validators.safePassword(password) ||
      password !== confirmPassword ||
      !imageUrl ||
      disabled
    );
  }, [
    firstName,
    lastName,
    email,
    phone,
    imageUrl,
    password,
    confirmPassword,
    disabled,
  ]);

  const handleSignUp = () => {
    if (isDisabled) return;

    dispatch(
      signUp({
        firstName,
        lastName,
        email,
        phone,
        imageUrl,
        password,
        role,
      })
    );
  };

  return {
    isDisabled,
    onSignUp: handleSignUp,
  };
}
