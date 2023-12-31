import React from "react";
import Markdown from "react-markdown";
import AddToCartBtn from "./AddToCartBtn";
import ImagePreview from "./ImagePreview";
import ProductAmountSetter from "./AmountSetter";

function ProductDetails({ product }) {
  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto px-2 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 w-full relative">
            <ImagePreview
              images={product.images}
              thumbnail={product.thumbnail}
              title={product.title}
            />
            <div className="flex flex-col gap-4 w-full p-4 sticky top-12 h-fit">
              <article>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold ">
                  {product?.title}
                </h1>
                <p>{product?.description}</p>
              </article>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 font-bold text-xl">
                  <del>{product?.regular_price} ETB</del>
                  <div>{product?.last_price} ETB</div>
                </div>
                {/* <div>Rating</div> */}
              </div>
              <AddToCartBtn product={product} />

            </div>
          </div>
        </div>
        <article className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-2">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Additional Information</h1>
          <div>
            <Markdown>{product.additional_information}</Markdown>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProductDetails;
