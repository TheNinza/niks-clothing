import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/heroLogo.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
  let headerRef = useRef(null);
  let logoRef = useRef(null);
  let optionsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, transition: Power3.easeIn }
    )
      .fromTo(
        logoRef,
        { x: "35vw" },
        { x: 0, duration: 0.5, transition: Power3.easeOut }
      )
      .fromTo(
        optionsRef,
        { x: "-35vw" },
        { x: 0, duration: 0.5, transition: Power3.easeOut },
        "-=0.5"
      );
  }, []);

  return (
    <div className="header" ref={(e) => (headerRef = e)}>
      <Link className="logo-container" to="/">
        <Logo className="logo" ref={(e) => (logoRef = e)} />
      </Link>
      <div className="options" ref={(e) => (optionsRef = e)}>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
