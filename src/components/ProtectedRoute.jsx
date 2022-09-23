// IMPORTS:
import React from "react";
import { Redirect } from "react-router-dom";

function ProtectedRoute({ loggedIn, children }) {
  console.log(loggedIn);
  return loggedIn ? children : <Redirect to="./sign-in" />;
}

export default ProtectedRoute;
