import React from 'react';
import Image from 'next/image';

const WhoCanAttend: React.FC = () => {
  const attendees = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
        </svg>
      ),
      title: 'NRIs & Global Investors',
      description: 'Looking For Real Estate Opportunities In Tamil Nadu.',
      bgColor: 'bg-[#e8d4be]',
      textColor: 'text-gray-900'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
      ),
      title: 'First-time Home Buyers',
      description: 'Seeking Budget-Friendly And Maintain Housing Options.',
      bgColor: 'bg-[#8b1538]',
      textColor: 'text-white'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Real Estate Professionals',
      description: 'Eager To Explore The Latest Market Trends.',
      bgColor: 'bg-[#e8d4be]',
      textColor: 'text-gray-900'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
        </svg>
      ),
      title: 'Business Owners & Entrepreneurs',
      description: 'Interested In Commercial Property Investments.',
      bgColor: 'bg-[#8b1538]',
      textColor: 'text-white'
    }
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
              <div className={`inline-block ${attendee.bgColor === 'bg-[#8b1538]' ? 'bg-white text-[#8b1538]' : 'bg-[#8b1538] text-white'} rounded-full p-3 mb-4`}>
                {attendee.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {attendee.title}
              </h3>
              <p className="text-sm opacity-90">
                {attendee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Event Banner */}
        <div className="bg-[#8b1538] rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Hotel Image */}
            <div className="relative h-20 md:h-20">
              <Image
                src="/br1.svg"
                alt="Le Meridien Dubai Hotel"
                fill
                className="object-cover"
              />
            </div>

            {/* Center - Event Details */}
            <div className="p-8 md:p-10 text-white text-center flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We Value Your Trust<br />And Investment
              </h2>
              
              <p className="text-lg font-semibold mb-2">
                Join Us At LE MERIDIEN DUBAI HOTEL &<br />CONFERENCE CENTRE, Dubai
              </p>
              
              <p className="text-4xl md:text-5xl font-bold mb-4">
                29–30 November 2025.
              </p>
              
              <p className="text-sm mb-6">
                Secure Your Free VIP Pass And Explore Tamil Nadu's Biggest Real Estate Showcase.
              </p>

              <button className="inline-flex items-center justify-center gap-3 bg-white text-[#8b1538] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 mx-auto">
                Register Now
              </button>
            </div>

            {/* Right - Person Image (hidden on mobile, shown on larger screens) */}
            <div className="hidden lg:block relative">
              <Image
                src="/man3.svg"
                alt="Business Professional"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanAttend;