"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import CartCard from "../Cards/CartCard";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
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
        <div className="h-[calc(100%_-_100px)] overflow-y-auto ">
          {cartProducts.length ? (
            cartProducts.map((product, ind) => (
              <CartCard key={ind} product={product} />
            ))
          ) : (
            <div>Empty</div>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full my-2">
          <button className="btn py-1 w-full">Checkout</button>
          <button className="btn py-1 w-full">View Cart</button>
        </div>
      </div>
      <button
        onClick={() => setShow((prev) => !prev)}
        className={`flex btn-icon  ${show ? "fixed z-30 top-2 right-4" : ""}`}
      >
        {show ? <AiOutlineClose size={20} /> : <BsCartCheck size={20} />}
      </button>
    </div>
  );
}

export default Cart;
