import React, { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import useDebounce from "hooks/use-debounce";
import { useAppDispatch } from "store/configure-store";
import { setProductsGlobalState } from "store/products/products-slice";

export default function Search() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const callDebounced = useDebounce((value: string) => {
    dispatch(setProductsGlobalState({ search: value }));
  }, 400);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearch(value);
    callDebounced(value);
  };

  return (
    <TextField
      variant="outlined"
      label="Search"
      value={search}
      onChange={handleChange}
    />
  );
}
