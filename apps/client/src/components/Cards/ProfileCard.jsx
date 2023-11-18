"use client";
import handleLogout from "@/libs/client/handleLogout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";

function ProfileCard() {
  const [show, setShow] = useState();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className=" w-full md:min-w-[24rem] md:max-w-md h-full">
      <div className="w-full bg-slate-100 dark:bg-slate-900 flex gap-2 items-center md:hidden p-2">
        <button
          onClick={() => setShow((prev) => !prev)}
          className={`flex btn-icon`}
        >
          {show ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenuFold size={20} />
          )}
        </button>
        <div>Profile</div>
      </div>
      <div className="relative w-full h-full">
        <div
          className={`${
            show ? "flex shadow-md drop-shadow rounded" : "hidden"
          } w-full  absolute md:static md:flex flex-col gap-2  z-[50]  bg-slate-100 dark:bg-slate-900 `}
        >
          {user && (
            <Link href={"/profile"} className="">
              <figure className="p-2 flex flex-col gap-2 items-center">
                <Image
                  src=""
                  width={300}
                  height={300}
                  alt="user avatar"
                  className="rounded-full overflow-hidden bg-slate-500 w-32 h-32"
                />
              </figure>
              <div className="text-center">
                <div>{user.username}</div>
                <small>{user.email}</small>
              </div>
            </Link>
          )}

          <ul className="flex flex-col gap-1 bg-slate-100 dark:bg-slate-900">
            <li className="py-4 px-4 hover:bg-slate-200 dark:hover:bg-slate-700">
              <Link href={"/profile/account"}>Account</Link>
            </li>
            <li className="py-4 px-4 hover:bg-slate-200 dark:hover:bg-slate-700">
              <Link href={"/profile/cart"}>Cart</Link>
            </li>
            <li className="py-4 px-4 hover:bg-slate-200 dark:hover:bg-slate-700">
              <Link href={"/profile/orders"}>Orders</Link>
            </li>
            <li className="py-4 px-4 hover:bg-slate-200 dark:hover:bg-slate-700">
              <Link href={"/profile/wishlist"}>Wishlist</Link>
            </li>
            <li className="py-4 px-4 hover:bg-slate-200 dark:hover:bg-slate-700">
              <button
                onClick={() =>
                  handleLogout(dispatch, () =>
                    router.push("auth/login?next=/profile")
                  )
                }
                className="w-full text-start"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
