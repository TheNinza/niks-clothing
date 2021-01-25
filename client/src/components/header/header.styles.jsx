import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const animation = keyframes`
from{
  box-shadow: inset 0 0 10px 0 rgba(31, 38, 135, 0.37),
      0 0 10px 0 rgba(31, 38, 135, 0.37);
}
to{
  box-shadow: inset 0 0 10px 0 rgba(31, 38, 135, 0.16),
      0 0 10px 0 rgba(31, 38, 135, 0.16);
}
`;

const logoAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(360deg);
  }

  75% {
    transform: rotate(540deg);
  }

  100% {
    transform: rotate(720deg);
  }
`;

export const HeaderContainer = styled.div`
  height: 6vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  position: relative;
  animation: ${logoAnimation} 1s linear;

  .logo {
    width: 100%;
    height: 100%;
  }

  ::after {
    content: "";
    height: 80px;
    width: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: -1;
    animation: ${animation} 2s ease infinite alternate;
  }

  @media screen and (max-width: 800px) {
    width: 50px;

    .logo {
      width: 100%;
      height: 100%;
    }

    ::after {
      height: 50px;
      width: 50px;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    justify-content: flex-end;
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding: 5px;
    &.username {
      display: none;
    }
  }
`;
