import { AnimatePresence } from "framer-motion";
import React from "react";
import Spinner from "../spinner/spinner.component";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <Spinner id="spinner" />
  ) : (
    <WrappedComponent id="wrcomp" {...otherProps} />
  );
};

export default WithSpinner;
