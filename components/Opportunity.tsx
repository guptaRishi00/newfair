import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function OpportunitiesHero() {
  return (
    <section className="w-full overflow-hidden">
      {/* Top Section */}
      <div className="relative bg-[#FDF7F6]">
        <div className=" mx-auto grid lg:grid-cols-2 gap-10 items-center ">
          {/* Left Text Content */}
          <div className="space-y-6 ml-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#7B0E2D] leading-tight">
              All the opportunities <br /> under one roof
            </h1>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7B0E2D] flex-shrink-0"></div>
                <p>
                  <span className="font-semibold text-2xl">
                    Explore 300+ RERA Approved Projects
                  </span>{" "}
                  from Chennai, Trichy, Madurai, Coimbatore, Erode, and more.
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 mt-2 text-2xl rounded-full bg-[#7B0E2D] flex-shrink-0"></div>
                <p className="text-2xl">
                  <span className="font-semibold text-2xl">
                    Meet 60+ Trusted Builders
                  </span>{" "}
                  & get instant loan assistance.
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7B0E2D] flex-shrink-0"></div>
                <p className="text-2xl">
                  <span className="font-semibold text-[#7B0E2D]">
                    Homes, Villas, and Plots from ₹10 L to ₹10 Cr
                  </span>{" "}
                  Explore your perfect investment*
                </p>
              </li>
            </ul>

            <div className="w-full flex items-center">
              <button className="group inline-flex items-center gap-3 border border-[#7B0E2D] text-[#7B0E2D] px-6 py-3.5 rounded-full font-semibold text-sm shadow-md hover:bg-[#600a23] transition-all duration-300">
                Get Your Free VIP Pass
              </button>
              <span className="bg-[#7B0E2D] p-4 -ml-2 rounded-full">
                <MdArrowOutward color="white" />
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/warflow.png"
              alt="3D ring illustration"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#7B0E2D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-12 py-16 lg:py-20">
          {/* Left Image */}

          <img
            src="/man2.svg"
            alt="Professional representative"
            className="w-[500px] "
          />

          {/* Right Text */}
          <div className="space-y-6">
            <div className="bg-white inline-block px-4 py-3 rounded-full font-bold uppercase text-[#890B31] tracking-wider text-xs ">
              Trustworthiness
            </div>

            <h2 className="text-3xl sm:text-6xl font-bold leading-tight">
              We Value Your Trust <br /> And Investment
            </h2>

            <p className="text-white/90 text-xl w-full">
              Our mission is to connect NRIs and investors with verified Tamil
              Nadu developers for safe and transparent property investments.
            </p>

            <div className="w-full flex items-center">
              <button className="bg-[#FFE0BA] text-[#890B31] font-bold px-6 py-3 rounded-full shadow hover:bg-amber-300 transition text-sm md:text-base">
                Explore Builders
              </button>
              <span className="bg-[#FFE0BA] p-4 -ml-2 rounded-full">
                <MdArrowOutward color="#890B31" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
