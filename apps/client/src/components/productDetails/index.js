import Image from "next/image";
import React from "react";
import { host } from "../../../host.config";
import ImagePreview from "./ImagePreview";

function ProductDetails({ product }) {
  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto px-2 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 w-full relative">
            <ImagePreview
              images={product.images}
              thumbnail={product.thumbnail}
              title={product.title}
            />
            <div className="flex flex-col gap-4 w-full p-4 sticky top-12 h-fit">
              <article>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
                  {product?.title}
                </h1>
                <p>{product?.description}</p>
              </article>
              <div className="flex flex-nowrap w-full gap-4">
                <div className="bg-white w-fit text-slate-900">
                  <button className="btn-icon w-8 h-fit p-auto rounded-none">
                    -
                  </button>
                  <input
                    type="number"
                    className="w-20 outline-none border-none text-slate-900"
                  />
                  <button className="btn-icon w-8 h-fit p-auto rounded-none">
                    +
                  </button>
                </div>
                <button className="btn px-8">Add to cart</button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 font-bold text-xl">
                  <del>{product?.regular_price} ETB</del>
                  <div>{product?.last_price} ETB</div>
                </div>
                {/* <div>Rating</div> */}
              </div>
              <article className="flex flex-col gap-2">
                <h1 className="text-lg sm:text-xl ">Additional Information</h1>
                <div>
                  {/* <Markdown>{product.additional_information}</Markdown> */}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
