class Validators {
  public validEmail(email: string): boolean {
    const regex = /^[\w-\.]{1,}@([\w-]+\.)+[\w-]{2,7}$/;

    return regex.test(email);
  }

  public safePassword(password: string): boolean {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_\-+={\[}\]|\:;"'<,>\.\/?\\])[a-zA-Z0-9~`!@#$%^&*()_\-+={\[}\]|\:;"'<,>\.\/?\\]{8,}$/;

    // return regex.test(password.trim());

    return true;
  }
}

export const validators = new Validators();
