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
  {
    path: "/ticketroom/:maLichChieu",
    component: React.lazy(() => import("../pages/BookingMovie/BookingMovie")),
  },
];

export const adminRouter = [
  {
    path: "/admin",
    // component: React.lazy(() => import("")),
  },
];
