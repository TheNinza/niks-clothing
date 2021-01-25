import { motion } from "framer-motion";
import styled from "styled-components";

export const CartItemContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const ItemImage = styled.img`
  width: 30%;
  border-radius: 10px;
`;
export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
export const ItemName = styled.span`
  font-size: 16px;
`;
