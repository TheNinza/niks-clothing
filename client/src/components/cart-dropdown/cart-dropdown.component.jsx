import React from "react";
// import { gsap, Power2 } from "gsap";

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

const CartDropdown = ({ cartItems, dispatch }) => {
  // let cartDropDownRef = useRef(null);
  // let checkoutButtonRef = useRef(null);

  // const tl = gsap.timeline();

  // useEffect(() => {
  //   tl.fromTo(
  //     cartDropDownRef,
  //     { y: -30, opacity: 0, scaleY: 0, transformOrigin: "top" },
  //     { y: 0, opacity: 1, scaleY: 1, transition: Power2.easeIn }
  //   ).fromTo(
  //     checkoutButtonRef,
  //     { x: 100, opacity: 0 },
  //     { x: 0, opacity: 1, transition: Power2.easeIn }
  //   );
  // }, [tl]);

  const history = useHistory();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
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
