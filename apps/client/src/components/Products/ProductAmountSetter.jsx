"user client";
import { addAmount, removeAmount, setAmount } from "@/libs/features/cartSlice";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function ProductAmountSetter({ product }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const cartProduct = () => {
    return cartProducts?.find((prt) => prt.id === product.id);
  };
  return (
    <div className="bg-white w-fit text-slate-900">
      <button
        onClick={(e) => dispatch(removeAmount(product.id))}
        className="btn-icon w-8 h-fit p-auto rounded-none"
      >
        -
      </button>
      <input
        value={cartProduct()?.amount ?? 0}
        type="number"
        className="w-20 outline-none border-none text-slate-900"
        onChange={(e) =>
          dispatch(setAmount({ id: product.id, amount: e.target.value }))
        }
      />
      <button
        onClick={(e) => dispatch(addAmount(product.id))}
        className="btn-icon w-8 h-fit p-auto rounded-none"
      >
        +
      </button>
    </div>
  );
}

export default ProductAmountSetter;
