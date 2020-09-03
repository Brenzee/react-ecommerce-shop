import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <h1>StoreName</h1>
      <i className="fas fa-bars burger" onClick={() => setOpen(!open)}></i>
      <ul className={open ? "nav-list active" : "nav-list"}>
        <li className="nav-item">Home</li>
        <li className="nav-item">Products</li>
        <li className="nav-item">Contacts</li>
        <li className="nav-item">
          <i className="fas fa-shopping-cart"></i>
          <div className="cart-count"></div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
