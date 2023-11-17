'use client'
import ProductCard from "../Cards/ProductCard";

function ProductList({ products }) {
   
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product, ind) => (
        <ProductCard key={ind} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
