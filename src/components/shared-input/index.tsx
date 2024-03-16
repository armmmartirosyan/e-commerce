import TextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";

export default function SharedInput({ onChange, validator, ...rest }: any) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!validator) {
      onChange(event);
      return;
    }

    if (validator(event.target.value)) {
      onChange(event);
    }
  };

  return <TextField onChange={handleChange} {...rest} />;
}
