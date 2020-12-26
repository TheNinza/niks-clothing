import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemImage,
  ItemName,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  let cartItemRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cartItemRef, { x: -50, opacity: 0 }, { x: 0, opacity: 1 });
  }, []);

  return (
    <CartItemContainer ref={(el) => (cartItemRef = el)}>
      <ItemImage src={imageUrl} alt="cartItem" />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <span className="price">
          {quantity} x ₹{price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
