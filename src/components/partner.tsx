import Image from "next/image";
import React from "react";
import CertificateImg from "@/app/assets/certificate.png";
import UntitledDdesign from "@/app/assets/Untitled design.png";
import Card from "@/app/assets/card.png";

const Partner = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center lg:items-end h-auto justify-center gap-20">
        <div className="flex items-end justify-center">
          <div className="w-[20rem] lg:w-[55rem] z-10">
            <Image src={CertificateImg} alt=""/>
          </div>
          <div className="absolute left-0 h-auto w-[25rem] lg:w-[65rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 1219 723"
              fill="none"
            >
              <ellipse
                cx="697.231"
                cy="336.576"
                rx="222.346"
                ry="233.177"
                transform="rotate(75.3692 697.231 336.576)"
                fill="url(#paint0_linear_403_12867)"
              />
              <ellipse
                cx="936.801"
                cy="274.035"
                rx="222.346"
                ry="233.177"
                transform="rotate(75.3692 936.801 274.035)"
                fill="url(#paint1_linear_403_12867)"
              />
              <ellipse
                cx="482.005"
                cy="392.761"
                rx="222.346"
                ry="233.177"
                transform="rotate(75.3692 482.005 392.761)"
                fill="url(#paint2_linear_403_12867)"
              />
              <ellipse
                cx="266.779"
                cy="448.947"
                rx="222.346"
                ry="233.177"
                transform="rotate(75.3692 266.779 448.947)"
                fill="url(#paint3_linear_403_12867)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_403_12867"
                  x1="699.303"
                  y1="144.432"
                  x2="722.091"
                  y2="598.574"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFBD00" />
                  <stop offset="1" stop-color="#FFE000" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_403_12867"
                  x1="938.873"
                  y1="81.8915"
                  x2="961.661"
                  y2="536.033"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFBD00" />
                  <stop offset="1" stop-color="#FFE000" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_403_12867"
                  x1="484.077"
                  y1="200.618"
                  x2="506.866"
                  y2="654.76"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFBD00" />
                  <stop offset="1" stop-color="#FFE000" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_403_12867"
                  x1="268.851"
                  y1="256.804"
                  x2="291.639"
                  y2="710.946"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFBD00" />
                  <stop offset="1" stop-color="#FFE000" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className=" absolute z-20 mb-80 -mr-36 lg:mr-0 lg:-mb-40 w-[15rem] lg:w-[36.5rem]">
            <Image src={Card} alt=""/>
        </div>
        <div className="flex flex-col items-start mt-10 justify-end">
          <div className="m-5">
            <div>
              <p className="font-bold text-3xl">Partner with us,</p>
            </div>
            <div>
              <p className="font-medium text-2xl">
                to set a benchmark for others to follow!
              </p>
            </div>
          </div>
          <div>
            <Image src={UntitledDdesign} alt="" width={556} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
