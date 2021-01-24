import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const signInSignUpPageVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
    scaleY: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    scaleY: 1,
    transition: {
      type: "spring",
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer
      variants={signInSignUpPageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUpPage;
