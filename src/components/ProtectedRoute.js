import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { hasToken } from "../utils/token";

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  // console.log(rest)

  return (
    <Route
      {...rest}
      render={props => {
        if (rest.isLogin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: /* hasToken() ? rest.location.pathname :  */"/login",
                // state: {
                //   from: props.location
                // }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;