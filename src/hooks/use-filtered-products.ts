import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  productsDataSelector,
  productsMinPriceSelector,
  productsMaxPriceSelector,
  productsSearchSelector,
} from "store/products/products-selectors";
import { Product } from "types/product-types";
import {
  filterByMaxPrice,
  filterByMinPrice,
  filterByStringField,
  filterProducts,
} from "utils/filter-utils";

export default function useFilteredProducts(): Product[] {
  const products = useSelector(productsDataSelector);
  const search = useSelector(productsSearchSelector);
  const minPrice = useSelector(productsMinPriceSelector);
  const maxPrice = useSelector(productsMaxPriceSelector);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(
    (products || []) as Product[]
  );

  useEffect(() => {
    if (products && !isEmpty(products)) {
      const filters = [
        (product: Product) => filterByStringField(product, search, "title"),
        (product: Product) => filterByMinPrice(product, +minPrice),
        (product: Product) => filterByMaxPrice(product, +maxPrice),
      ];

      const filteredProductsList = filterProducts(products, filters);

      setFilteredProducts(filteredProductsList);
    }
  }, [products, search, minPrice, maxPrice]);

  return filteredProducts;
}
