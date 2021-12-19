import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from 'antd';
import {
   SettingOutlined,
  } from '@ant-design/icons';
import Button from "../../components/Button/Button";
import UserInfo from './UserInfo/UserInfo';
import BookingInfo from './BookingInfo/BookingInfo';

export default function UserDetail(props) {

  const {profile} = useSelector((state) => state.authReducer);
  const [page, setPage] = useState("userInfo");


    return (
        <div className="userdetail_section">
          <div className="userdetail_menu">
            <div className="userdetail_menu_content">
                <div className="userdetail_avatar">
                    <Avatar src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`} />
                    <h6 className="mt-2">Hello <span>
                                {
                                    profile.maLoaiNguoiDung === "KhachHang" ? "Khách Hàng" : "Admin"
                                }
                            </span>
                        </h6>
                    <h6 className="user_name">{profile.taiKhoan}</h6>
                </div>

                <div className="d-flex thongtinchung my-3">
                    <SettingOutlined/>
                    <h4>Thông tin chung</h4>
                </div>

                <div className="changePage_section">
                    <button className= {page === "userInfo" ? "changePage_btn active" : "changePage_btn"}
                    onClick = {() => {setPage("userInfo")}}
                    >Thông tin cá nhân</button>
                    <button className= {page === "bookingInfo" ? "changePage_btn active" : "changePage_btn"}
                    onClick = {() => {setPage("bookingInfo")}}

                    >Vé đã đặt</button>
                </div>
            
            </div>
          </div>
          
          <div className="userdetail_content">
                {
                    page === "userInfo" && (
                        <>
                            <UserInfo/>
                        </>
                    )
                }          
                {
                    page === "bookingInfo" && (
                        <>
                            <BookingInfo/>
                        </>
                    )
                }          
          </div>
        </div>
    )
}
