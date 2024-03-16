import React, { FC, useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/configure-store";
import { validators } from "utils/validators";
import { AdminPanelContext } from "contexts";
import { AdminPanelContextValue } from "types/shared-types";
import { addProduct } from "store/products/products-thunks";
import { ADD_PRODUCT_SUCCESS } from "constants/shared-constants";
import { addProductLoadingSelector } from "store/products/products-selectors";

const withAdminPanelContext = (WrappedComponent: FC) => {
  return (props: any) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(addProductLoadingSelector);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [count, setCount] = useState("");
    const [price, setPrice] = useState("");

    const isDisabled = useMemo(() => {
      return !title || !description || !imageUrl || !count || !price;
    }, [title, description, imageUrl, count, price]);

    const handlePriceBlur = () => {
      if (!validators.validPrice(price)) {
        setPrice("");
      }
    };

    const resetState = useCallback(() => {
      setTitle("");
      setDescription("");
      setImageUrl("");
      setCount("");
      setPrice("");
    }, []);

    const handleAddProduct = useCallback(async () => {
      if (isDisabled) return;

      const { payload } = await dispatch(
        addProduct({
          title,
          description,
          imageUrl,
          count: +count,
          price: +price,
        })
      );

      if (payload === true) {
        toast.success(ADD_PRODUCT_SUCCESS);
        resetState();
      }
    }, [
      isDisabled,
      dispatch,
      title,
      description,
      imageUrl,
      count,
      price,
      resetState,
    ]);

    const contextValue: AdminPanelContextValue = {
      title: [title, setTitle, undefined],
      description: [description, setDescription, undefined],
      imageUrl: [imageUrl, setImageUrl, undefined],
      count: [count, setCount, undefined],
      price: [price, setPrice, handlePriceBlur],
      action: [handleAddProduct, isDisabled],
    };

    return (
      <AdminPanelContext.Provider value={contextValue}>
        <WrappedComponent {...props} isLoading={isLoading} />
      </AdminPanelContext.Provider>
    );
  };
};

export default withAdminPanelContext;
