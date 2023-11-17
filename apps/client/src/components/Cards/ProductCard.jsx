"user client";
import Image from "next/image";
import Link from "next/link";
import { host } from "../../../host.config";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleCartProduct, isInCart } from "@/libs/features/cartSlice";
import { useMemo } from "react";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const isInCart = useMemo(() => { 
    return !!cartProducts?.find((product) => product.id === product.id)
  }, [cartProducts])
  return (
    <div className="w-full p-2 rounded flex flex-col gap-2 shadow dark:bg-slate-900">
      <Link href={`/products/${product?.attributes?.slug}`}>
        <figure className="rounder">
          {product?.attributes?.thumbnail && (
            <Image
              className="h-64 w-full object-cover"
              src={`${host}${product?.attributes?.thumbnail?.data?.attributes?.url}`}
              width={400}
              height={600}
              alt=""
            />
          )}
        </figure>
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div>Like</div>
          <button
            onClick={() =>
              dispatch(
                toggleCartProduct({ id: product.id, ...product?.attributes })
              )
            }
          >
            Cart
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 font-bold text-xl">
            <del>{product?.attributes?.regular_price} ETB</del>
            <div>{product?.attributes?.last_price} ETB</div>
          </div>
          {/* <div>Rating</div> */}
        </div>
        <Link
          href={`/products/${product?.attributes?.slug}`}
          className="font-bold text-md"
        >
          {product?.attributes?.title}
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
