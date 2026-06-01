import React from 'react'

const Category = () => {
  return (
  <section className='p-6 grid md:grid-cols-2 gap-4'>
    <div className='bg-yellow-100 p-4 rounded'>
      <p className='text-sm'>25% Discount</p>
      <h3 className='font-bold text-lg'>Cosmetic Skin Perfectly</h3>
      <button className='mt-2 bg-pink-600 text-white px-3 py-1 rounded'>Shop Now</button>
    </div>
    <div className='bg-orange-100 p-4 rounded'>
      <p className='text-sm '>30% Discount</p>
<h3 className='font-bold text-lg'>Hydrated Skin Perfecttly</h3>
<button className='mt-2 bg-pink-600 text-white px-3 py-1 rounded'>Shop Now</button>
    </div>
  </section>
  )
}

export default Category