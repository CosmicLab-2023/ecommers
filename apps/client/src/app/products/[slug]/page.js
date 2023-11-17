import RelatedProducts from "@/components/RelatedProducts";
import getProductDetails from "@/libs/server/getProductDetails";
import Image from "next/image";
import { host } from "../../../../host.config";
import ProductDetails from "@/components/productDetails";
// import Markdown from "react-markdown";
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
