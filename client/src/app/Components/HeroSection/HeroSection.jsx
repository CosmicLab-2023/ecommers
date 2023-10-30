import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Slider from "../../../components/ui/Slider";
import Image from "next/image";
// import Status from "./Status";
import Link from "next/link";

const images = [
  "/images/hero/img.jpg",
  "/images/hero/img1.jpg",
  "/images/hero/img2.jpg",
  "/images/hero/img3.jpg",
  "/images/hero/img4.jpg",
  "/images/hero/img5.jpg",
  "/images/hero/img6.jpg",
  "/images/hero/img7.jpg",
  "/images/hero/img8.jpg",
];
function HeroSection() {
  return (
    <div className="w-full relative">
      <Slider navigator={true} flexBasis={"100%"}>
        {images.map((image, ind) => (
          <div key={ind} className="w-full h-full flex flex-col md:flex-row ">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000] to-[#0000003d]"></div>
              <div className="absolute top-1/2 -translate-y-[40%] float-left -mr-[100%] h-full w-full ">
                <div className="h-full w-full text-left text-white block ">
                  <div className="flex flex-col lg:flex-row  w-full text-start">
                    <div className="w-full p-4 flex flex-col  lg:gap-4 max-w-lg md:max-w-xl mx-auto">
                      <h1 className="text-4xl lg:text-5xl font-extrabold  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0)] md:my-2 py-2">
                        AGTA PLC
                      </h1>
                      <h4 className="hidden md:block text-lg lg:text-xl lg:my-2 py-2  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0)]">
                        To Become among the top ten manufacturers and
                        distributors of brand Vehicles in East Africa by 2030
                      </h4>
                      <div className="flex flex-col md:flex-row  gap-5">
                        <Link
                          href="/files/profile.pdf"
                          target="_blank"
                          className="bg-primary hover:bg-primary-600 text-white py-2 px-4 md:py-4 md:px-8 hover:scale-110 duration-100 ease-in-out
                       border-primary-500 hover:border-transparent drop-shadow-[0_1.2px_1.2px_rgb(14 165 233)]"
                        >
                          COMPANY PROFILE
                        </Link>
                        <Link
                          href="https://store.agtaa.com/"
                          target="_blank"
                          className=" hover:scale-110 text-white py-2 px-4 md:py-4 md:px-8 flex flex-nowrap gap-2 items-center duration-100 ease-in-out"
                        >
                          SHOP HERE
                          <AiOutlineArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0000003d] to-[#00000005]"></div>

              <Image
                src={image}
                alt={"image " + ind}
                width={1024}
                height={1024}
                className="block w-full h-full object-cover "
              />
            </div>
          </div>
        ))}
      </Slider>
      {/* <Status /> */}
    </div>
  );
}

export default HeroSection;
