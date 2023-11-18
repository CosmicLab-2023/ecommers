"use client";
import React from "react";
import ProductAmountSetter from "./ProductAmountSetter";
import ProductAddToCartBtn from "./ProductAddToCartBtn";

function ProductAddToCartAmountBtn({ product }) {
  return (
    <div className="flex flex-nowrap w-full gap-4">
      <ProductAmountSetter product={product} />
      <ProductAddToCartBtn product={product} />
    </div>
  );
}

export default ProductAddToCartAmountBtn;
