"use client";
import Image from "next/image";
import React, { useState } from "react";
import { host } from "../../../host.config";

function ImagePreview({ images, thumbnail, title }) {
  const [active, setActive] = useState(thumbnail);
  return (
    <div className="flex flex-col-reverse md:flex-row gap-2 w-full">
      <div className="flex flex-row md:flex-col gap-2">
        {[thumbnail, ...images].map((image) => (
          <figure
            key={image.id}
            className={`rounder ${image.url === active.url ? " border p-1" : "p-[5px]"}`}
            onClick={() => setActive(image)}
          >
            <Image
              className="h-20 w-20 object-cover"
              src={`${host}${image?.url}`}
              width={400}
              height={600}
              alt=""
            />
          </figure>
        ))}
      </div>
      <div className="w-full ">
        {active && (
          <figure className="rounder">
            <Image
              className=" w-full object-cover"
              src={`${host}${active?.url}`}
              width={400}
              height={600}
              alt={title}
            />
          </figure>
        )}
      </div>
    </div>
  );
}

export default ImagePreview;
