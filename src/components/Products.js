import React from "react";
import "./Products.css";

function Products(props) {
  const placeProduct = props.items.map((item, index) => {
    return (
      <div key={index} className="product">
        <img src={item.img} alt="" width="250px" />
        <h2>{item.name}</h2>
        <h3>${item.price}</h3>
        <button>Add to Cart</button>
      </div>
    );
  });
  return <div className="products">{placeProduct}</div>;
}

export default Products;
