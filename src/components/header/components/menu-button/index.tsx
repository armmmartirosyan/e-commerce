import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderMenuItemProps } from "types/component-types";

export default function MenuButton({
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
    <Button
      key={text}
      onClick={handleClick}
      sx={{ my: 2, color: "white", display: "block" }}
    >
      {text}
    </Button>
  );
}
