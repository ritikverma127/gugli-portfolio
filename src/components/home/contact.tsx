"use client";
import { useState } from "react";

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "1",
    website: "",
    job: "1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", formData, message);
    // Handle the form submission logic here (e.g., send data to an API)
  };

  return (
    <section className="py-20 text-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-12">
          Contact Us
        </h1>

        {/* Top Section - Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {/* Collaborate */}
          <div className="  bg-white/5 shadow-xl backdrop-filter backdrop-blur-md  border border-gray-200/30 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Collaborate</h3>
            <p className="text-lg">
              We'd love to hear from you! Reach out for business collaborations,
              press inquiries, or just to say hello.
            </p>
            <a
              href="mailto:hello@tailus.io"
              className="text-lg text-blue-300 hover:text-blue-200"
            >
              hello@tailus.io
            </a>
          </div>

          {/* Press */}
          <div className="bg-white/5 shadow-xl backdrop-filter backdrop-blur-md  border border-gray-200/30 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Press</h3>
            <p className="text-lg">
              For press inquiries, please reach out using the following email.
            </p>
            <a
              href="mailto:press@tailus.io"
              className="text-lg text-blue-300 hover:text-blue-200"
            >
              press@tailus.io
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white/5 shadow-xl backdrop-filter backdrop-blur-md  border border-gray-200/30 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Phone</h3>
            <p className="text-lg">Call us at:</p>
            <p className="text-lg">+243 000 000 000</p>
          </div>
        </div>

        {/* Bottom Section - Contact Form */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg w-full mx-auto">
          <h3 className="text-3xl font-semibold text-gray-100 mb-4 sm:mb-6">
            Get in Touch
          </h3>
          <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6">
            Fill out the form below and we will get back to you as soon as
            possible!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 mt-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 mt-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                rows="4"
                required
                className="w-full px-4 py-7 mt-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your message here"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
