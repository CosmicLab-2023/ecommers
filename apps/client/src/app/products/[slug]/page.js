import ProductDetails from "@/components/Products/ProductDetails";
import RelatedProducts from "@/components/Products/RelatedProducts";
import getProductDetails from "@/libs/server/getProductDetails";
async function Page({ params: { slug } }) {
  const product = await getProductDetails(slug);
  return (
    <main>
      <ProductDetails product={product} />
      <RelatedProducts />
    </main>
  );
}

export default Page;
