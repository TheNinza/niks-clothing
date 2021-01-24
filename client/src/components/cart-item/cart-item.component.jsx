import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemImage,
  ItemName,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer
      initial={{ x: "-100%" }}
      animate={{
        x: 0,
        transition: { delay: 0.3, ease: "easeInOut", type: "spring" },
      }}
    >
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

export default React.memo(CartItem);
