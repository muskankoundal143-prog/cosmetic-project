import React from 'react'
import Navbar from './assets/Component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/Component/Home/Home'
import About from './assets/Component/About/About'
import Footer from './assets/Component/Footer/Footer'
import Shoppage from './assets/Component/Shoppage/Shoppage'
import { Product } from './assets/Component/Product/Product'
import Category from './assets/Component/Category/Category'
import Blog from './assets/Component/Blog/Blog'
import Contact from './assets/Component/Contact/Contact'
import Account from './assets/Component/Account/Account'
import Cart from './assets/Component/Cart/Cart'

const App = () => {
  return (
    <>
      <Navbar />
 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/shop-page' element={<Shoppage />}/>
        <Route path='product detail' element={<Product />}/>
        <Route path="/category pages" element={<Category />}/>
        <Route path="/blog section" element={<Blog />}/>
        <Route path="/contact page" element={<Contact />}/>
        <Route path="/user account" element={<Account />}/>
        <Route path="/cart-checkout" element={<Cart />}/>
      </Routes>
    
    </>
  )
}

export default App