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

export const SETTINGS = [
  {
    text: "Profile",
    action: (callback?: VoidFunction) => {
      callback && callback();
    },
  },
  {
    text: "Admin panel",
    action: (callback?: VoidFunction) => {
      callback && callback();
    },
  },
  {
    text: "Log out",
    action: (callback?: VoidFunction) => {
      callback && callback();
    },
  },
];
