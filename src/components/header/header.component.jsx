import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, Power2 } from "gsap";

import { ReactComponent as Logo } from "../../assets/heroLogo.svg";

import "./header.styles.scss";

const Header = () => {
  let headerRef = useRef(null);
  let logoRef = useRef(null);
  let optionsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(headerRef, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(logoRef, { x: "40vw" }, { x: 0, duration: 0.5 })
      .fromTo(optionsRef, { x: "-40vw" }, { x: 0, duration: 0.5 }, "-=0.5");
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
      </div>
    </div>
  );
};

export default Header;
