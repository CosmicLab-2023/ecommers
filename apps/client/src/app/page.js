import getProducts from "@/libs/server/getProducts";
import HeroSection from "../components/HeroSection";
import NewArrival from "../components/Products/NewArrival";
import PopularProducts from "../components/Products/PopularProducts";
import CategoryList from "@/components/Categories/CategoryList";
import CategorySlider from "@/components/Categories/CategorySlider";

export default async function Home() {
  const productsData = await getProducts();
  return (
    <>
      <main className="relative">
        <HeroSection />
        <CategorySlider />
        <NewArrival />
        <PopularProducts />
      </main>
    </>
  );
}
