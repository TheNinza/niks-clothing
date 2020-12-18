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
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  PaymentButton,
  TotalContainer,
} from "./checkout.styles";

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
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>TOTAL: ₹{total}</span>
      </TotalContainer>
      {currentUser ? (
        <PaymentButton onClick={handlePayment}>Pay Now</PaymentButton>
      ) : (
        <CustomButton onClick={() => history.push("/signin")}>
          Sign In To Proceed For Payment
        </CustomButton>
      )}
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
