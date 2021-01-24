import styled from "styled-components";
import { motion } from "framer-motion";
export const SignInAndSignUpContainer = styled(motion.div)`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    padding: 10px;
  }
`;
