import { account } from "providers/account-provider";
import store from "store/configure-store";
import { HeaderSetting } from "types/component-types";
import { USER_ROLES } from "./shared-constants";

export const PAGES = [
  {
    text: "Product list",
    url: "/product-list",
  },
  {
    text: "Cart",
    url: "/cart",
  },
  {
    text: "Orders",
    url: "/orders",
  },
];

export const SETTINGS: HeaderSetting[] = [
  {
    text: "Profile",
    href: "/profile",
    action: null,
    allow: () => true,
  },
  {
    text: "Admin panel",
    href: "/admin-panel",
    action: null,
    allow: () =>
      store.getState().auth.currentUser.data?.role === USER_ROLES.ADMIN,
  },
  {
    text: "Sign out",
    href: "",
    action: (callback?: VoidFunction) => {
      account.signOut();
      callback && callback();
    },
    allow: () => true,
  },
];
