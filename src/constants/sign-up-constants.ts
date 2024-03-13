import { validators } from "utils/validators";

export const SIGN_UP_FIELD_KEYS = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  Phone: "phone",
  Image: "image",
  Password: "password",
  ConfirmPassword: "confirmPassword",
  Role: "role",
} as const;

export const SIGN_UP_FIELDS = [
  {
    inputType: "text",
    keyName: SIGN_UP_FIELD_KEYS.FirstName,
    label: "First name*",
    validator: validators.allowTypeNotNumbAndSymExceptDash,
    className: "sign_up_input-short",
  },
  {
    inputType: "text",
    keyName: SIGN_UP_FIELD_KEYS.LastName,
    label: "Last name*",
    validator: validators.allowTypeNotNumbAndSymExceptDash,
    className: "sign_up_input-short",
  },
  {
    inputType: "text",
    keyName: SIGN_UP_FIELD_KEYS.Email,
    label: "Email*",
    validator: null,
    className: "sign_up_input-long",
  },
  {
    inputType: "text",
    keyName: SIGN_UP_FIELD_KEYS.Phone,
    label: "Phone*",
    validator: validators.allowPhoneNumberType,
    className: "sign_up_input-long",
  },
  {
    inputType: "text",
    keyName: SIGN_UP_FIELD_KEYS.Image,
    label: "Image URL*",
    validator: null,
    className: "sign_up_input-long",
  },
  {
    inputType: "password",
    keyName: SIGN_UP_FIELD_KEYS.Password,
    label: "Password*",
    validator: null,
    className: "sign_up_input-long",
  },
  {
    inputType: "password",
    keyName: SIGN_UP_FIELD_KEYS.ConfirmPassword,
    label: "Confirm password*",
    validator: null,
    className: "sign_up_input-long",
  },
];
