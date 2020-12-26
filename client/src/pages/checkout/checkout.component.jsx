import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Card from "../../components/glass-morphic-card/card.component";
import { clearCart } from "../../redux/cart/cart.actions";
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

const CheckoutPage = ({ cartItems, total, currentUser, clearCart }) => {
  const history = useHistory();

  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      console.log("success");
      window.alert("order placed");
      clearCart();
      history.push("/");
    }
    if (query.get("canceled")) {
      console.log("canceled");
      window.alert(
        "order cancelled, if any amount deducted from your bank, it will be refunded"
      );
      history.push("/checkout");
    }
  }, [clearCart, history]);

  const handlePayment = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cartItems,
        currentUser,
      }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      window.alert(
        "Temporary Error Occured, if any amount deducted from your bank, it will be refunded"
      );
      console.log(result);
    }
  };

  return (
    <CheckoutPageContainer
      onClick={() => {
        if (showCard) {
          setShowCard(false);
        }
      }}
    >
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
        total ? (
          <PaymentButton onClick={() => setShowCard(true)}>
            Pay Now
          </PaymentButton>
        ) : null
      ) : (
        <CustomButton onClick={() => history.push("/signin")}>
          Sign In To Proceed For Payment
        </CustomButton>
      )}
      <Card showCard={showCard} handlePayment={handlePayment} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
