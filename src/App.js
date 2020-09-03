import React from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const products = [
    {
      name: "Boots",
      price: "17.99",
      img:
        "https://images.timberland.com/is/image/timberland/10061024-HERO?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0",
    },
    {
      name: "T-shirt",
      price: "13.99",
      img:
        "https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg",
    },
    {
      name: "Shorts",
      price: "10.99",
      img:
        "https://static.pullandbear.net/2/photos/2020/I/0/1/p/5690/304/827/5690304827_1_1_3.jpg?t=1597845844107",
    },
  ];

  return (
    <div className="store">
      <Header />
      <Products items={products} />
    </div>
  );
}

export default App;
