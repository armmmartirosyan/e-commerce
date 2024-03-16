import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import requireAuth from "HOCs/require-auth";
import Loading from "components/loading";
import useAddToCart from "hooks/use-add-to-cart";
import { useAppDispatch } from "store/configure-store";
import {
  productDetailsDataSelector,
  productDetailsErrorSelector,
  productDetailsLoadingSelector,
} from "store/products/products-selectors";
import { resetProductDetailsState } from "store/products/products-slice";
import { getProductDetails } from "store/products/products-thunks";

function ProductDetails() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const productDetails = useSelector(productDetailsDataSelector);
  const isLoading = useSelector(productDetailsLoadingSelector);
  const error = useSelector(productDetailsErrorSelector);

  const onAddOrUpdateCard = useAddToCart();

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }

    return () => {
      dispatch(resetProductDetailsState());
    };
  }, [id]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Box sx={{ padding: "20px" }}>
      {!isLoading && !error && productDetails && (
        <Box>
          <Typography
            variant="h5"
            color="black"
            align="center"
            marginBottom={2}
          >
            {productDetails.title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "50px",
              paddingX: "150px",
            }}
          >
            <img
              src={productDetails.imageUrl}
              alt="Product"
              style={{
                width: "400px",
                height: "400px",
              }}
            />

            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ width: "fit-content", marginBottom: "20px" }}
              >
                {productDetails.description}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ width: "fit-content", marginBottom: "20px" }}
              >
                Price: {productDetails.price}AMD
              </Typography>

              {productDetails.count > 0 && (
                <Button
                  size="small"
                  onClick={() => onAddOrUpdateCard(productDetails)}
                >
                  Add to cart
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      )}

      {isLoading && <Loading />}
    </Box>
  );
}

export default requireAuth(ProductDetails);
