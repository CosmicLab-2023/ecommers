import getProducts from "@/libs/getProducts";
import HeroSection from "./Components/HeroSection/HeroSection";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <main className="relative">
        <HeroSection />
        <section>
          <article>
            <h1>Hello world</h1>
          </article>
        </section>
      </main>
    </>
  );
}
