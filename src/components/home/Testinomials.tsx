import React from "react";

export default function ThreeDivsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Three Divs Layout
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Div */}
          <div className="bg-white/5  backdrop-filter backdrop-blur-lg  border border-gray-200/30 p-6 rounded-lg shadow-lg">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Person 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Person 1</h3>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
              augue quis leo egestas.
            </p>
          </div>

          {/* Second Div */}
          <div className="bg-white/5  backdrop-filter backdrop-blur-lg  border border-gray-200/30 p-6 rounded-lg shadow-lg">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="Person 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Person 2</h3>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
              augue quis leo egestas.
            </p>
          </div>

          {/* Third Div */}
          <div className="bg-white/5  backdrop-filter backdrop-blur-lg  border border-gray-200/30 p-6 rounded-lg shadow-lg">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Person 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Person 3</h3>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
              augue quis leo egestas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
