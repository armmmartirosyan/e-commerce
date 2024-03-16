import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/configure-store";
import { updateUser } from "store/auth/auth-thunks";
import { updateCurrentUser } from "store/auth/auth-slice";
import { currentUserDataSelector } from "store/auth/auth-selectors";
import { validators } from "utils/validators";
import { ProfileContext } from "contexts";
import { ProfileWrapperContextValue } from "types/shared-types";

const withProfileContext = (WrappedComponent: FC) => {
  return (props: any) => {
    const dispach = useAppDispatch();
    const currentData = useSelector(currentUserDataSelector);
    const [firstName, setFirstName] = useState(currentData?.firstName || "");
    const [lastName, setLastName] = useState(currentData?.lastName || "");
    const [email, setEmail] = useState(currentData?.email || "");
    const [imageUrl, setImageUrl] = useState(currentData?.imageUrl || "");
    const [phone, setPhone] = useState(currentData?.phone || "");

    useEffect(() => {
      if (currentData) {
        setFirstName(currentData.firstName);
        setLastName(currentData.lastName);
        setEmail(currentData.email);
        setImageUrl(currentData.imageUrl);
        setPhone(currentData.phone);
      }
    }, [currentData]);

    const isDisabled = useMemo(() => {
      return (
        !imageUrl ||
        !currentData ||
        !validators.validNotNumbAndSymExceptDash(firstName) ||
        !validators.validNotNumbAndSymExceptDash(lastName) ||
        !validators.validPhoneNumber(phone) ||
        !validators.validEmail(email) ||
        (firstName === currentData.firstName &&
          lastName === currentData.lastName &&
          email === currentData.email &&
          phone === currentData.phone &&
          imageUrl === currentData.imageUrl)
      );
    }, [firstName, lastName, email, phone, imageUrl, currentData]);

    const handleUpdateUserData = useCallback(async () => {
      if (isDisabled || !currentData) return;

      const userData = {
        ...currentData,
        id: currentData.id,
        firstName,
        lastName,
        email,
        phone,
        imageUrl,
      };

      const { payload } = await dispach(updateUser(userData));

      if (payload === true) {
        dispach(updateCurrentUser({ ...userData }));
      }
    }, [
      isDisabled,
      currentData,
      firstName,
      lastName,
      email,
      phone,
      imageUrl,
      dispach,
    ]);

    const contextValue: ProfileWrapperContextValue = {
      firstName: [firstName, setFirstName],
      lastName: [lastName, setLastName],
      email: [email, setEmail],
      imageUrl: [imageUrl, setImageUrl],
      phone: [phone, setPhone],
      action: [handleUpdateUserData, isDisabled],
    };

    return (
      <ProfileContext.Provider value={contextValue}>
        <WrappedComponent {...props} />
      </ProfileContext.Provider>
    );
  };
};

export default withProfileContext;
