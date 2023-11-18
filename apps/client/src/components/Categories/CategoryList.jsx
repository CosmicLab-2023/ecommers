import React from "react";
import Header from "../ui/Header";
import CategoryCard from "./CategoryCard";
import getProducts from "@/libs/server/getProducts";

async function CategoryList() {
  const { data: products } = await getProducts();
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product, ind) => (
        <CategoryCard key={ind} product={product} />
      ))}
    </div>
  );
}

export default CategoryList;
