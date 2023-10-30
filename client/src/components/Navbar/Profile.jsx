"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
function Profile() {
  const [show, setShow] = useState();
  return (
    <div className="relative">
      <div>
        <button
          onClick={() => setShow((prev) => !prev)}
          className="flex btn-icon"
        >
          <BsPerson size={20} />
        </button>
      </div>
      <div
        className={`absolute w-48 right-0 gap-2 bg-slate-100 dark:bg-slate-900 drop-shadow dark:border border-slate-600	${
          show ? "flex flex-col " : "hidden"
        }`}
      >
        <figure className="p-2 flex gap-2 items-center">
          <div className="rounded-full overflow-hidden bg-slate-500 w-10 h-10">
           I
          </div>
          <div>
            <div>User Name</div>
            <small>User Email</small>
          </div>
        </figure>

        <ul className="flex flex-col">
          <li className="py-1 px-2 hover:bg-slate-200 dark:hover:bg-slate-700">
            <Link href={"/shop"}></Link>
          </li>
          <li className="py-1 px-2 hover:bg-slate-200 dark:hover:bg-slate-700">
            <Link href={"/shop"}>Profiles</Link>
          </li>
          <li className="py-1 px-2 hover:bg-slate-200 dark:hover:bg-slate-700">
            <Link href={"/shop"}>Orders</Link>
          </li>
          <li className="py-1 px-2 hover:bg-slate-200 dark:hover:bg-slate-700">
            <Link href={"/shop"}>Wishlist</Link>
          </li>
          
          <li className="py-1 px-1">
            <Link href={"/login"} className="btn py-1">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
