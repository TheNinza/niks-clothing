import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const spinnerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Spinner = () => {
  return (
    <SpinnerOverlay
      variants={spinnerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
