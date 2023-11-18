"use client";

import Image from "next/image";
import Link from "next/link";
import { host } from "../../../host.config";

function ProductList2({ products }) {
  return (
    <div className="w-full">
      {products.slice(1, products.length).map((product, ind) => (
        <div key={ind}>
          <div className={`w-full grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2  gap-4`}>
            <div className="col-span-2 row-span-2 w-full p-2 rounded-[2rem] flex flex-col gap-2 shadow dark:bg-slate-950">
              <div className="relative">
                <Link href={`/products/${product?.attributes?.slug}`}>
                  <figure className="">
                    {product?.attributes?.thumbnail && (
                      <Image
                        className="h-full w-full object-cover rounded-3xl"
                        src={`${host}${product?.attributes?.thumbnail?.data?.attributes?.url}`}
                        width={400}
                        height={600}
                        alt=""
                      />
                    )}
                  </figure>
                </Link>
                <div className="absolute w-full flex flex-col gap-2 bottom-0 text-white bg-black/20 p-3 rounded-b-3xl">
                  <Link
                    href={`/products/${product?.attributes?.slug}`}
                    className="font-bold text-md"
                  >
                    {product?.attributes?.title}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1 w-full p-2 rounded-[2rem] flex flex-col gap-2 shadow dark:bg-slate-950">
              <div className="relative">
                <Link href={`/products/${product?.attributes?.slug}`}>
                  <figure className="">
                    {product?.attributes?.thumbnail && (
                      <Image
                        className="h-full w-full object-cover rounded-3xl"
                        src={`${host}${product?.attributes?.thumbnail?.data?.attributes?.url}`}
                        width={400}
                        height={600}
                        alt=""
                      />
                    )}
                  </figure>
                </Link>
                <div className="absolute w-full flex flex-col gap-2 bottom-0 text-white bg-black/20 p-3 rounded-b-3xl">
                  <Link
                    href={`/products/${product?.attributes?.slug}`}
                    className="font-bold text-md"
                  >
                    {product?.attributes?.title}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1 w-full p-2 rounded-[2rem] flex flex-col gap-2 shadow dark:bg-slate-950">
              <div className="relative">
                <Link href={`/products/${product?.attributes?.slug}`}>
                  <figure className="">
                    {product?.attributes?.thumbnail && (
                      <Image
                        className="h-full w-full object-cover rounded-3xl"
                        src={`${host}${product?.attributes?.thumbnail?.data?.attributes?.url}`}
                        width={400}
                        height={600}
                        alt=""
                      />
                    )}
                  </figure>
                </Link>
                <div className="absolute w-full flex flex-col gap-2 bottom-0 text-white bg-black/20 p-3 rounded-b-3xl">
                  <Link
                    href={`/products/${product?.attributes?.slug}`}
                    className="font-bold text-md"
                  >
                    {product?.attributes?.title}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1 w-full p-2 rounded-[2rem] flex flex-col gap-2 shadow dark:bg-slate-950">
              <div className="relative">
                <Link href={`/products/${product?.attributes?.slug}`}>
                  <figure className="">
                    {product?.attributes?.thumbnail && (
                      <Image
                        className="h-full w-full object-cover rounded-3xl"
                        src={`${host}${product?.attributes?.thumbnail?.data?.attributes?.url}`}
                        width={400}
                        height={600}
                        alt=""
                      />
                    )}
                  </figure>
                </Link>
                <div className="absolute w-full flex flex-col gap-2 bottom-0 text-white bg-black/20 p-3 rounded-b-3xl">
                  <Link
                    href={`/products/${product?.attributes?.slug}`}
                    className="font-bold text-md"
                  >
                    {product?.attributes?.title}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1 w-full p-2 rounded-[2rem] flex flex-col gap-2 shadow dark:bg-slate-950">
              <div className="relative">
                <Link href={`/products/${product?.attributes?.slug}`}>
                  <figure className="">
                    {product?.attributes?.thumbnail && (
                      <Image
                        className="h-full w-full object-cover rounded-3xl"
                        src={`${host}${product?.attributes?.thumbnail?.data?.attributes?.url}`}
                        width={400}
                        height={600}
                        alt=""
                      />
                    )}
                  </figure>
                </Link>
                <div className="absolute w-full flex flex-col gap-2 bottom-0 text-white bg-black/20 p-3 rounded-b-3xl">
                  <Link
                    href={`/products/${product?.attributes?.slug}`}
                    className="font-bold text-md"
                  >
                    {product?.attributes?.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList2;
