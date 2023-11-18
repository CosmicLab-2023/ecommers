import Header from "@/components/ui/Header";
import ProductList from "./ProductList";
import getProducts from "@/libs/server/getProducts";
import ProductList2 from "./ProductList2";

async function PopularProducts() {
  const { data: products } = await getProducts();
  return (
    <section className="w-full relative py-16">
      <div className="w-full max-w-7xl mx-auto px-2 flex flex-col gap-4">
        <Header title="Popular Products" />
        <ProductList2 products={products} />
      </div>
    </section>
  );
}

export default PopularProducts;
