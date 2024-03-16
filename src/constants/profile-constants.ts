import { validators } from "utils/validators";

export const PROFILE_PAGE_FIELDS = [
  {
    label: "First Name",
    keyName: "firstName",
    validator: validators.allowTypeNotNumbAndSymExceptDash,
  },
  {
    label: "Last Name",
    keyName: "lastName",
    validator: validators.allowTypeNotNumbAndSymExceptDash,
  },
  { label: "Email", keyName: "email", validator: undefined },
  {
    label: "Phone number",
    keyName: "phone",
    validator: validators.allowPhoneNumberType,
  },
  { label: "Image URL", keyName: "imageUrl", validator: undefined },
];
