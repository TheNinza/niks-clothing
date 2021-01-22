import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemImage,
  ItemName,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
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
