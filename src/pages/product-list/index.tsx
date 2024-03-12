import requireAuth from "HOCs/RequireAuth";
import { account } from "providers/account-provider";
import React from "react";

function ProductList() {
  return (
    <div>
      <button
        onClick={() => {
          account.signOut();
        }}
      >
        log out
      </button>
    </div>
  );
}

export default requireAuth(ProductList);
