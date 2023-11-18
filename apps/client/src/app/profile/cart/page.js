"use client";
import CartCard from "@/components/Cards/CartCard";
import OrderSummary from "@/components/OrderSummary";
import { useSelector } from "react-redux";

function Page() {
  const cartProducts = useSelector((state) => state.cart.products);
  return (
    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-2">
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
      <div className="w-full md:max-w-sm lg:max-w-none xl:max-w-sm">
        <OrderSummary />
      </div>
    </div>
  );
}

export default Page;
