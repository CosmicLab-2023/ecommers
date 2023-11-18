import ProductList from "@/components/Products/ProductList";
import Header from "@/components/ui/Header";
import getProducts from "@/libs/server/getProducts";

async function Page() {
  const {data:products} = await getProducts()
  return (
    <main>
      <section className="w-full relative py-20">
        <div className="w-full max-w-7xl mx-auto px-2 flex flex-col gap-4">
          <Header title={"Products"} />
          <div className="w-full flex flex-col lg:flex-row gap-4 h-auto">
            <div className="w-full lg:w-1/4 p-4 bg-slate-900">Filter</div>
            <ProductList
              products={products}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
