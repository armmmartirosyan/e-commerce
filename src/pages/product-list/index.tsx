import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import requireAuth from "HOCs/require-auth";
import ProductCard from "components/product-card";
import {
  productsErrorSelector,
  productsLoadingSelector,
} from "store/products/products-selectors";
import { useAppDispatch } from "store/configure-store";
import { getProducts } from "store/products/products-thunks";
import useFilteredProducts from "hooks/use-filtered-products";
import useSortProducts from "hooks/use-sort-products";
import Loading from "components/loading";
import FiltersAndSort from "./component/filters-and-sort";
import { resetProductsListState } from "store/products/products-slice";
import useAddToCart from "hooks/use-add-to-cart";

const productListSx = {
  display: "flex",
  gap: "25px",
  flexWrap: "wrap",
  justifyContent: "center",
};

function ProductList() {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(productsLoadingSelector);
  const error = useSelector(productsErrorSelector);

  const products = useFilteredProducts();
  const { sortedProducts, ...sortRest } = useSortProducts(products);

  const onAddToCard = useAddToCart();

  useEffect(() => {
    dispatch(getProducts());

    return () => {
      dispatch(resetProductsListState());
    };
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Box sx={{ padding: "20px" }}>
      {!isLoading && !error && (
        <>
          <Typography variant="h6" align="center" marginBottom={4}>
            Products list
          </Typography>
          <FiltersAndSort {...sortRest} />
          <Box sx={productListSx}>
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCard={onAddToCard}
              />
            ))}
          </Box>
        </>
      )}

      {isLoading && <Loading />}
    </Box>
  );
}

export default requireAuth(ProductList);
