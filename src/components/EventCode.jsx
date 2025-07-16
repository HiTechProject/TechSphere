import React from "react";

const EventCode = () => {
  return (
    <>
      {/* Navigation Tabs (Static Display) */}
      <div className="flex gap-4 text-sm font-medium border-b border-gray-200 pb-2">
        <button className="text-[#FF6B00] border-b-2 border-[#FF6B00] pb-1">Eligibility</button>
        <button className="text-gray-500 hover:text-[#FF6B00]">Timeline</button>
        <button className="text-gray-500 hover:text-[#FF6B00]">Details</button>
        <button className="text-gray-500 hover:text-[#FF6B00]">Speaker Info</button>
      </div>

      <div className="bg-[#FFF8EC] min-h-screen py-10 px-4 lg:px-20 space-y-6">

        {/* Eligibility */}
        <div className="bg-white p-4 rounded-md shadow text-sm text-gray-800 font-medium">
          <h1 className="text-lg font-bold">Eligibility</h1>
          Engineering Students · Undergraduate · Postgraduate
        </div>

        {/* Timeline */}
        <div className="bg-white border border-gray-200 rounded-md shadow p-5 text-sm text-gray-800 space-y-1">
          <h1 className="text-lg font-bold mb-2">Timeline</h1>
          <ul className="space-y-1">
            <li>12:30 PM – Check-In & Event Briefing</li>
            <li>1:30 PM – Team Formation & Problem Statements</li>
            <li>2:00 PM – Coding Begins</li>
            <li>4:00 PM – Mentorship</li>
            <li>6:00 PM – Midway Progress Check</li>
            <li>8:00 PM – Submission Deadline</li>
            <li>8:30 PM – Presentations & Judging</li>
            <li>9:30 PM – Winner Announcements</li>
          </ul>
        </div>

        {/* Details */}
        <div className="bg-white border border-gray-200 rounded-md shadow p-5 text-sm text-gray-800 space-y-6">
          <h1 className="text-lg font-bold">Details</h1>

          {/* About the Hackathon */}
          <div>
            <h2 className="font-bold">About the Hackathon</h2>
            <p>
              The Tech Innovators Hackathon 2025 is your chance to innovate, create, and collaborate with a global community of tech enthusiasts.
              Whether you’re a developer, designer, or problem solver, this event brings together individuals from diverse backgrounds to tackle
              real-world challenges and turn ideas into impactful solutions.
            </p>
          </div>

          {/* Themes & Focus Areas */}
          <div>
            <h2 className="font-bold">Themes & Focus Areas</h2>
            <p>Participants can work on the following themes:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Artificial Intelligence: Build AI-powered tools and solutions.</li>
              <li>Sustainability: Create projects addressing environmental challenges.</li>
              <li>FinTech: Develop innovative financial technologies.</li>
              <li>HealthTech: Build apps and platforms to revolutionize healthcare.</li>
              <li>Open Innovation: Work on unique ideas outside the box.</li>
            </ul>
          </div>

          {/* Prizes & Rewards */}
          <div>
            <h2 className="font-bold">Prizes & Rewards</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>1st Prize: $10,000 + Mentorship Opportunity</li>
              <li>2nd Prize: $5,000 + Tech Gadgets</li>
              <li>Special Mention: $2,000 + Swag Kits</li>
            </ul>
          </div>

          {/* Why Join? */}
          <div>
            <h2 className="font-bold">Why Join?</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Networking: Meet like-minded innovators and industry leaders.</li>
              <li>Learning: Access to expert mentorship and workshops.</li>
              <li>Showcase Skills: Gain recognition for your projects.</li>
              <li>Career Growth: Top participants may receive internship or job offers.</li>
            </ul>
          </div>
        </div>

        {/* Speaker Section */}
        <div className="bg-white border border-gray-200 rounded-md shadow p-5 flex gap-4 items-center text-sm text-gray-800">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Speaker"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-lg font-bold">Speaker Info</h1>
            <p className="font-semibold">AMAN RATHI</p>
            <p className="text-gray-600">Ex-AI Researcher at Meta</p>
            <p className="text-gray-500">Topic: “The Future of AI & Innovation in Industry”</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCode;
