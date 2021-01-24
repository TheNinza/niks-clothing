import React from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const homePageVariants = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const HompPage = () => {
  return (
    <HomePageContainer
      variants={homePageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Directory />
    </HomePageContainer>
  );
};

export default HompPage;
