import React from "react";
import Image from "next/image";

const WhoCanAttend: React.FC = () => {
  const attendees = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      ),
      title: "NRIs & Global Investors",
      description: "Looking For Real Estate Opportunities In Tamil Nadu.",
      bgColor: "bg-[#e8d4be]",
      textColor: "text-gray-900",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      title: "First-time Home Buyers",
      description: "Seeking Budget-Friendly And Maintain Housing Options.",
      bgColor: "bg-[#8b1538]",
      textColor: "text-white",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path
            fillRule="evenodd"
            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Real Estate Professionals",
      description: "Eager To Explore The Latest Market Trends.",
      bgColor: "bg-[#e8d4be]",
      textColor: "text-gray-900",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      title: "Business Owners & Entrepreneurs",
      description: "Interested In Commercial Property Investments.",
      bgColor: "bg-[#8b1538]",
      textColor: "text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5e6d3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8b1538] mb-12">
          Who Can Attend
        </h2>

        {/* Attendee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {attendees.map((attendee, index) => (
            <div
              key={index}
              className={`${attendee.bgColor} ${attendee.textColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div
                className={`inline-block ${
                  attendee.bgColor === "bg-[#8b1538]"
                    ? "bg-white text-[#8b1538]"
                    : "bg-[#8b1538] text-white"
                } rounded-full p-3 mb-4`}
              >
                {attendee.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{attendee.title}</h3>
              <p className="text-md opacity-90">{attendee.description}</p>
            </div>
          ))}
        </div>

        {/* Event Banner */}
        <section className="bg-[#8b1538] rounded-3xl shadow-2xl overflow-hidden w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {/* Left - Hotel Image */}
            <div className="relative w-full h-[280px] md:h-auto md:min-h-[450px]">
              <Image
                src="/br1.svg"
                alt="Le Meridien Dubai Hotel"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Center - Event Details */}
            <div className="flex flex-col justify-center items-center text-center text-white p-8 md:p-12 space-y-4">
              <h2 className="text-lg font-bold leading-snug">
                We Value Your Trust <br /> And Investment
              </h2>

              <p className="text-base md:text-lg font-medium leading-relaxed">
                Join Us At{" "}
                <span className="font-bold">LE MERIDIEN DUBAI HOTEL &</span>
                <br />
                CONFERENCE CENTRE, Dubai
              </p>

              <p className="text-xl font-extrabold tracking-wide">
                29–30 November 2025.
              </p>

              <p className="text-sm md:text-lg text-white/90">
                Secure Your Free VIP Pass And Explore Tamil Nadu’s Biggest Real
                Estate Showcase.
              </p>

              <button className="mt-4 bg-[#f6d365] text-[#8b1538] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105">
                Register Now
              </button>
            </div>

            {/* Right - Person Image */}
            <div className="relative hidden md:block">
              <Image
                src="/man3.svg"
                alt="Business Professional"
                fill
                className="object-contain object-bottom scale-110"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhoCanAttend;
