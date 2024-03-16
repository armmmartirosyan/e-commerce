import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAppDispatch } from "store/configure-store";
import requireAuth from "HOCs/require-auth";
import Loading from "components/loading";
import OrderItem from "components/order-item";
import {
  getOrdersDataSelector,
  getOrdersErrorSelector,
  getOrdersLoadingSelector,
} from "store/orders/orders-selectors";
import { getOrders } from "store/orders/orders-thunks";
import { account } from "providers/account-provider";

function Orders() {
  const dispatch = useAppDispatch();
  const orders = useSelector(getOrdersDataSelector);
  const loading = useSelector(getOrdersLoadingSelector);
  const error = useSelector(getOrdersErrorSelector);

  useEffect(() => {
    const { id } = account.getUserInfoFromToken();

    dispatch(getOrders(id));
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Box>
      <Typography align="center" marginY={4} variant="h5">
        Orders
      </Typography>

      {!loading && orders && (
        <Box>
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </Box>
      )}

      {loading && <Loading />}
    </Box>
  );
}

export default requireAuth(Orders);
