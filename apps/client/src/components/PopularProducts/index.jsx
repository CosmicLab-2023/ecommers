import Header from "@/components/Section/Header";
import ProductList from "../ProductList";
import getProducts from "@/libs/server/getProducts";

async function PopularProducts() {
  const {data:products} = await getProducts()
  return (
    <section className="w-full relative py-20">
      <div className="w-full max-w-7xl mx-auto px-2 flex flex-col gap-4">
        <Header title={"Popular Products"} />
        <ProductList
          products={products}
        />
      </div>
    </section>
  );
}

export default PopularProducts;
