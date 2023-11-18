"use client";
import { removeFromCart } from "@/libs/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { host } from "../../../host.config";
import ProductAmountSetter from "../Products/ProductAmountSetter";
function CartCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full p-2 rounded flex gap-2 shadow dark:bg-slate-900">
      <Link href={`/products/${product?.slug}`}>
        <figure className="rounder">
          <Image
            className="h-32 w-32 object-cover"
            src={`${host}${
              product?.thumbnail?.data?.attributes?.url ??
              product?.thumbnail?.url
            }`}
            width={400}
            height={400}
            alt=""
          />
        </figure>
      </Link>

      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <Link
            className="text-lg font-bold"
            href={`/products/${product?.slug}`}
          >
            {product?.title}
          </Link>
          <button onClick={() => dispatch(removeFromCart(product.id))}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <del>{product?.regular_price} ETB</del>
            <div>{product?.last_price} ETB</div>
          </div>
        </div>
        <ProductAmountSetter product={product} />
      </div>
    </div>
  );
}

export default CartCard;
