import requireAuth from "HOCs/require-auth";
import { account } from "providers/account-provider";
import React from "react";

function ProductList() {
  return (
    <div>
      <button onClick={account.signOut}>log out</button>
    </div>
  );
}

export default requireAuth(ProductList);
