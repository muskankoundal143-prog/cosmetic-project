import React from "react";

const Home = () => {
  return (
    <>

      <div className="bg-pink-50 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-600">
            Tiava
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Glow Naturally, Shine Beautifully
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to Tiava — your destination for premium skincare & beauty
            essentials. We believe in natural beauty, luxury care, and
            confidence that shines from within.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-10">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-pink-600 font-bold text-xl">
                Natural Beauty
              </h3>
              <p className="text-gray-600 mt-2">
                Safe, organic & skin-friendly products
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-pink-600 font-bold text-xl">
                Luxury Care
              </h3>
              <p className="text-gray-600 mt-2">
                Premium cosmetic experience
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-pink-600 font-bold text-xl">
                Trusted Brand
              </h3>
              <p className="text-gray-600 mt-2">
                Loved by beauty experts
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-6">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition">
              Shop Now
            </button>

            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>


      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-pink-600">
              Our Best Sellers
            </h2>
            <p className="text-gray-600 mt-4">
              Discover our most loved skincare and beauty essentials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
  
            <div className="bg-pink-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a"
                alt="Face Serum"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Vitamin C Serum
                </h3>
                <p className="text-gray-600 mt-2">
                  Brightens skin and reduces dark spots naturally.
                </p>
                <button className="mt-4 bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700">
                  View Product
                </button>
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
                alt="Moisturizer"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Hydrating Moisturizer
                </h3>
                <p className="text-gray-600 mt-2">
                  Deep nourishment for soft and glowing skin.
                </p>
                <button className="mt-4 bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700">
                  View Product
                </button>
              </div>
            </div>

    
            <div className="bg-pink-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                alt="Face Wash"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Gentle Face Wash
                </h3>
                <p className="text-gray-600 mt-2">
                  Cleanses impurities while maintaining moisture.
                </p>
                <button className="mt-4 bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700">
                  View Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-pink-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-pink-600">
        Why Choose Tiava?
      </h2>
      <p className="text-gray-600 mt-4">
        We combine nature, innovation, and luxury to bring out your best glow.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-4xl mb-4">🌿</div>
        <h3 className="text-xl font-semibold text-gray-800">
          Natural Ingredients
        </h3>
        <p className="text-gray-600 mt-2">
          Carefully selected ingredients that are gentle on your skin.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-4xl mb-4">✨</div>
        <h3 className="text-xl font-semibold text-gray-800">
          Premium Quality
        </h3>
        <p className="text-gray-600 mt-2">
          Luxury skincare products crafted with excellence.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-4xl mb-4">🧴</div>
        <h3 className="text-xl font-semibold text-gray-800">
          All Skin Types
        </h3>
        <p className="text-gray-600 mt-2">
          Suitable for dry, oily, sensitive, and combination skin.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-4xl mb-4">💖</div>
        <h3 className="text-xl font-semibold text-gray-800">
          Customer Loved
        </h3>
        <p className="text-gray-600 mt-2">
          Trusted by thousands for radiant and healthy skin.
        </p>
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default Home;