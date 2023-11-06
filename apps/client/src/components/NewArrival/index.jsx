import Header from "@/components/Section/Header";
import React from "react";
import ProductList from "../ProductList";

function NewArrival() {
  return (
    <section className="w-full relative py-20">
      <div className="w-full max-w-6xl mx-auto px-2 flex flex-col gap-4">
        <Header title="New Arrival" />
        <ProductList
          products={[
            { title: "product 1", slug: "1" },
            { title: "product 1", slug: "1" },
            { title: "product 2", slug: "1" },
            { title: "product 3", slug: "1" },
            { title: "product 4", slug: "1" },
            { title: "product 5", slug: "1" },
            { title: "product 6", slug: "1" },
            { title: "product 7", slug: "1" },
            { title: "product 8", slug: "1" },
            { title: "product 9", slug: "1" },
            { title: "product 10", slug: "1" },
          ]}
        />
      </div>
    </section>
  );
}

export default NewArrival;
