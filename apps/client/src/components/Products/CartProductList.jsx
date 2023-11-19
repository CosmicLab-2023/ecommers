import React from "react";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

function CartProductList() {
  const cartProducts = useSelector((state) => state.cart.products);
  return (
    <div className="w-full flex flex-col  gap-2 h-full">
      {cartProducts.length ? (
        cartProducts.map((product, ind) => (
          <CartCard key={ind} product={product} />
        ))
      ) : (
        <div className="h-full flex flex-col justify-center items-center ">
          <div className="text-2xl font-bold">Empty Cart</div>
        </div>
      )}
    </div>
  );
}

export default CartProductList;
