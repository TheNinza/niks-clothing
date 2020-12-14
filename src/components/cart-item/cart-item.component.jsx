import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  let cartItemRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cartItemRef, { x: -50, opacity: 0 }, { x: 0, opacity: 1 });
  }, []);

  return (
    <div className="cart-item" ref={(el) => (cartItemRef = el)}>
      <img src={imageUrl} alt="cartItem" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ₹{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
