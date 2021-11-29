import React from "react";
import logo from "../../../assets/img/logo.png";

export default function BookingProgress(props) {
  const { changePage } = props;
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
            className={changePage === "chonGhe" ? "step step_active" : "step"}
          >
            <p>
              <span>01</span>CHỌN GHẾ
            </p>
          </div>
          <div
            className="step"
            className={changePage === "payment" ? "step step_active" : "step"}
          >
            <p>
              <span>02</span> THANH TOÁN
            </p>
          </div>
          <div
            className="step"
            className={changePage === "result" ? "step step_active" : "step"}
          >
            <p>
              <span>03</span> KẾT QUẢ ĐẶT VÉ
            </p>
          </div>
        </div>
        <div className="tix_user">
          <img
            className="white_user"
            src="https://ui-avatars.com/api/?name=Kieu"
          />
          <p>Kieutrang</p>
        </div>
      </div>
    </div>
  );
}
