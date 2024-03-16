import { SIGN_UP_ERROR, SIGN_UP_SUCCESS } from "constants/shared-constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  signUpRequestErrorSelector,
  signUpRequestSuccessSelector,
} from "store/sign-up/sign-up-selectors";

export default function useSignUpResponse() {
  const success = useSelector(signUpRequestSuccessSelector);
  const error = useSelector(signUpRequestErrorSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      toast.success(SIGN_UP_SUCCESS);
      navigate("/");
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      toast.error(SIGN_UP_ERROR);
    }
  }, [error]);
}
