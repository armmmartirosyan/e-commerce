import Header from "components/header";
import React from "react";
import { WithHeaderLayoutProps } from "types/component-types";

export default function WithHeaderLayout({ children }: WithHeaderLayoutProps) {
  return (
    <div className="with_header_layout_wrapper">
      <Header />
      {children}
    </div>
  );
}
