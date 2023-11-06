import Image from "next/image";
import Link from "next/link";
import React from "react";

function CartCard({ product }) {
  return (
    <div className="w-full p-2 rounded flex gap-2 shadow dark:bg-slate-900">
      <Link href={`/products/${product.slug}`}>
        <figure className="rounder">
          <Image
            className="h-24 w-24 object-cover"
            src=""
            width={400}
            height={400}
            alt=""
          />
        </figure>
      </Link>

      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div>Like</div>
          <div>Cart</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div>Price 1</div>
            <div>Price 2</div>
          </div>
          <div>Rating</div>
        </div>
        <Link href={`/products/${product.slug}`}>{product.title}</Link>
      </div>
    </div>
  );
}

export default CartCard;
