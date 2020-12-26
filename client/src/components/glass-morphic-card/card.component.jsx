import React from "react";

import "./card.styles.scss";

const cardNumber = "4242 4242 4242 4242";

const Card = ({ showCard, handlePayment }) => {
  return (
    <div className={`card ${showCard ? "show" : ""}`} onClick={handlePayment}>
      <div className="circle first" />
      <div className="circle second" />
      <h1 className="description">Your Demo Card For Payment</h1>
      <h2 className="name">YOUR NAME</h2>
      <h2 className="card-number">
        {cardNumber.split(" ").map((char, idx) => (
          <span key={idx} className="number">
            {char}
          </span>
        ))}
      </h2>
      <div className="details-container">
        <p className="details">EXPIRY: 02/25</p>
        <p className="details">CVV: 123</p>
      </div>
      <p>
        Click on card to proceed to payment. Add these details for a successful
        demo payment
      </p>
    </div>
  );
};

export default Card;
