import React from "react";
// import { gsap, Power2 } from "gsap";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

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
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
