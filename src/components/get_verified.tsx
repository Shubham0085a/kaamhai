import React from "react";
import Card1 from "@/app/assets/card1.png";
import Badge from '@/app/assets/Badge.png'
import Image from "next/image";

const Get_verified = () => {
  return (
    <section>
      <div className="my-36 mx-14 flex flex-row bg-[#FFBD00] rounded-[4.7rem] items-center justify-around">
        <div className="mx-10 my-32 flex flex-row items-center justify-center">
          <div className="w-[45%] flex flex-row items-center justify-center">
            <div className="z-10 space-y-10">
              <div>
                <p className="font-bold text-6xl leading-[4rem]">
                  Get Verified and
                  <br /> Get Hired!
                </p>
              </div>
              <div>
                <p className="text-4xl leading-[3.2rem]">
                  Get ready to experience the awesome world of Hiring &
                  Workforce Management with Kaamhai.
                </p>
              </div>
              <div>
                <button className=" bg-white font-semibold text-5xl h-20 rounded-2xl w-[70%]">
                  Apply Now
                </button>
              </div>
            </div>
            <div className=" absolute left-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="965"
                height="597"
                viewBox="0 0 965 597"
                fill="none"
              >
                <ellipse
                  cx="359.274"
                  cy="298.5"
                  rx="298.5"
                  ry="293.778"
                  transform="rotate(90 359.274 298.5)"
                  fill="url(#paint0_linear_403_14190)"
                />
                <ellipse
                  cx="671.222"
                  cy="298.5"
                  rx="298.5"
                  ry="293.778"
                  transform="rotate(90 671.222 298.5)"
                  fill="url(#paint1_linear_403_14190)"
                />
                <ellipse
                  cx="79.0267"
                  cy="298.5"
                  rx="298.5"
                  ry="293.778"
                  transform="rotate(90 79.0267 298.5)"
                  fill="url(#paint2_linear_403_14190)"
                />
                <ellipse
                  cx="-201.222"
                  cy="298.5"
                  rx="298.5"
                  ry="293.778"
                  transform="rotate(90 -201.222 298.5)"
                  fill="url(#paint3_linear_403_14190)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_403_14190"
                    x1="362.056"
                    y1="56.4206"
                    x2="389.008"
                    y2="628.761"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFBD00" />
                    <stop offset="1" stop-color="#FFE000" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_403_14190"
                    x1="674.004"
                    y1="56.4206"
                    x2="700.956"
                    y2="628.761"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFBD00" />
                    <stop offset="1" stop-color="#FFE000" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_403_14190"
                    x1="81.8087"
                    y1="56.4206"
                    x2="108.761"
                    y2="628.761"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFBD00" />
                    <stop offset="1" stop-color="#FFE000" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_403_14190"
                    x1="-198.44"
                    y1="56.4206"
                    x2="-171.488"
                    y2="628.761"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFBD00" />
                    <stop offset="1" stop-color="#FFE000" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-row items-end justify-end">
          <div className="z-10">
            <Image src={Card1} alt="" width={652} />
          </div>
          <div className=" absolute z-20 -mb-20 -mr-20">
            <Image src={Badge} alt="" width={255}/>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Get_verified;
