"user client";
import Image from "next/image";
import Link from "next/link";
import { host } from "../../../host.config";
import ProductAddToCartBtn from "./AddToCartBtn";
import ProductAddToWishlistBtn from "./ProductAddToWishlistBtn";
function ProductCard({ product }) {
  return (
    <div className="w-full h-full p-2 rounded-[1rem] flex flex-col gap-2 shadow ">
      <div className="relative h-full">
        <div className="absolute  top-1 right-1 ">
          <ProductAddToWishlistBtn product={product} />
        </div>

        <Link
          className="h-full w-full"
          href={`/products/${product?.attributes?.slug}`}
        >
          <figure className="h-full w-full">
            {product?.attributes?.thumbnail && (
              <Image
                className="h-full w-full object-cover rounded-[0.5rem]"
                src={`${host}${product?.attributes?.thumbnail?.data?.attributes?.url}`}
                width={800}
                height={1000}
                alt=""
              />
            )}
          </figure>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
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
  );
}

export default ProductCard;
