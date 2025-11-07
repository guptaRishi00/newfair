import React from "react";

export default function OpportunitiesHero() {
  return (
    <section className="w-full overflow-hidden">
      {/* Top Section */}
      <div className="relative bg-[#FDF7F6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-12 py-16 lg:py-24">
          {/* Left Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#7B0E2D] leading-tight">
              All the opportunities <br /> under one roof
            </h1>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7B0E2D] flex-shrink-0"></div>
                <p>
                  <span className="font-semibold">
                    Explore 300+ RERA Approved Projects
                  </span>{" "}
                  from Chennai, Trichy, Madurai, Coimbatore, Erode, and more.
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7B0E2D] flex-shrink-0"></div>
                <p>
                  <span className="font-semibold">Meet 60+ Trusted Builders</span> & get
                  instant loan assistance.
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7B0E2D] flex-shrink-0"></div>
                <p>
                  <span className="font-semibold text-[#7B0E2D]">
                    Homes, Villas, and Plots from ₹10 L to ₹10 Cr
                  </span>{" "}
                  Explore your perfect investment*
                </p>
              </li>
            </ul>

            <button className="group inline-flex items-center gap-3 bg-[#7B0E2D] text-white px-6 py-3.5 rounded-full font-semibold text-sm shadow-md hover:bg-[#600a23] transition-all duration-300">
              Get Your Free VIP Pass
              <span className="bg-white text-[#7B0E2D] rounded-full w-6 h-6 flex items-center justify-center text-base group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/warflow.png"
              alt="3D ring illustration"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#7B0E2D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-12 py-16 lg:py-20">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/man2.svg"
              alt="Professional representative"
              className="w-full max-w-sm lg:max-w-md object-contain"
            />
          </div>

          {/* Right Text */}
          <div className="space-y-6">
            <div className="bg-white/10 inline-block px-4 py-1 rounded-full uppercase tracking-wider text-xs font-semibold">
              Trustworthiness
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              We Value Your Trust <br /> And Investment
            </h2>

            <p className="text-white/90 max-w-md">
              Our mission is to connect NRIs and investors with verified Tamil Nadu
              developers for safe and transparent property investments.
            </p>

            <button className="inline-flex items-center gap-2 bg-white text-[#7B0E2D] font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:bg-gray-100 transition-all duration-300">
              Explore Builders
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
