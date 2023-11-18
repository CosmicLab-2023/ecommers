import Header from "@/components/ui/Header";
import getProducts from "@/libs/server/getProducts";
import ProductList2 from "./ProductList2";
import ProductList from "./ProductList";

async function NewArrival() {
  const { data: products } = await getProducts();
  return (
    <section className="w-full relative py-16">
      <div className="w-full max-w-7xl mx-auto px-2 flex flex-col gap-4">
        <Header title={"New Arrival"} />
        <ProductList
          products={products}
        />
      </div>
    </section>
  );
}

export default NewArrival;
