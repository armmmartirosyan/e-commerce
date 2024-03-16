import { useEffect } from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { cartListDataSelector } from "store/cart/cart-selectors";
import { getCart, reomoveCartItem } from "store/cart/cart-thunks";
import { useAppDispatch } from "store/configure-store";
import { addOrder } from "store/orders/orders-thunks";
import { account } from "providers/account-provider";
import { getProducts } from "store/products/products-thunks";
import { Product } from "types/product-types";
import { setAddOrderLoading } from "store/orders/orders-slice";

export default function useCartState() {
  const dispatch = useAppDispatch();
  const cartList = useSelector(cartListDataSelector);

  const handleCheckout = async () => {
    if (!cartList) return;
    const { id } = account.getUserInfoFromToken();

    dispatch(setAddOrderLoading(true));

    const { payload: products } = await dispatch(getProducts());

    if (!products || isEmpty(products)) {
      return dispatch(setAddOrderLoading(false));
    }

    const productIds = cartList.map((item) => item.productId);
    const orderingProducts = products.filter((prodiuct: Product) =>
      productIds.includes(prodiuct.id)
    );

    dispatch(
      addOrder({
        items: orderingProducts,
        userId: id,
        date: new Date().toDateString(),
      })
    );

    cartList?.forEach((item) => {
      dispatch(reomoveCartItem(item.id));
    });
  };

  useEffect(() => {
    const { id } = account.getUserInfoFromToken();

    dispatch(getCart(id));
  }, []);

  return {
    cartList,
    onCheckout: handleCheckout,
  };
}
