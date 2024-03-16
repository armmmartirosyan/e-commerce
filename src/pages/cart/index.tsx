import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import requireAuth from "HOCs/require-auth";
import CartItem from "components/cart-item";
import Loading from "components/loading";
import {
  cartListLoadingSelector,
  removeFromCartLoadingSelector,
} from "store/cart/cart-selectors";
import { addOrderLoadingSelector } from "store/orders/orders-selectors";
import useCartState from "hooks/use-cart-state";

const wrapperBoxSx = {
  marginTop: "50px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const tableSx = { minWidth: 650, maxWidth: "70%", margin: "30px 0" };

function Cart() {
  const isLoadingGetCartList = useSelector(cartListLoadingSelector);
  const isLoadingAddOrder = useSelector(addOrderLoadingSelector);
  const removingLoadingId = useSelector(removeFromCartLoadingSelector);

  const { cartList, onCheckout } = useCartState();

  return (
    <>
      {cartList && (
        <Box sx={wrapperBoxSx}>
          <Typography variant="h5">Cart</Typography>
          <Table sx={tableSx}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Product name</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Total price(AMD)</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartList.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  item={cartItem}
                  isLoading={
                    !isLoadingAddOrder && cartItem.id === removingLoadingId
                  }
                />
              ))}
            </TableBody>
          </Table>

          {!isEmpty(cartList) && (
            <Button variant="contained" onClick={onCheckout}>
              Checkout
            </Button>
          )}
        </Box>
      )}

      {(isLoadingGetCartList || isLoadingAddOrder) && <Loading />}
    </>
  );
}

export default requireAuth(Cart);
