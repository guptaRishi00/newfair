"use client";
import React, { useState, useEffect } from "react";

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
        <div className="flex justify-center pt-2 md:pt-3">
          <img
            src="/logo.png"
            alt="FairPro Logo"
            className="h-36 md:h-44 w-auto"
          />
        </div>

        {/* Hero content — your chosen parent height container */}
        <div className="flex flex-col lg:flex-row items-center justify-between flex-1 px-6 md:px-16 lg:px-20 gap-6 md:gap-10 mt-0">
          {/* Left Text Section */}
          <div className="text-white max-w-xl text-center lg:text-left space-y-2 md:space-y-3">
            <p className="text-base md:text-lg font-medium text-amber-200">
              Tamil Nadu's Biggest Property Expo
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Discover. Invest.{" "}
              <span className="text-amber-300">Prosper.</span>
            </h1>

            <p className="text-sm md:text-base font-medium uppercase leading-snug">
              <span className="font-bold">
                LE MERIDIEN DUBAI HOTEL & CONFERENCE CENTRE
              </span>
            </p>

            <p className="text-base md:text-xl font-semibold">
              29–30 November 2025
            </p>

            <p className="text-xs md:text-sm text-white/90 leading-relaxed">
              Explore 60+ Builders, 300+ RERA Approved Projects & Exclusive Deals
              Under One Roof.
            </p>

            <button className="bg-amber-200 text-gray-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-amber-300 transition text-sm md:text-base">
              REGISTER NOW
            </button>
          </div>

          {/* Right Man Image — scaled up to fill reduced height */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <img
              src="/man.svg"
              alt="Man"
              className="
                absolute
                lg:static
                right-0
                bottom-0
                w-[170%] sm:w-[160%] md:w-[150%] lg:w-[130%] xl:w-[120%]
                max-w-none
                z-[5]
                pointer-events-none
                object-contain
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
