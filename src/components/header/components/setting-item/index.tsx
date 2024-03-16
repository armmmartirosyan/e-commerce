import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React from "react";
import { HeaderSettingsItemProps } from "types/component-types";

export default function SettingsItem({
  text,
  href,
  action,
  allow,
  extraFunction,
}: HeaderSettingsItemProps) {
  if (!allow()) {
    return null;
  }

  return (
    <>
      {href && (
        <MenuItem>
          <Typography
            component="a"
            href={href}
            textAlign="center"
            sx={{ color: "black" }}
          >
            {text}
          </Typography>
        </MenuItem>
      )}

      {action && (
        <MenuItem onClick={() => action(extraFunction)} sx={{ color: "black" }}>
          <Typography textAlign="center">{text}</Typography>
        </MenuItem>
      )}
    </>
  );
}
