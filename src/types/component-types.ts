import { SelectChangeEvent } from "@mui/material/Select";
import { CartItem, Order, Product } from "./product-types";
import { Validator } from "./shared-types";
import { SignUpLocalUser } from "./user-types";
import { UseSortProductsReturnType } from "./hook-types";

export type GenericOnlyDisabledPros = { disabled?: boolean };

export type WithHeaderLayoutProps = { children: any };

export type HeaderMenuItemProps = {
  text: string;
  url: string;
  extraAction?: VoidFunction;
};

export type HeaderSetting = {
  text: string;
  href: string;
  action: ((callback: VoidFunction) => void) | null;
  allow: () => boolean;
};

export type HeaderSettingsItemProps = HeaderSetting & {
  extraFunction: VoidFunction;
};

export type SignUpInputProps = {
  inputType: string;
  keyName: keyof SignUpLocalUser;
  label: string;
  validator: Validator | null;
  className: string;
  disabled?: boolean;
};

export type ProductCardProps = {
  product: Product;
  onAddToCard?: (product: Product) => Promise<any>;
};

export type OrderItemProps = { order: Order };

export type CartItemProps = { item: CartItem; isLoading?: boolean };

export type InputProps = {
  keyName: string;
  label: string;
  validator?: (value: string) => boolean;
};

export type SortDropdownProps = {
  sort: string;
  onSortChange: (event: SelectChangeEvent) => void;
};

export type FiltersAndSortProps = Omit<
  UseSortProductsReturnType,
  "sortedProducts"
>;
