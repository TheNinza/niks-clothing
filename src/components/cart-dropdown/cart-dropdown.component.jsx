import React, { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  let cartDropDownRef = useRef(null);
  let checkoutButtonRef = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      cartDropDownRef,
      { y: -30, opacity: 0, scaleY: 0, transformOrigin: "top" },
      { y: 0, opacity: 1, scaleY: 1, transition: Power2.easeIn }
    ).fromTo(
      checkoutButtonRef,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, transition: Power2.easeIn }
    );
    return () => {
      tl.reverse();
    };
  }, [tl]);

  return (
    <div
      className="cart-dropdown"
      ref={(el) => (cartDropDownRef = el)}
      onClick={() => tl.reverse()}
    >
      <div className="cart-icons" />
      <CustomButton ref={(el) => (checkoutButtonRef = el)}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
