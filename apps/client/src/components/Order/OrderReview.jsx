"use client";
import OrderSummary from "@/components/Order/OrderSummary";
import CartProductList from "@/components/Products/CartProductList";
import React from "react";

function OrderReview() {
  return (
    <div className="w-full md:max-w-md flex flex-col gap-4">
      <OrderSummary />
      <CartProductList />
    </div>
  );
}

export default OrderReview;
