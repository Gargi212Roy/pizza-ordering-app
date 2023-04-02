import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import EmptyCartImage from "../assets/empty-cart3.webp";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
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
      <div className="flex-cart">
        <div className="container">
          {cart.cart.map((product) => (
            <ProductCard product={product.product} key={product.id} />
          ))}
        </div>
        <div className="container ">
          <h1 className={cart.cart.length === 0 ? "no-image" : ""}>
            {" "}
            Quantity
          </h1>

          {cart.cart.map((product) => (
            <Quantity product={product} key={product.id} />
          ))}
        </div>
      </div>

      <div></div>
    </>
  );
}

function Quantity({ product }) {
  return (
    <div className=" cart-quantity-style">
      <p className="quantity-padding">Product name: {product.product.name}</p>
      <p className="quantity-padding">Quantity: {product.quantity}</p>
      <p className="quantity-padding">
        Price: Rs {product.product.price} per piece
      </p>
    </div>
  );
}

export default Cart;
