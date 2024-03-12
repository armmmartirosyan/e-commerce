import { account } from "providers/account-provider";
import { MouseEvent, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  signInError,
  signInLoading,
  signInSuccess,
} from "store/auth/auth-selectors";
import { signIn } from "store/auth/auth-thunks";
import { useAppDispatch } from "store/configureStore";
import { UseSignInRequestProps } from "types/shared-types";

export default function useSignInRequest({
  email,
  password,
  remember,
  disableSignIn,
}: UseSignInRequestProps) {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(signInLoading);
  const success = useSelector(signInSuccess);
  const error = useSelector(signInError);

  const onSignIn = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (disableSignIn || isLoading) return;

      dispatch(signIn({ email, password }));
    },
    [email, password, disableSignIn, isLoading, dispatch]
  );

  useEffect(() => {
    if (success) {
      account.finalizeSignIn(email, remember);
    }
  }, [success, email, remember]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return {
    isLoading,
    onSignIn,
  };
}
