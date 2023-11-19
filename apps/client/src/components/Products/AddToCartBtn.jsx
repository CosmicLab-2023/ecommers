"use client";

import { toggleCartProduct } from "@/libs/features/cartSlice";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
function AddToCartBtn({ product }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const isInCart = useMemo(() => {
    return !!cartProducts?.find((prt) => prt.id === product.id);
  }, [cartProducts, product.id]);

  return (
    <button
      onClick={() =>
        dispatch(toggleCartProduct({ ...product, ...product?.attributes }))
      }
      className="btn-primary h-full px-4 py-2 rounded-r-full rounded-l-full"
    >
      {!isInCart ? "Add to cart" : "Remove from cart"}
    </button>
  );
}
function UseClient({ Component, children, ...restProps }) {
  if (!!children) {
    return <AddToCartBtn {...restProps}>{children}</AddToCartBtn>;
  }
  return <AddToCartBtn {...restProps} />;
}

export default UseClient;
