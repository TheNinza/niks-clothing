import React from "react";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/heroLogo.svg";

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";
import { AnimatePresence } from "framer-motion";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        {currentUser && (
          <OptionLink className="username" as="div">
            Hi {currentUser.displayName} !
          </OptionLink>
        )}

        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink as="a" href="https://www.linkedin.com/in/theninza/">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      <AnimatePresence>{hidden ? null : <CartDropdown />}</AnimatePresence>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
