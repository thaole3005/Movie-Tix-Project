import React from 'react';
import { useSelector } from 'react-redux';

export default function UserDetail(props) {

  const {profile} = useSelector((state) => state.authReducer);


    return (
        <div className="userdetail_section">
            Trang UserDetail

            <h2>Hello {profile.taiKhoan}</h2>

        </div>
    )
}
