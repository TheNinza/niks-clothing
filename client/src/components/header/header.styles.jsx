import styled from "styled-components";
import { Link } from "react-router-dom";

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
    box-shadow: inset 0 0 10px 0 rgba(31, 38, 135, 0.37),
      0 0 10px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: -1;
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
