import React from "react";
import Image from "next/image";

const ExclusiveOpportunity: React.FC = () => {
  return (
    <div className="bg-[#f5e6d3] py-10 px-4 sm:px-6 lg:px-8 overflow-visible">
      <div className="max-w-6xl h-[600px] mx-auto relative overflow-visible">
        <div className="bg-gradient-to-r from-[#8b1538] to-[#6b1530] rounded-3xl shadow-2xl overflow-visible relative">
          <div className="grid lg:grid-cols-2 gap-0 items-center overflow-visible">
            
            {/* Left - Content */}
            <div className="p-8 md:p-12 text-white z-10 relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ">
                Don't Miss This Exclusive Opportunity
              </h2>

              <p className="text-sm md:text-base mb-8 leading-relaxed">
                Join CREDAI Tamil Nadu at the Dubai Expo and take the next step
                towards owning your dream property in Tamil Nadu. Use your NRI
                privileges to invest in real estate risk-free at{" "}
                <span className="font-semibold">
                  LE MERIDIEN DUBAI HOTEL & CONFERENCE CENTRE
                </span>.
              </p>

              <button className="inline-flex items-center gap-3 bg-white text-[#8b1538] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Register Now
                <span className="bg-[#8b1538] text-white rounded-full p-1.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Right - Man Image (completely free from height/relative constraints) */}
            <div className="overflow-visible z-20">
              <Image
                src="/man4.svg"
                alt="Business Professional"
                width={1000}
                height={1000}
                className="object-contain pointer-events-none absolute bottom-[0px] right-[-140px] w-[800px] lg:w-[900px]"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOpportunity;
