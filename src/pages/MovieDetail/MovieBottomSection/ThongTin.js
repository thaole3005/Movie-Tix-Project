import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";


export default function ThongTin(props) {

    const {movieInfor} = useSelector(state => state.QuanLyPhimReducer);
    console.log("movieInfor", movieInfor)

    return (
        <div className ="thong_tin_section text-white">
            <div className ="thong_tin_content">
                <div className ="thong_tin_content_left">
                <ul>
                        <li>
                            <p>Tên phim</p>
                            <p>{movieInfor.tenPhim}</p>
                        </li>
                        <li>
                            <p>Ngày công chiếu</p>
                            <p>
                            {moment(movieInfor.ngayKhoiChieu).format('DD/MM/YYYY')}
                            </p>
                        </li>
                        <li>
                            <p>Đạo diễn</p>
                            <p>Đạo Diễn 1</p>
                        </li>
                        <li>
                            <p>Diễn viên</p>
                            <p>Diễn Viên A, B,  C</p>
                        </li>
                        <li>
                            <p>Thể loại</p>
                            <p>Hành Động</p>
                        </li>
                        <li>
                            <p>Định dạng</p>
                            <p>2D/Digital</p>
                        </li>
                        <li>
                            <p>Quốc Gia</p>
                            <p>USA</p>
                        </li>
                    </ul>
                </div>
                <div className ="thong_tin_content_right">
                    <h3 className="text-white text-center">Nội dung</h3>
                    <p>
                        {movieInfor.moTa}
                    </p>
                </div>
            </div>
        </div>
    )
}
