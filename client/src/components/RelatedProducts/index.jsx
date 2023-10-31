import Header from "@/components/Section/Header";
import ProductList from "../ProductList";

function RelatedProducts({ category }) {
  return (
    <section className="w-full relative py-20">
      <div className="w-full max-w-6xl mx-auto px-2 flex flex-col gap-4">
        <Header title={"Related Products"} />
        <ProductList
          products={[
            { title: "product 1", slug: "1" },
            { title: "product 1", slug: "1" },
            { title: "product 2", slug: "1" },
            { title: "product 3", slug: "1" },
            { title: "product 4", slug: "1" },
          ]}
        />
      </div>
    </section>
  );
}

export default RelatedProducts;
