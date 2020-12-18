import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }, ref) => {
  return (
    <CustomButtonContainer ref={ref} {...props}>
      {children}
    </CustomButtonContainer>
  );
};

export default React.forwardRef(CustomButton);
