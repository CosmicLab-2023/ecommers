"user client";
import { toggleWishlistProduct } from "@/libs/features/wishlistSlice";
import { useMemo } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
function ProductAddToWishlistBtn({ product }) {
  const dispatch = useDispatch();
  const wishlistProducts = useSelector((state) => state.wishlist.products);
  const isInWishlist = useMemo(() => {
    return !!wishlistProducts?.find((prt) => prt === product.id);
  }, [wishlistProducts, product.id]);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  return user && token ? (
    <button
      onClick={() => dispatch(toggleWishlistProduct(product.id))}
      className="flex btn-icon p-1"
    >
      {isInWishlist ? (
        <MdFavorite className="text-red-500" size={30} />
      ) : (
        <MdFavoriteBorder className="text-red-500" size={30} />
      )}
    </button>
  ) : (
    <></>
  );
}

export default ProductAddToWishlistBtn;
