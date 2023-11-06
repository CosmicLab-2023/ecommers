"use client";
import handleLogout from "@/libs/client/handleLogout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const [show, setShow] = useState();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const router = useRouter();
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
      {show && (
        <div
          onClick={() => setShow(false)}
          className={`fixed inset-0 bg-transparent `}
        ></div>
      )}
      <div
        className={`absolute w-48 right-0 gap-2 bg-slate-100 dark:bg-slate-900 drop-shadow	${
          show ? "flex flex-col " : "hidden"
        }`}
      >
        {user && (
          <Link href={"/profile"} className="">
            <figure className="p-2 flex gap-2 items-center">
              <Image
                src=""
                width={100}
                height={100}
                alt="user avatar"
                className="rounded-full overflow-hidden bg-slate-500 w-10 h-10"
              />
              <div>
                <div>{user.username}</div>
                <small>{user.email}</small>
              </div>
            </figure>
          </Link>
        )}

        <ul className="flex flex-col gap-1">
          {token && user ? (
            <>
              <li className="py-1 px-4 hover:bg-slate-200 dark:hover:bg-slate-700">
                <Link href={"/shop"}>Profiles</Link>
              </li>
              <li className="py-1 px-4 hover:bg-slate-200 dark:hover:bg-slate-700">
                <Link href={"/shop"}>Orders</Link>
              </li>
              <li className="py-1 px-4 hover:bg-slate-200 dark:hover:bg-slate-700">
                <Link href={"/shop"}>Wishlist</Link>
              </li>
              <li className="flex py-1 px-1">
                <button
                  onClick={() =>
                    handleLogout(dispatch, () => router.push("auth/login"))
                  }
                  className="w-full btn-primary  py-1"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="flex py-1 px-1">
              <Link href={"/auth/login"} className="w-full btn-primary py-1">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
