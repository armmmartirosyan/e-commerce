import { SelectChangeEvent } from "@mui/material/Select";
import { useMemo, useState } from "react";
import { Product } from "types/product-types";
import { UseSortProductsReturnType } from "types/hook-types";
import { sortProducts } from "utils/shared-utils";

export default function useSortProducts(
  products: Product[]
): UseSortProductsReturnType {
  const [sort, setSort] = useState<keyof Product | "">("");

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as keyof Product);
  };

  const sortedProducts = useMemo(() => {
    if (!sort) {
      return products;
    }

    return sortProducts(products, sort);
  }, [products, sort]);

  return {
    sort,
    sortedProducts,
    onSortChange: handleChangeSort,
  };
}
