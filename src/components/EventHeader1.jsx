import React from "react";

const EventHeader1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
        alt="event"
        className="w-36 h-36 md:w-40 md:h-40 rounded-md object-contain bg-gray-100 p-2"
      />
      <div className="flex-1 space-y-3">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold text-[#1A1A1A] leading-tight">
            Tech Innovators Hackathon 2025
          </h1>
          <span className="text-[#3C82F4] border border-[#3C82F4] text-xs font-medium px-2 py-0.5 rounded">
            Free
          </span>
        </div>
        <p className="text-sm text-[#4B4B4B]">
          Dive into a 48-hour coding marathon where innovation meets collaboration.
          This hackathon is designed for tech enthusiasts to showcase their skills and
          create real-world solutions.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700 pt-2">
          <p><strong>Mode:</strong> Online</p>
          <p><strong>Start:</strong> April 20, 2025</p>
          <p><strong>Duration:</strong> 36 hours</p>
          <p><strong>Prize Pool:</strong> $12,000 + Certification</p>
          <p><strong>Hosted by:</strong> InnoHack Events</p>
          <p><strong>Contact:</strong> events@innohack.com</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 pt-4">
          <button className="border border-[#D0D0D0] text-sm text-[#4B4B4B] px-4 py-2 rounded-md hover:bg-gray-100">
            Save for later
          </button>
          <button className="bg-[#FF6B00] hover:bg-[#e55d00] text-white text-sm px-4 py-2 rounded-md">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventHeader1;
