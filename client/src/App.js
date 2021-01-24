import React, { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundry from "./components/error-boundry/error-boundry.component";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { AnimatePresence } from "framer-motion";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const location = useLocation();

  return (
    <div style={{ position: "relative" }}>
      <GlobalStyle />
      <Header />
      <ErrorBoundry>
        <Switch location={location} key={location.pathname}>
          <Suspense fallback={<Spinner id="spinner" />}>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout">
              <CheckoutPage />
            </Route>
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </Switch>
      </ErrorBoundry>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
