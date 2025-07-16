import React from "react";
import EventHeader2 from "../components/EventHeader2";
import EventCode from "../components/EventCode";

const Details2 = () => {
  return (
    <main className="bg-[#FAFAFA] min-h-screen py-10 px-4 lg:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 lg:p-10 space-y-8">
        {/* Top Header */}
      <EventHeader2/>
      <EventCode/>
    </div>
    </main>
  );
};
export default Details2;
