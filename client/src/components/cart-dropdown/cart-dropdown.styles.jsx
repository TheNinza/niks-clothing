import { motion } from "framer-motion";
import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled(motion.div)`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 65px;
  right: 0px;
  z-index: 5;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    padding: 10px;
    width: 200px;
    height: 300px;
  }
`;
export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CheckoutButton = styled(CustomButton)`
  margin-top: auto;
  margin: 3px 0;
`;
