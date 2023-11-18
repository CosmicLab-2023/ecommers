"user client";
import Image from "next/image";
import Link from "next/link";
import { host } from "../../../host.config";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleCartProduct, isInCart } from "@/libs/features/cartSlice";
import { useMemo } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { toggleWishlistProduct } from "@/libs/features/wishlistSlice";
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const isInCart = useMemo(() => {
    return !!cartProducts?.find((prt) => prt.id === product.id);
  }, [cartProducts, product.id]);

  const wishlistProducts = useSelector((state) => state.wishlist.products);
  const isInWishlist = useMemo(() => {
    return !!wishlistProducts?.find((prt) => prt === product.id);
  }, [wishlistProducts, product.id]);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  return (
    <div className="w-full p-2 rounded-[1rem] flex flex-col gap-2 shadow dark:bg-slate-900">
      <div className="relative">
        {user && token && (
          <button
            onClick={() => dispatch(toggleWishlistProduct(product.id))}
            className="absolute top-1 right-1 flex btn-icon p-1"
          >
            {isInWishlist ? (
              <MdFavorite className="text-red-500" size={30} />
            ) : (
              <MdFavoriteBorder className="text-red-500" size={30} />
            )}
          </button>
        )}

        <Link href={`/products/${product?.attributes?.slug}`}>
          <figure className="">
            {product?.attributes?.thumbnail && (
              <Image
                className="h-64 w-full object-cover rounded-[0.5rem]"
                src={`${host}${product?.attributes?.thumbnail?.data?.attributes?.url}`}
                width={400}
                height={600}
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
        <button
          onClick={() =>
            dispatch(
              toggleCartProduct({ id: product.id, ...product?.attributes })
            )
          }
          className="btn py-1 w-full"
        >
          {!isInCart ? "Add to cart" : "Remove from cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
