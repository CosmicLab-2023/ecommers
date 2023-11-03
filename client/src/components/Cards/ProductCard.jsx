'user client'
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <div className="w-full p-2 rounded flex flex-col gap-2 shadow dark:bg-slate-900">
      <Link href={`/products/${product.slug}`}>
        <figure className="rounder">
          <Image
            className="h-40 w-full object-cover"
            src=""
            width={400}
            height={600}
            alt=""
          />
        </figure>
      </Link>
      <div className="flex flex-col gap-2">
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

export default ProductCard;
