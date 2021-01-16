import React from "react";
import BrokenPage from "../../pages/404Page/brokenPage.component";

class ErrorBoundry extends React.Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasErrored) {
      return <BrokenPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
