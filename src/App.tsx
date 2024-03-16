import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "pages/sign-in";
import ProductList from "pages/product-list";
import SignUp from "pages/sign-up";
import Profile from "pages/profile";
import ProductDetails from "pages/product-details";
import Cart from "pages/cart";
import Orders from "pages/orders";
import AdminPanel from "pages/admin-panel";
import { USER_ROLES } from "constants/shared-constants";
import { account } from "providers/account-provider";
import NotFound from "pages/not-found";

const App: FC = () => {
  const { role } = account.getUserInfoFromToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />

        {role === USER_ROLES.ADMIN && (
          <Route path="/admin-panel" element={<AdminPanel />} />
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
