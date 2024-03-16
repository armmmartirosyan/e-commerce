import React, { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "store/configure-store";
import { setProductsGlobalState } from "store/products/products-slice";
import { validators } from "utils/validators";

const wrapperSx = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

export default function PriceFilters() {
  const dispatch = useAppDispatch();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
    setMin(event.target.value);
  };

  const handleChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
    setMax(event.target.value);
  };

  const handleBlurMin = () => {
    if (!validators.validPrice(min)) {
      dispatch(setProductsGlobalState({ minPrice: "" }));
      return setMin("");
    }

    if (max && +min > +max) {
      dispatch(setProductsGlobalState({ minPrice: max }));
      return setMin(max);
    }

    dispatch(setProductsGlobalState({ minPrice: min }));
  };

  const handleBlurMax = () => {
    if (!validators.validPrice(max)) {
      dispatch(setProductsGlobalState({ maxPrice: "" }));
      return setMax("");
    }

    if (min && +min > +max) {
      dispatch(setProductsGlobalState({ maxPrice: min }));
      return setMax(min);
    }

    dispatch(setProductsGlobalState({ maxPrice: max }));
  };

  return (
    <Box sx={wrapperSx}>
      <TextField
        variant="outlined"
        label="Min price"
        value={min}
        onChange={handleChangeMin}
        onBlur={handleBlurMin}
      />
      <TextField
        variant="outlined"
        label="Max price"
        value={max}
        onChange={handleChangeMax}
        onBlur={handleBlurMax}
      />
    </Box>
  );
}
