import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./checkout.styles.scss";

const stripePromise = loadStripe(
  "pk_test_51HytdnG6rUbsulVXed5xUVd6pCBjpL2IF615zGIfT3pGgqz8aj31JdDizRJ2d75oi9BJLxcHUpHpeWuRqWuCmaCP00FYfhASVm"
);

const CheckoutPage = ({ cartItems, total, currentUser }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order successful");
      console.log("success");
      window.alert("order successful");
    }
    if (query.get("canceled")) {
      setMessage("Order canceled");
      console.log("canceled");
      window.alert(
        "order cancelled, if any amount deducted from your bank, it will be refunded"
      );
    }
  }, []);

  const handlePayment = async () => {
    console.log("payment started");
    const stripe = await stripePromise;
    console.log(cartItems);

    const response = await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cartItems: cartItems,
      }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result);
    }
  };

  const history = useHistory();
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ₹{total}</span>
      </div>
      {currentUser ? (
        <button className="payment-button" onClick={handlePayment}>
          Pay Now
        </button>
      ) : (
        <CustomButton onClick={() => history.push("/signin")}>
          Sign In To Proceed For Payment
        </CustomButton>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
