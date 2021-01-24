import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from "./menu-item.styles";

const menuItemsVariants = {
  hidden: {
    scale: 0,
    y: -10,
  },
  show: {
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 150,
    },
  },
};

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <MenuItemContainer
      variants={menuItemsVariants}
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
