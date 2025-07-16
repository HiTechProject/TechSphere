import React, { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    teamName: "",
    member1: "",
    member2: "",
    member3: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // Send data to backend here
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="bg-[#F5F5F5] rounded-xl max-w-xl mx-auto p-6 shadow-inner">

        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Heading */}
          <h2 className="text-xl font-bold text-center mb-1">
            Join Tech Innovators Hackathon 2025!
          </h2>
          <p className="text-sm text-gray-600 text-center mb-5">
            Innovate. Build. Compete. Register now and be part of a global tech revolution!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="text"
              name="teamName"
              placeholder="Team Name"
              value={form.teamName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="member1"
              placeholder="Team Member 1"
              value={form.member1}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="member2"
              placeholder="Team Member 2"
              value={form.member2}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="member3"
              placeholder="Team Member 3"
              value={form.member3}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="submit"
              className="w-full bg-[#FF6B00] hover:bg-[#e65a00] text-white font-medium py-2 rounded-md"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
