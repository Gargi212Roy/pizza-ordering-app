import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import EmptyCartImage from "../assets/empty-cart3.webp";
import "./style.css";

function Cart() {
  const cart = useSelector((state) => state);

  console.log("CartData", cart);

  return (
    <>
      <NavBar />
      <div className="image">
        <img src={EmptyCartImage} alt="Empty Card" className="img-size" />
        {/* <div className="container">
          {cart.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Cart;
