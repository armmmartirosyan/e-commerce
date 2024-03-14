import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderMenuItemProps } from "types/component-types";

export default function HeaderMenuItem({
  text,
  url,
  extraAction,
}: HeaderMenuItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);

    extraAction && extraAction();
  };

  return (
    <MenuItem onClick={handleClick}>
      <Typography textAlign="center">{text}</Typography>
    </MenuItem>
  );
}
