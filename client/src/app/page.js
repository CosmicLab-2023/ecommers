import getProducts from "@/libs/server/getProducts";
import HeroSection from "../components/HeroSection";
import NewArrival from "../components/NewArrival";
import PopularProducts from "../components/PopularProducts";

export default async function Home() {
  const productsData = await getProducts();
  return (
    <>
      <main className="relative">
        <HeroSection />
        <NewArrival />
        <PopularProducts />
      </main>
    </>
  );
}
