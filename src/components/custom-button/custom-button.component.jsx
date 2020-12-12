import React from "react";

import "./custom-button.styles.scss";

const CustomButton = (
  { children, isGoogleSignIn, inverted, ...otherProps },
  ref
) => {
  return (
    <button
      ref={ref}
      className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(CustomButton);
