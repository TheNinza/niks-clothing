import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 40vh;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    .custom-button {
      opacity: 0.85;
      transform: scaleY(1);
      cursor: pointer;
      box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.5);
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
  }
`;
export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  bottom: 40px;
  &.custom-button {
    transform-origin: top;
    transform: scaleY(0);
    transition: all 0.2s linear;
  }

  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: all 0.2s linear;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`;
