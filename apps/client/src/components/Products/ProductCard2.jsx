"user client";
import Image from "next/image";
import Link from "next/link";
import { host } from "../../../host.config";
import ProductAddToCartBtn from "./AddToCartBtn";
import ProductAddToWishlistBtn from "./ProductAddToWishlistBtn";
function ProductCard2({ product }) {
  return (
    <div className="w-full h-full p-2 rounded-[2rem] flex flex-col gap-2 shadow dark:bg-slate-950">
      <div className="relative h-full w-full">
        <div className="absolute  top-1 right-1 ">
          <ProductAddToWishlistBtn product={product} />
        </div>
        <Link
          className="h-full"
          href={`/products/${product?.attributes?.slug}`}
        >
          <figure className="h-full">
            {product?.attributes?.thumbnail && (
              <Image
                className="h-full w-full object-cover rounded-3xl"
                src={`${host}${product?.attributes?.thumbnail?.data?.attributes?.url}`}
                width={400}
                height={600}
                alt=""
              />
            )}
          </figure>
        </Link>
        <div className="absolute w-full flex flex-col gap-2 bottom-0 text-white bg-black/20 p-3 rounded-b-3xl">
          <div>category</div>
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
          <ProductAddToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard2;
