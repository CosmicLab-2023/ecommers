"use client";
import OrderSummary from "@/components/Order/OrderSummary";
import CartCard from "@/components/Products/CartCard";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
function Page() {
  const cartProducts = useSelector((state) => state.cart.products);
  return (
    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-2">
      <div className="w-full">
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
        <div className="flex justify-between items-center">
          <Link href={"/shop"} className="flex items-center font-bold gap-2">
            <AiOutlineLeft size={25} className="" />
            <span>continue shopping</span>
          </Link>

          <Link href={"/checkout"} className="flex items-center font-bold gap-2">
            <span>process checkout</span>
            <AiOutlineRight size={25} className="" />
          </Link>
        </div>
      </div>

      <div className="w-full md:max-w-sm lg:max-w-none xl:max-w-sm">
        <OrderSummary />
      </div>
    </div>
  );
}

export default Page;
