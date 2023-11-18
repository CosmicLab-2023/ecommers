import CategorySlider from "@/components/Categories/CategorySlider";
import HeroSection from "../components/HeroSection";
import NewArrival from "../components/Products/NewArrival";
import PopularProducts from "../components/Products/PopularProducts";

export default async function Home() {
  return (
    <>
      <main className="relative">
        <HeroSection />
        <CategorySlider />
        <PopularProducts />
        <NewArrival />
      </main>
    </>
  );
}
