import getProducts from "@/libs/getProducts";

export default async function Home() {
  const products = await getProducts()
  return (
    <> 
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
