import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "pages/sign-in";
import ProductList from "pages/product-list";
import SignUp from "pages/sign-up";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
