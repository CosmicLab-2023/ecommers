import Header from "@/components/Section/Header";
import React from "react";
import ProductList from "../ProductList";
import getProducts from "@/libs/server/getProducts";

async function NewArrival() {
  const {data:products} = await getProducts()
  return (
    <section className="w-full relative py-20">
      <div className="w-full max-w-7xl mx-auto px-2 flex flex-col gap-4">
        <Header title="New Arrival" />
        <ProductList
          products={products}
        />
      </div>
    </section>
  );
}

export default NewArrival;
