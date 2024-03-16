import { Box, Button, TableCell, TableRow, TextField } from "@mui/material";
import React, { memo, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppDispatch } from "store/configure-store";
import { reomoveCartItem } from "store/cart/cart-thunks";
import { CartItemProps } from "types/component-types";

const rowSx = { "&:last-child td, &:last-child th": { border: 0 } };
const quantityCellSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  minHeight: "90px",
};

export default memo(function ({ item, isLoading }: CartItemProps) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleRemoveFromCart = () => {
    dispatch(reomoveCartItem(item.id));
  };

  return (
    <TableRow key={item.id} sx={rowSx}>
      <TableCell align="center" component="th" scope="row">
        {item.id}
      </TableCell>
      <TableCell align="center">{item.productTitle}</TableCell>
      <TableCell>
        <Box sx={quantityCellSx}>
          <Button size="small" onClick={handleDecrement}>
            -
          </Button>
          <TextField
            type="text"
            disabled
            value={quantity}
            onChange={() => {}}
            sx={{ width: "50px" }}
          />
          <Button size="small" onClick={handleIncrement}>
            +
          </Button>
        </Box>
      </TableCell>
      <TableCell align="center">{quantity * item.productPrice}</TableCell>
      <TableCell align="center">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <DeleteIcon
            sx={{ cursor: "pointer" }}
            onClick={handleRemoveFromCart}
          />
        )}
      </TableCell>
    </TableRow>
  );
});
