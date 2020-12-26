import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const PaymentButton = styled.button`
  margin-top: 10px;
  width: 120px;
  height: 50px;
  align-self: flex-end;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  outline: none;
  background-image: linear-gradient(to top, #43e97b 0%, #38f9d7 100%);
  font-weight: bold;
  box-shadow: 0 3px 10px 5px rgba($color: #000000, $alpha: 0.2);
  color: rgba($color: #000000, $alpha: 0.8);
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.07);
  }
  &:active {
    transform: scale(1);
  }
`;
