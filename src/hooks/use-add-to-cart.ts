import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addOrUpdateErrorSelector,
  addOrUpdateSuccessSelector,
} from "store/cart/cart-selectors";
import {
  ADD_OR_UPDATE_CARD_SUCCESS,
  ALL_ITEMS_ADDED_ERROR,
} from "constants/shared-constants";
import { resetAddOrUpdate, setAddOrUpdateError } from "store/cart/cart-slice";
import { addToCart, getCartItem, updateCartItem } from "store/cart/cart-thunks";
import { useAppDispatch } from "store/configure-store";
import { Product } from "types/product-types";
import { getAddCartObject } from "utils/shared-utils";

export default function useAddToCart() {
  const dispatch = useAppDispatch();

  const success = useSelector(addOrUpdateSuccessSelector);
  const error = useSelector(addOrUpdateErrorSelector);

  useEffect(() => {
    if (success) {
      toast.success(ADD_OR_UPDATE_CARD_SUCCESS);
      dispatch(resetAddOrUpdate());
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetAddOrUpdate());
    }
  }, [error]);

  return async (product: Product) => {
    const { payload } = await dispatch(getCartItem(product.id));

    if (!payload) {
      return dispatch(addToCart(getAddCartObject(product, 1)));
    }

    const { quantity, id } = payload;

    if (quantity + 1 <= product.count) {
      return dispatch(
        updateCartItem({
          id,
          body: getAddCartObject(product, quantity),
        })
      );
    }

    dispatch(setAddOrUpdateError(ALL_ITEMS_ADDED_ERROR));
  };
}
