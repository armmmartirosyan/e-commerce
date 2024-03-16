import { account } from "providers/account-provider";
import { AddUpdateCartItemDTO, Product } from "types/product-types";

export function sortProducts(
  products: Product[],
  sort: keyof Product
): Product[] {
  if (!sort) return products;

  let sortableProducts = [...products];

  return sortableProducts.sort((a, b) => {
    if (typeof a[sort] === "number" && typeof b[sort] === "number") {
      return (a[sort] as number) - (b[sort] as number);
    }

    return ("" + a[sort]).localeCompare("" + b[sort]);
  });
}

export function getAddCartObject(
  product: Product,
  quantity: number
): AddUpdateCartItemDTO {
  const { id: userId } = account.getUserInfoFromToken();

  return {
    productId: product.id,
    productTitle: product.title,
    productPrice: product.price,
    quantity: quantity + 1,
    userId,
  };
}
