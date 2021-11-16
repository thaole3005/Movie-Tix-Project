import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/img/logo.png';
import { Avatar } from 'antd';

export default function Header() {
    return (
        <div className ="header">
            <nav className ="header_content">
                <div className ="header_logo">
                    <NavLink to="/">
                        <img src={logo} className="w-100"/>
                    </NavLink>
                </div>
                <div className ="header_link">
                    <ul className = "header_link_list">
                        <lì className = "header_link_item">
                            <NavLink
                                to ="/"
                            >
                                Lịch chiếu
                            </NavLink>
                        </lì>
                        <lì className = "header_link_item">
                            <NavLink
                                to ="/"
                            >
                                Cụm Rạp
                            </NavLink>
                        </lì>
                        <lì className = "header_link_item">
                            <NavLink
                                to ="/"
                            >
                                Tin tức
                            </NavLink>
                        </lì>
                        <lì className = "header_link_item">
                            <NavLink
                                to ="/"
                            >
                                Ứng dụng
                            </NavLink>
                        </lì>
                    </ul>
                </div>

                <div className = "userLogin">
                    <span>
                        <img className = "white_user"src="https://tix.vn/app/assets/img/avatar.png"/>
                    </span>
                    <span className = "mx-2">
                        Đăng Nhập
                    </span> 
                    <span> | </span>
                    <span className ="ml-2">
                         Đăng Ký
                    </span>
                </div>

            </nav>

            
        </div>
    )
}
