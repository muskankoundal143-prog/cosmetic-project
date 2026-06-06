import React from 'react'

export const Product = () => {
  return (
   <div className="w-64 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">


  <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 h-56 overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80"
      alt="Hair Cream"
      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
    />


    <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
      29% OFF
    </span>
  </div>


  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800">
      Hair Styling Cream
    </h3>

    <p className="text-sm text-gray-500 mt-1">
      Smooth, silky & long-lasting hold
    </p>


    <div className="flex items-center mt-2">
      <div className="flex text-yellow-400">
        ★★★★★
      </div>
      <span className="ml-2 text-sm text-gray-500">
        4.8 (120 Reviews)
      </span>
    </div>


    <div className="flex items-center mt-4">
      <span className="text-2xl font-bold text-pink-600">
        ₹499
      </span>

      <span className="ml-2 text-sm text-gray-400 line-through">
        ₹699
      </span>
    </div>

  
    <div className="flex gap-2 mt-5">
      <button className="flex-1 border border-pink-500 text-pink-500 py-2 rounded-xl font-medium hover:bg-pink-50 transition">
        Add to Cart
      </button>

      <button className="flex-1 bg-pink-500 text-white py-2 rounded-xl font-medium hover:bg-pink-600 transition">
        Buy Now
      </button>
    </div>
  </div>

</div>
  )
}
