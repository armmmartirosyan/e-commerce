import React from "react";
import Box from "@mui/material/Box";
import ProductCard from "components/product-card";
import { OrderItemProps } from "types/component-types";
import Typography from "@mui/material/Typography";
import moment from "moment";

export default function OrderItem({ order }: OrderItemProps) {
  return (
    <Box sx={{ padding: "50px", borderTop: "1px solid black" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h6">Order: {order.id}</Typography>
        <Typography variant="h6">
          Order Date: {moment(order.date).format("LL")}
        </Typography>
      </Box>

      <Typography variant="h6">Products</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {order.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
}
