import React from "react";

import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  CartDropdownContainer,
  CartItemsContainer,
  CheckoutButton,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";

const cartDropdownVariants = {
  hidden: {
    y: -50,
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    y: 0,
    scaleY: 1,
    opacity: 1,
    transformOrigin: "top",
    transition: {
      ease: "easeInOut",
      type: "spring",
    },
  },
};

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  return (
    <CartDropdownContainer
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={cartDropdownVariants}
    >
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} id={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>

      <CheckoutButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
