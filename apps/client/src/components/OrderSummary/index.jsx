"use client";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

function OrderSummary() {
  const tax = 0;
  const cartProducts = useSelector((state) => state.cart.products);
  const orderSubtotal = useMemo(() => {
    if (cartProducts?.length) {
      let total = 0;
      cartProducts.forEach((product) => {
        total += product?.last_price * product?.amount ?? 1;
      });
      return total;
    }
    return 0;
  }, [cartProducts]);
  return (
    <div className="w-full flex flex-col gap-2 rounded  shadow dark:bg-slate-900">
      <div className="px-2 py-4 bg-slate-100 dark:bg-slate-800">
        <div className="text-xl font-bold">Order Summary</div>
      </div>
      <div className="px-2 py-4  font-light">
        Shipping and additional costs are calculated based on values you have
        entered.
      </div>
      <ul className="p-2  flex flex-col gap-1">
        <li className="py-4 px-2 flex justify-between items-center">
          <div className="font-extrabold">Order Subtotal </div>
          <div>{orderSubtotal} ETB</div>
        </li>
        <li className="py-4 px-2 flex justify-between items-center">
          <div className="font-extrabold">Tax </div>
          <div>{tax} ETB</div>
        </li>
        <li className="py-4 px-2 flex justify-between items-center">
          <div className="font-extrabold">Total </div>
          <div className="text-2xl font-extrabold">
            {orderSubtotal + tax} ETB
          </div>
        </li>
      </ul>
    </div>
  );
}

export default OrderSummary;
