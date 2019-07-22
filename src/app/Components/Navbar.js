import React, { Component } from "react";
import './../asset/scss/navbar.scss';

class Navbar extends Component {

  render() {
    const categories = ['Women', 'Men', 'Kid', 'Shoes', 'Brands'];
    return (
      <nav className="navbar" >
        <div className="navbar__menu">
          <h1 className="site-title">SHOP-IT</h1>
          <ul>{categories.map(category =>  <li key={category }>{category}</li>)} </ul>
          <div className="navbar__right">
            <input type="search" placeholder="search anything" />
          </div>
        </div>
      </nav>
    )
  }
}





export default Navbar;