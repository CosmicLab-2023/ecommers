"use client";

import Image from "next/image";
import Link from "next/link";
import { host } from "../../../host.config";
import ProductCard2 from "./ProductCard2";
import ProductCard from "./ProductCard";

function ProductList2({ products }) {
  const transform = (products) => {
    const groups = [];
    let group = [];
    products.forEach((element) => {
      if (group.length <= 5) {
        group.push(element);
      } else {
        groups.push(group);
        group = [];
      }
      console.log({group});
      console.log({groups});
    });
    if (group.length) {
      groups.push(group)
    }
    return groups
  };
  return (
    <div className="w-full flex flex-col gap-16">
      {transform([...products,...products,...products,...products,...products]).map((group, ind) => (
        <div key={ind} className="">
          <div className={`w-full grid md:grid-cols-2 gap-4`}>
            {ind % 2 == 1 && group?.[0] && (
              <div className="w-full max-w-2xl grid h-full">
                <ProductCard2 product={group?.[0]} />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2">
              {group?.[1] && <ProductCard product={group?.[1]} />}
              {group?.[2] && <ProductCard product={group?.[2]} />}
              {group?.[3] && <ProductCard product={group?.[3]} />}
              {group?.[4] && <ProductCard product={group?.[4]} />}
              {/* {group?.[4] && <ProductCard product={group?.[5]} />} */}
              {/* {group?.[4] && <ProductCard product={group?.[6]} />} */}
            </div>
            {ind % 2 == 0 && group?.[0] &&(
              <div className="w-full max-w-2xl grid  h-full">
                <ProductCard2 product={group?.[0]} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList2;
