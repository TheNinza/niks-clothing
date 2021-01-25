import { motion } from "framer-motion";
import styled from "styled-components";

export const CheckoutPageContainer = styled(motion.div)`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 10px;
  }
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
  width: 20%;
  text-align: center;
  &:last-child {
    text-align: right;
  }
  &:first-child {
    text-align: left;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
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

  @media screen and (max-width: 800px) {
    width: 90px;
    height: 35px;
  }
`;
