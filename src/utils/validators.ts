class Validators {
  public validEmail(email: string): boolean {
    const regex = /^[\w-\.]{1,}@([\w-]+\.)+[\w-]{2,7}$/;

    return regex.test(email);
  }

  public safePassword(password: string): boolean {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_\-+={\[}\]|\:;"'<,>\.\/?\\])[a-zA-Z0-9~`!@#$%^&*()_\-+={\[}\]|\:;"'<,>\.\/?\\]{8,}$/;

    // return regex.test(password.trim());

    return !!password.trim().length;
  }

  public validNotNumbAndSymExceptDash(text: string) {
    const regex =
      /^(?=.*[^0-9~`!@#$%^&*()_+={\[}\]|\:;"'<,>\.\/?\\])[^0-9~`!@#$%^&*()_+={\[}\]|\:;"'<,>\.\/?\\]{2,}$/;

    return regex.test(text?.trim());
  }

  public validPhoneNumber(phoneNumber: string) {
    const regex = /^\d{8}$/;

    return regex.test(phoneNumber);
  }

  public validPrice(value: string): boolean {
    const regex = /^([0-9]\.)?[1-9][0-9]*$/;

    return regex.test(value);
  }

  public allowTypeNotNumbAndSymExceptDash(text: string): boolean {
    const regex =
      /^(?=.*[^0-9~`!@#$%^&*()_+={\[}\]|\:;"'<,>\.\/?\\])?[^0-9~`!@#$%^&*()_+={\[}\]|\:;"'<,>\.\/?\\]*$/;

    return regex.test(text?.trim());
  }

  public allowPhoneNumberType(value: string): boolean {
    const regex = /^\d{0,8}$/;

    return regex.test(value);
  }

  public allowTypeCount(value: string): boolean {
    const regex = /^[1-9][0-9]*$/;

    return !value || regex.test(value);
  }
}

export const validators = new Validators();
