import React from "react";
import { Redirect } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";

function PublicRoute({ isAuth, children }) {
  if (isAuth) return <Redirect to="/admin" />;
  return <UserLayout>{children}</UserLayout>;
}

export default PublicRoute;
