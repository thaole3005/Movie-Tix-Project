import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/img/logo.png";
import { Menu, Dropdown, Button } from 'antd';


const menuUser = (
  <Menu>
    <Menu.Item>
      <NavLink to="/userdetail">My Account</NavLink>
    </Menu.Item>

  </Menu>
);

const menuAdmin = (
  <Menu>
    <Menu.Item>
      <NavLink to="/userdetail">My Account</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to="/admin/dashboard">Admin</NavLink>
    </Menu.Item>
  
  </Menu>
);



export default function Header() {
  const history = useHistory();
  const {profile, isAuthenticated} = useSelector((state) => state.authReducer);

  const handleDirectPage = () => {
    history.push("/login");
  };

  const renderUserLogin = () => {
    if(Object.keys(profile).length === 0) {
      //chưa đăng nhập
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
      //đã đăng nhập
      let menu = menuUser;

      //nếu là admin 
      if(isAuthenticated) {
        menu = menuAdmin;
      }

      return (
        <div className="userLogin">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Button className="hidden_button">
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
              </Button>
          </Dropdown>
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
