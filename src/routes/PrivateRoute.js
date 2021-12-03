import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import { showConfirm } from './../components/ConfirmAntd/ConfirmAntd';

function PrivateRoute(props) {
  // const { isAuth, children } = props;
  // if (!isAuth) return <Redirect to="/" />;

  const history = useHistory();
  const {profile} = useSelector((state) => state.authReducer);
  if (Object.keys(profile).length === 0) {
    //nếu chưa đăng nhập
    return <Redirect to="/login" />;
  }

  if(profile.maLoaiNguoiDung !== "QuanTri") {
    //nếu không phải là admin
    showConfirm(
      "Bạn không đủ quyền truy cập trang này", 
      <p>Hãy đăng nhập với tư cách Admin!!!</p>,
      () => {
        history.push("/login");
    },

    "Trang chủ",
    "Đăng nhập",
    () => {
       history.push("/");
    }
      
    )

    return null;
  }

  const {children } = props;

  return <AdminLayout>{children}</AdminLayout>;
}

export default PrivateRoute;
