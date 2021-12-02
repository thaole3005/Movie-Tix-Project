import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/img/logo.png";

export default function Header() {
  const history = useHistory();
  const {profile} = useSelector((state) => state.authReducer);

  const handleDirectPage = () => {
    history.push("/login");
  };

  const renderUserLogin = () => {
    if(Object.keys(profile).length === 0) {
      return (
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
      )
    } else {
      return (
        <div className="userLogin">
          <span>
          <img
                className="white_user"
                src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`}
                alt ={profile.taiKhoan}
              />
          </span>
          <span className="mx-2" onClick={handleDirectPage}>
          {profile.taiKhoan}
          </span>
          <span> | </span>
          <span className="ml-2">Đăng xuất</span>
      </div>
      )
    }
      
  }

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
            <li className="header_link_item">
              <NavLink to="/">Lịch chiếu</NavLink>
            </li>
            <li className="header_link_item">
              <NavLink to="/">Cụm Rạp</NavLink>
            </li>
            <li className="header_link_item">
              <NavLink to="/">Tin tức</NavLink>
            </li>
            <li className="header_link_item">
              <NavLink to="/">Ứng dụng</NavLink>
            </li>
          </ul>
        </div>

        {
           
         renderUserLogin()
         
        }

        {/* // <div className="userLogin">
        //   <span>
        //     <img */}
        {/* //       className="white_user"
        //       src="https://tix.vn/app/assets/img/avatar.png"
        //       alt="avatar"
        //     />
        //   </span>
        //   <span className="mx-2" onClick={handleDirectPage}>
        //     Đăng Nhập
        //   </span>
        //   <span> | </span>
        //   <span className="ml-2">Đăng Ký</span>
        // </div> */}
      </nav>
    </div>
  );
}
