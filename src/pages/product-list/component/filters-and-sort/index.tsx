import Box from "@mui/material/Box";
import React from "react";
import Search from "components/search";
import { SortDropdown } from "components/sort-dropdown";
import { FiltersAndSortProps } from "types/component-types";
import PriceFilters from "../price-filters";

const wrapperSx = {
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export default function FiltersAndSort({
  sort,
  onSortChange,
}: FiltersAndSortProps) {
  return (
    <Box sx={wrapperSx}>
      <PriceFilters />
      <Search />
      <SortDropdown sort={sort} onSortChange={onSortChange} />
    </Box>
  );
}
