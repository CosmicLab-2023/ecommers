import React from "react";
import Profile from "./Profile";
import NavLink from "./NavLink";
import SearchForm from "./SearchForm";
import Link from "next/link";
import Cart from "./Cart";
import Theme from "./Theme";

function Navbar() {
  return (
    <header className="sticky z-10  top-0 w-full bg-slate-100 dark:bg-slate-900">
      <nav className="w-full max-w-4xl mx-auto p-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Link href="/" className="text-2xl font-bold">
            LOGO
          </Link>

          <SearchForm />
        </div>
        <div className="flex md:flex-row-reverse gap-2 items-center">
          <div className="flex gap-2 items-center">
            <Theme />
            <Cart />
            <Profile />
          </div>
          <NavLink>
            <Link href={"/shop"}>Shop</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
