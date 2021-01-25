import { motion } from "framer-motion";
import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled(motion.div)`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
  height: 280px;
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
  margin: 10px 0 0 0;
`;
