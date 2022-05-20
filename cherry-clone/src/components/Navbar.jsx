import React from 'react';
import logo from "../assets/logo.svg"
const Navbar = () => {
  return (
    <div>
         <section class="navbar">
        <div class="container">
            <img class="logo" src={logo}/>
            <div class="location">
                <span class="city"> Pune</span>
                <span class="state">Maharashtra, India</span>
            </div>
            <div class="navbar-options">
                <div class="navbar-option">
                    <span class="material-icons"> person_outline</span> Sign In
                </div>
                <div class="navbar-option">
                    <span class="material-icons">
                        shopping_bag
                        </span> Cart
                </div>
                <div class="navbar-option">
                    <span class="material-icons">support</span> Help
                </div>
                <div class="navbar-option">
                    <span class="material-icons">search</span> Search
                </div>
            </div>
        </div>
        
    </section>
    </div>
  )
}

export default Navbar