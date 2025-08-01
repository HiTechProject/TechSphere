import React from "react";
import EventHeader1 from "../components/EventHeader1";
import EventCode from "../components/EventCode";

const Details = () => {
  return (
    <main className="bg-[#FAFAFA] min-h-screen py-10 px-4 lg:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 lg:p-10 space-y-8">
        {/* Top Header */}
      <EventHeader1/>
      <EventCode/>
    </div>
    </main>
  );
};

export default Details;
