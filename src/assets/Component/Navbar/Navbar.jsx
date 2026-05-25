import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
<ul>
   <li><Link to="/">Home</Link></li>
   <li><Link to="/about">About</Link></li>
    <li><Link to="/shop-page">Shoppage</Link></li>
    <li><Link to="/product detail">Product Detail Pages</Link></li>
    <li><Link to="/category pages">Category Pages</Link></li>
    <li><Link to="/blog section">Blog Section</Link></li>      
    <li><Link to="/contact page">Contact Page</Link></li>    
    <li><Link to="/user account">User Account Pages</Link></li>
    <li><Link to="/cart-checkout">Cart-Checkout</Link></li>
</ul>

      </nav>
    </div>
  )
}

export default Navbar