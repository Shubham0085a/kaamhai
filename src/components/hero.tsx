import React from "react";
import AppStore from "@/app/assets/app-store.png";
import PlayStore from "@/app/assets/play-store.png";
import Ellipse1 from "@/app/assets/Ellipse 1.png";
import Ellipse2 from "@/app/assets/Ellipse 2.png";
import Ellipse3 from "@/app/assets/Ellipse 3.png";
import Ellipse4 from "@/app/assets/Ellipse 4.png";
import ScreenPhone from "@/app/assets/Screen Phone.png";
import LeftScreenPhone from "@/app/assets/Left Screen Phone.png";
import RightScreenPhone from "@/app/assets/Right Screen Phone.png";
import Image from "next/image";

const Hero = () => {
  return (
    <main>
      <div className="mx-5 lg:mx-14 h-auto my-10 lg:my-32 flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-around">
        <div className="space-y-5 lg:space-y-10 lg:w-1/2">
          <div>
            <p className="font-extrabold text-3xl lg:text-6xl">
              Simplified workforce hiring & Management solution
            </p>
          </div>
          <div>
            <p className=" text-xllg:text-3xl">
              Upgrade your hiring process with Kaamhai, Designed with verified
              databases
            </p>
          </div>
          <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-5">
            <div className="flex flex-row space-x-5">
              <div className="w-40 lg:w-[16.70rem]">
                <a href="">
                  <Image src={PlayStore} alt="Play store" />
                </a>
              </div>
              <div className="w-40 lg:w-[16.70rem]">
                <a href="">
                  <Image src={AppStore} alt="App store" />
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <Image
                  className="w-14 h-14 rounded-full"
                  src={Ellipse1}
                  alt=""
                />
                <Image
                  className="w-14 h-14 rounded-full"
                  src={Ellipse2}
                  alt=""
                />
                <Image
                  className="w-14 h-14 rounded-full"
                  src={Ellipse3}
                  alt=""
                />
                <Image
                  src={Ellipse4}
                  className="w-14 h-14 rounded-full"
                  alt=""
                />
                <a
                  className="flex items-center justify-center w-20 h-14 text-sm font-semibold text-white bg-black border-2 border-white rounded-full dark:border-gray-800"
                  href="#"
                >
                  100+
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-row items-end justify-center">
            <div className="flex flex-row space-x-24 relative">
              <div className="w-28 lg:w-72">
                <Image src={LeftScreenPhone} alt="" />
              </div>
              <div className="w-28 lg:w-72">
                <Image src={RightScreenPhone} alt="" />
              </div>
            </div>
            <div className="absolute w-32 lg:w-80">
              <Image src={ScreenPhone} alt="" />
            </div>
          </div>
          <div className="absolute lg:-right-14 top-68">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 992 817"
              fill="none"
            >
              <path
                d="M145 494C170 474.5 -6.22815 611.302 0.99982 704C11.3554 836.809 245.5 849.5 338.5 753.5C411.987 677.642 391.856 538.487 475.5 474C634.635 351.31 977.313 451.007 990.5 250.5C1000.93 91.9508 897.33 14.8394 739 1.49984C720.905 -0.0247086 694.5 1.49984 694.5 1.49984"
                stroke="black"
                stroke-opacity="0.32"
                stroke-dasharray="28 28"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
