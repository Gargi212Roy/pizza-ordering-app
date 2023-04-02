import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import EmptyCartImage from "../assets/empty-cart3.webp";
import "./style.css";

function Cart() {
  const cart = useSelector((state) => state);

  console.log("CartData", cart.cart);

  return (
    <>
      <NavBar />
      <div className={cart.cart.length === 0 ? "image" : "no-image"}>
        <img src={EmptyCartImage} alt="Empty Card" className="img-size" />
      </div>
      <div className="container">
        {cart.cart.map((product) => (
          <ProductCard product={product.product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Cart;
