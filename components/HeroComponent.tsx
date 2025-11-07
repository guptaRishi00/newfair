"use client";
import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

const HeroComponent = () => {
  const [currentText, setCurrentText] = useState(0);

  const slidingTexts = [
    "Join Us at LE MERIDIEN DUBAI HOTEL & CONFERENCE CENTRE, Dubai — 29–30 November 2025 | Your Gateway to Tamil Nadu’s Real Estate Future",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % slidingTexts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background (unchanged) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.png')" }}
      ></div>

      {/* Slight dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col">
        {/* Logo - reduced top padding */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="FairPro Logo"
            className="w-[389.18410035622287px] absolute"
          />
        </div>

        {/* Hero content — your chosen parent height container */}
        <div className="flex flex-col lg:flex-row mt-10 items-center justify-between flex-1 px-6 md:px-16 lg:px-20 gap-6">
          {/* Left Text Section */}
          <div className="text-white w-full text-center lg:text-left space-y-2 md:space-y-3 mt-10 ">
            <p className="text-xl md:text-xl font-bold text-white bg-[#FFFFFF2E] w-fit px-5 py-1 rounded-full">
              Tamil Nadu's Biggest Property Expo
            </p>

            <h1 className="text-6xl max-w-xl font-extrabold leading-tight">
              Discover. Invest. <span className="text-amber-300">Prosper.</span>
            </h1>

            <p className="text-sm md:text-2xl max-w-xl font-medium uppercase leading-snug">
              <span className="font-bold">
                Join us at LE MERIDIEN DUBAI HOTEL & CONFERENCE CENTRE, Dubai
              </span>
            </p>

            <p className="text-sm md:text-2xl max-w-xl font-medium uppercase leading-snug">
              29–30 November 2025
            </p>

            <p className="text-xl max-w-xl text-white/90 leading-relaxed font-medium">
              Explore 60+ builders, 300+ RERA Approved Projects and exclusive
              deals under one roof in Dubai.
            </p>

            <div className="w-full flex items-center">
              <button className="bg-[#FFE0BA] text-[#890B31] font-bold px-6 py-3 rounded-full shadow hover:bg-amber-300 transition text-sm md:text-base">
                REGISTER NOW
              </button>
              <span className="bg-[#FFE0BA] p-4 -ml-2 rounded-full">
                <MdArrowOutward color="#890B31" />
              </span>
            </div>
          </div>

          {/* Right Man Image — scaled up to fill reduced height */}
          <div className="relative w-full flex justify-center lg:justify-end ">
            <img
              src="/man.svg"
              alt="Man"
              className="
                relative
                lg:static
                right-0
                bottom-0
                w-[1500px]   
                pointer-events-none
                object-contain
                ml-60
              "
            />
          </div>
        </div>

        {/* Bottom scrolling text */}
        <div className="bg-amber-50 py-2 overflow-hidden">
          <div className="h-6 flex items-center justify-center relative">
            {slidingTexts.map((text, index) => (
              <p
                key={index}
                className={`text-red-900 text-xs md:text-sm font-semibold absolute transition-all duration-700 ${
                  currentText === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
