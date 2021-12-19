import React from "react";
import Films from './../pages/Admin/Films/Films';
import AddNewFilm from './../pages/Admin/Films/AddNewFilm/AddNewFilm';

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
    path: "/userdetail",
    component: React.lazy(() => import("../pages/UserDetail/UserDetail")),
  },

];

export const adminRouter = [
  {
    path: "/admin/dashboard",
    component: React.lazy(() => import("../pages/Admin/Dashboard/Dashboard")),
  },
  {
    path: "/admin/users",
    component: React.lazy(() => import("../pages/Admin/Users/Users")),
  },

  {
    path: "/admin/films",
    // component: <Films/>
    component: React.lazy(() => import("../pages/Admin/Films/Films")),
  },
  {
    path: "/admin/films/editfilm/:movieId",
    // component: <Films/>
    component: React.lazy(() => import("../pages/Admin/Films/EditFilm/EditFilm")),
  },
  {
    path: "/admin/films/showtime/:movieId/:tenphim",
    // component: <Films/>
    component: React.lazy(() => import("../pages/Admin/Films/ShowTime/ShowTime")),
  },
  {
    path: "/admin/films/addnewfilm",
    // component: <AddNewFilm/>
    component: React.lazy(() => import("../pages/Admin/Films/AddNewFilm/AddNewFilm")),
  },

];
