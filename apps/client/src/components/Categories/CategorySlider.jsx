import getProducts from "@/libs/server/getProducts";
import Header from "../ui/Header";
import Slider from "../ui/Slider";
import CategoryCard from "./CategoryCard";

async function CategorySlider() {
  const { data: products } = await getProducts();
  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto py-16 flex flex-col gap-4">
        <Header title="Categories" />
        <div className="w-full max-w-7xl mx-auto ">
          <Slider
            navigator={false}
            className="basis-1/2 md:basis-1/4 lg:basis-[20%]"
          >
            {products.map((product, ind) => (
              <CategoryCard key={ind} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default CategorySlider;
