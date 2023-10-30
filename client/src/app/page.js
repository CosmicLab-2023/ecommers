// import getProducts from "@/libs/getProducts";
import HeroSection from "./Components/HeroSection";
import NewArrival from "./Components/NewArrival";
import PopularProducts from "./Components/PopularProducts";

export default async function Home() {
  // const products = await getProducts();
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
