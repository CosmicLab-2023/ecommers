"user client";
import { toggleCartProduct } from "@/libs/features/cartSlice";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
function ProductAddToCartBtn({ product }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const isInCart = useMemo(() => {
    return !!cartProducts?.find((prt) => prt.id === product.id);
  }, [cartProducts, product.id]);

  return (
    <button
      onClick={() =>
        dispatch(toggleCartProduct({ id: product.id, ...product?.attributes }))
      }
      className="btn-primary h-full px-4 py-2"
    >
      {!isInCart ? "Add to cart" : "Remove from cart"}
    </button>
  );
}

export default ProductAddToCartBtn;
