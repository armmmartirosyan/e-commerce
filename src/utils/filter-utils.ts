import { isEmpty } from "lodash";
import { ProductFilterFunction } from "types/product-types";
import { Product } from "types/product-types";

export function filterByMinPrice(product: Product, minPrice: number): boolean {
  return !minPrice || product.price >= minPrice;
}

export function filterByMaxPrice(product: Product, maxPrice: number): boolean {
  return !maxPrice || product.price <= maxPrice;
}

export function filterByStringField(
  product: Product,
  value: string,
  field: keyof Product
): boolean {
  return (
    !value ||
    value
      .toLowerCase()
      .trim()
      .includes((product[field] as string).toLowerCase().trim()) ||
    (product[field] as string)
      .toLowerCase()
      .trim()
      .includes(value.toLowerCase().trim())
  );
}

export function filterProducts(
  products: Product[],
  filters: ProductFilterFunction[]
): Product[] {
  if (isEmpty(products) || isEmpty(filters)) return products;

  return products.filter((product) =>
    filters.every((filter) => {
      return filter(product);
    })
  );
}
