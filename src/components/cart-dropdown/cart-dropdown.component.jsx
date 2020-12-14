import React from "react";
// import { gsap, Power2 } from "gsap";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => {
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

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
