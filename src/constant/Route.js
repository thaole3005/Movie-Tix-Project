import React from "react";

export const userRouter = [
  {
    path: "/",
    component: React.lazy(() => import("../pages/Home/Home")),
  },

  {
    path: "/login",
    component: React.lazy(() => import("../pages/SignIn/SignIn")),
  },
  {
    path: "/moviedetail/:movieId",
    component: React.lazy(() => import("../pages/MovieDetail/MovieDetail")),
  },

];

export const adminRouter = [
  {
    path: "/admin",
    // component: React.lazy(() => import("")),
  },
];
