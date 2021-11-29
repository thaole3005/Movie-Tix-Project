import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/img/logo.png";

export default function Header() {
  const history = useHistory();
  const handleDirectPage = () => {
    history.push("/login");
  };
  return (
    <div className="header">
      <nav className="header_content">
        <div className="header_logo">
          <NavLink to="/">
            <img src={logo} className="w-100" alt="logo" />
          </NavLink>
        </div>
        <div className="header_link">
          <ul className="header_link_list">
            <lì className="header_link_item">
              <NavLink to="/">Lịch chiếu</NavLink>
            </lì>
            <lì className="header_link_item">
              <NavLink to="/">Cụm Rạp</NavLink>
            </lì>
            <lì className="header_link_item">
              <NavLink to="/">Tin tức</NavLink>
            </lì>
            <lì className="header_link_item">
              <NavLink to="/">Ứng dụng</NavLink>
            </lì>
          </ul>
        </div>

        <div className="userLogin">
          <span>
            <img
              className="white_user"
              src="https://tix.vn/app/assets/img/avatar.png"
              alt="avatar"
            />
          </span>
          <span className="mx-2" onClick={handleDirectPage}>
            Đăng Nhập
          </span>
          <span> | </span>
          <span className="ml-2">Đăng Ký</span>
        </div>
      </nav>
    </div>
  );
}
