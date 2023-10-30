"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";

function Cart() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-black/50 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`flex  duration-100 ease-in-out fixed z-20 top-0 right-0 pt-8 px-4  flex-col gap-0 bg-slate-100 dark:bg-slate-900  inset-y-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-y-auto ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <button
        onClick={() => setShow((prev) => !prev)}
        className={`flex btn-icon  ${show ? "fixed z-30 top-2 right-4" : ""}`}
      >
        {show ? <AiOutlineClose size={20}  /> : <BsCartCheck size={20} />}
      </button>
    </div>
  );
}

export default Cart;
