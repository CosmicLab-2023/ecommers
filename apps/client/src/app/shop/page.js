import ProductList from "@/components/ProductList";
import Header from "@/components/Section/Header";

function Page() {
  return (
    <main>
      <section className="w-full relative py-20">
        <div className="w-full max-w-6xl mx-auto px-2 flex flex-col gap-4">
          <Header title={"Products"} />
          <div className="w-full flex flex-col lg:flex-row gap-4 h-auto">
            <div className="w-full lg:w-1/4 p-4 bg-slate-900">Filter</div>
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
        </div>
      </section>
    </main>
  );
}

export default Page;
