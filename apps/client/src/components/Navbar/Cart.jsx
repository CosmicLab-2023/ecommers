"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartCard from "../Cards/CartCard";

function Cart() {
  const [show, setShow] = useState(false);
  const cartProducts = useSelector((state) => state.cart.products);
  const orderSubtotal = useMemo(() => {
    if (cartProducts?.length) {
      let total = 0;
      cartProducts.forEach((product) => {
        total += product?.last_price;
      });
      return total;
    }
    return 0;
  }, [cartProducts]);
  return (
    <div>
      <div
        onClick={() => setShow(false)}
        className={`fixed inset-0 bg-black/50 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`flex  duration-100 ease-in-out fixed z-20 top-0 right-0 pt-12 px-4  flex-col gap-0 bg-slate-100 dark:bg-slate-900  inset-y-0 w-3/4 sm:w-1/2 md:w-1/3 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[calc(100%_-_180px)] overflow-y-auto flex flex-col gap-1 ">
          {cartProducts.length ? (
            cartProducts.map((product, ind) => (
              <CartCard key={ind} product={product} />
            ))
          ) : (
            <div className="h-full flex flex-col justify-center items-center">
              <div className="text-2xl font-bold">Empty Cart</div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full my-2">
          <div className="py-4 px-2 flex justify-between items-center">
            <div className="text-2xl font-extrabold">Order Subtotal </div>
            <div className="text-2xl font-extrabold">{orderSubtotal} ETB</div>
          </div>
          <Link href={"/profile/checkout"} className="btn-primary py-2 w-full">
            Checkout
          </Link>
          <Link href={"/profile/cart"} className="btn py-2 w-full">
            View Cart
          </Link>
        </div>
      </div>

      <div className="flex relative w-full">
        {cartProducts.length ? (
          <small className="absolute -top-3 left-4 py-[2px] px-2 bg-red-400 rounded-full">
            {cartProducts.length}
          </small>
        ) : (
          ""
        )}
        <button
          onClick={() => setShow((prev) => !prev)}
          className={`flex btn-icon  ${show ? "fixed z-30 top-2 right-4" : ""}`}
        >
          {show ? <AiOutlineClose size={20} /> : <BsCartCheck size={20} />}
        </button>
      </div>
    </div>
  );
}

export default Cart;
