import React from "react";
import { useSelector } from "react-redux";
import logo from "../../../assets/img/logo.png";
import avatar from "../../../assets/img/avatar.png";

export default function BookingProgress(props) {

  const { currentPage } = props;

  const {profile} = useSelector((state) => state.authReducer);


  return (
    <div className="booking_progress_container">
      <div className="booking_progress_content">
        <div className="tix_logo">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <div className="tix_progress">
          <div
            className={currentPage === "chonGhe" ? "step step_active" : "step"}
          >
            <p>
              <span>01</span>CHỌN GHẾ
            </p>
          </div>
          <div
            className={currentPage === "payment" ? "step step_active" : "step"}
          >
            <p>
              <span>02</span> THANH TOÁN
            </p>
          </div>
          <div
            className={currentPage === "result" ? "step step_active" : "step"}
          >
            <p>
              <span>03</span> KẾT QUẢ ĐẶT VÉ
            </p>
          </div>
        </div>

        {
          (Object.keys(profile).length === 0) ? 
           <div className="tix_user">
            <img
              className="white_user"
              src={avatar}
            />
            
          </div>
          :   
          <div className="tix_user">
            <img
              className="white_user"
              src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`}
              alt ={profile.taiKhoan}
            />
            <p>{profile.taiKhoan}</p>
          </div>
        }
    
      </div>
    </div>
  );
}
