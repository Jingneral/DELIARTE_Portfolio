import React from "react";

// Automatically import all images from techstack folder
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const techImages = importAll(
  require.context("../assets/techstack", false, /\.(png|jpe?g|svg)$/)
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 
                 bg-gradient-to-b from-white to-purple-50"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-purple-900 tracking-wide">
        My Tech Stack
      </h2>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
        {Object.entries(techImages).map(([name, src]) => (
          <div
            key={name}
            className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 
                       flex flex-col items-center justify-center 
                       transition transform hover:-translate-y-2 hover:shadow-xl hover:scale-105"
          >
            <img
              src={src}
              alt={name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform 
                       drop-shadow-md group-hover:scale-110"
            />

            <p className="mt-4 text-sm font-semibold text-gray-700 text-center">
              {name.replace(/\.(png|jpg|jpeg|svg)/, "")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
