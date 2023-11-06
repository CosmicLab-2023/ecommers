import RelatedProducts from "@/components/RelatedProducts";
import Image from "next/image";

function Page({ params: { slug } }) {
  return (
    <main>
      <section className="w-full">
        <div className="w-full max-w-6xl mx-auto px-2 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 w-full">
              <div className="flex gap-2 w-full">
                <div className="flex flex-col gap-2">
                  <figure className="rounder">
                    <Image
                      className="h-20 w-20 object-cover"
                      src=""
                      width={400}
                      height={600}
                      alt=""
                    />
                  </figure>
                  <figure className="rounder">
                    <Image
                      className="h-20 w-20 object-cover"
                      src=""
                      width={400}
                      height={600}
                      alt=""
                    />
                  </figure>
                  <figure className="rounder">
                    <Image
                      className="h-20 w-20 object-cover"
                      src=""
                      width={400}
                      height={600}
                      alt=""
                    />
                  </figure>
                  <figure className="rounder">
                    <Image
                      className="h-20 w-20 object-cover"
                      src=""
                      width={400}
                      height={600}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="w-full ">
                  <figure className="rounder">
                    <Image
                      className="h-96 w-full object-cover"
                      src=""
                      width={400}
                      height={600}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full p-4">
                <article>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
                    Product Title
                  </h1>
                  <p>
                    ou can pass "limit" and "skip" params to limit and skip the
                    results for pagination, and use limit=0 to get all items.
                    You can pass "select" as query params with comma-separated
                    values to select specific data.
                  </p>
                </article>
                <div className="flex flex-nowrap w-full gap-4">
                  <div className="bg-white w-fit text-slate-900">
                    <button className="btn-icon w-8 h-fit p-auto rounded-none">
                      -
                    </button>
                    <input
                      type="number"
                      className="w-20 outline-none border-none text-slate-900"
                    />
                    <button className="btn-icon w-8 h-fit p-auto rounded-none">
                      +
                    </button>
                  </div>
                  <button className="btn px-8">Add to cart</button>
                </div>
                <article className="flex flex-col gap-2">
                  <h1 className="text-lg sm:text-xl ">
                    Additional Information
                  </h1>
                  <p>
                    ou can pass "limit" and "skip" params to limit and skip the
                    results for pagination, and use limit=0 to get all items.
                    You can pass "select" as query params with comma-separated
                    values to select specific data.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts />
    </main>
  );
}

export default Page;
