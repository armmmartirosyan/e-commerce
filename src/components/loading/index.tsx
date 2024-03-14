import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./index.scss";

export default function Loading() {
  return (
    <div className="loading_wrapper">
      <CircularProgress />
    </div>
  );
}
