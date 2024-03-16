import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { KEYS_FOR_SORT } from "constants/shared-constants";
import { SortDropdownProps } from "types/component-types";

export function SortDropdown({ sort, onSortChange }: SortDropdownProps) {
  return (
    <FormControl style={{ width: "200px" }}>
      <InputLabel id="sort-select-label">Sort</InputLabel>
      <Select
        value={sort}
        onChange={onSortChange}
        labelId="sort-select-label"
        id="sort-select"
        label="Sort"
      >
        {KEYS_FOR_SORT.map((sort, index) => (
          <MenuItem value={sort.Value} key={sort.Value}>
            {sort.Label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
