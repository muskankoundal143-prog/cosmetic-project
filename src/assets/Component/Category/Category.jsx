import React from "react";

const Category = () => {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <div className="bg-yellow-100 p-6 rounded-lg">
        <p className="text-sm text-gray-600">25% Discount</p>
        <h3 className="text-xl font-bold mt-2">
          Cosmetic Skin Perfectly
        </h3>
        <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded">
          Shop Now
        </button>
      </div>

      <div className="bg-orange-100 p-6 rounded-lg">
        <p className="text-sm text-gray-600">30% Discount</p>
        <h3 className="text-xl font-bold mt-2">
          Hydrated Skin Perfectly
        </h3>
        <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded">
          Shop Now
        </button>
      </div>

    </section>
  );
};

export default Category;