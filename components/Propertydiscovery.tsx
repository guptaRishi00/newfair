import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const PropertyDiscovery: React.FC = () => {
  return (
    <div className="bg-[#f5e6d3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#8b1538] mb-12">
          Can Help You Discover
          <br />
          Your Dream Property
        </h1>

        {/* Main Grid */}
        <div className="space-y-6">
          {/* Top Card - NRI Friendly */}
          <div className="bg-[#e8d4be] rounded-3xl  shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <Image
                  src="/dr3.svg"
                  alt="Indian Cityscape"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-1 text-start mr-10">
                <div className="inline-block bg-[#8b1538] text-white rounded-full p-3 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Invest From Anywhere In The World — NRI-Friendly Process.
                </h2>
              </div>
            </div>
          </div>

          {/* Middle Row - Two Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Property Types Card */}
            <div className="bg-[#e8d4be] rounded-3xl shadow-lg">
              <div className="p-8">
                <div className="inline-block bg-[#8b1538] text-white rounded-full p-3 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Choose from Apartments, Villas, Plots, and Commercial Spaces.
                </h2>
                <p className="text-md text-black mb-6">
                  We bring you 300+ RERA Approved Projects from Chennai,
                  Coimbatore, Madurai, Trichy, Erode, Hosur, and beyond — all
                  under one roof at the Fairpro Expo 2025.
                </p>
              </div>
              <Image
                src="/dr1.svg"
                alt="Architectural Blueprint"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>

            {/* Personalized Insights Card */}
            <div className="bg-[#0a1628] rounded-3xl shadow-lg text-white">
              <div className="p-8">
                <div className="inline-block bg-[#8b1538] text-white rounded-full p-3 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold mb-3">
                  Personalized Insights And Investment Guidance.
                </h2>
                <p className="text-md text-white mb-6">
                  Get one-on-one assistance from financial and legal experts.
                  Understand property loans, taxation, and ownership processes
                  for NRIs and investors.
                </p>
              </div>
              <Image
                src="/dr2.svg"
                alt="Temple Architecture"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Bottom Row - 3 Cards */}
          <section className="w-full">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: Verified Builders */}
              <div className="bg-[#8b1538] rounded-3xl p-10 shadow-xl text-white flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
                    100% Verified <br /> Builders.
                  </h2>
                  <p className="text-base text-gray-100/90 leading-relaxed">
                    All showcased projects are backed by{" "}
                    <span className="font-semibold">CREDAI Tamil Nadu</span>,
                    representing <strong>13,300+ trusted developers</strong>.
                  </p>
                </div>
              </div>

              {/* Card 2: Tamil Nadu Locations */}
              <div className="bg-[#f3dfc7] rounded-3xl p-10 shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div>
                  <div className="inline-flex items-center justify-center bg-[#8b1538] text-white rounded-full p-4 mb-6 shadow-md">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                    Invest Across <br />
                    <span className="text-[#8b1538] font-extrabold">
                      30+ Locations
                    </span>{" "}
                    <br />
                    In Tamil Nadu
                  </h2>

                  <p className="text-gray-700 mt-4 text-base leading-relaxed">
                    Explore the best investment opportunities from Chennai to
                    Coimbatore, all in one place.
                  </p>
                </div>
              </div>

              {/* Card 3: CREDAI Logo */}
              <div className="bg-white rounded-3xl p-10 shadow-xl flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <Image
                  src="/credai-logo.png"
                  alt="CREDAI Tamil Nadu"
                  width={220}
                  height={120}
                  className="h-auto w-auto object-contain"
                />
                <p className="text-sm mt-4 text-gray-600 text-center max-w-[200px]">
                  Backed by the trusted name in real estate —{" "}
                  <strong>CREDAI Tamil Nadu</strong>.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Button */}
        <div className="w-full flex items-center justify-center mt-10">
          <button className=" border border-[#890B31] font-bold px-6 py-3 rounded-full shadow hover:bg-amber-300 transition text-[#890B31] md:text-base">
            REGISTER NOW
          </button>
          <span className="bg-[#890B31] p-4 -ml-2 rounded-full">
            <MdArrowOutward color="white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyDiscovery;
