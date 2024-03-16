import { validators } from "utils/validators";

export const FIELD_KEYS = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  Phone: "phone",
  Image: "imageUrl",
  Password: "password",
  ConfirmPassword: "confirmPassword",
  Role: "role",
} as const;

export const PROFILE_FIELDS = [
  {
    inputType: "text",
    keyName: FIELD_KEYS.FirstName,
    label: "First name*",
    validator: validators.allowTypeNotNumbAndSymExceptDash,
    className: "sign_up_input-short",
  },
  {
    inputType: "text",
    keyName: FIELD_KEYS.LastName,
    label: "Last name*",
    validator: validators.allowTypeNotNumbAndSymExceptDash,
    className: "sign_up_input-short",
  },
  {
    inputType: "text",
    keyName: FIELD_KEYS.Email,
    label: "Email*",
    validator: null,
    className: "sign_up_input-long",
  },
  {
    inputType: "text",
    keyName: FIELD_KEYS.Phone,
    label: "Phone*",
    validator: validators.allowPhoneNumberType,
    className: "sign_up_input-long",
  },
  {
    inputType: "text",
    keyName: FIELD_KEYS.Image,
    label: "Image URL*",
    validator: null,
    className: "sign_up_input-long",
  },
  {
    inputType: "password",
    keyName: FIELD_KEYS.Password,
    label: "Password*",
    validator: null,
    className: "sign_up_input-long",
  },
  {
    inputType: "password",
    keyName: FIELD_KEYS.ConfirmPassword,
    label: "Confirm password*",
    validator: null,
    className: "sign_up_input-long",
  },
];
