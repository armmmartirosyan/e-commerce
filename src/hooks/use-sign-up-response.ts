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
      toast.success("You've signed up");
      navigate("/");
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      toast.error("Please fill all required fields correctly!");
    }
  }, [error]);
}
