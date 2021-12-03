import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import BookingProgress from './BookingProgress/BookingProgress';
import TicketRoom from './TicketRoom/TicketRoom';
import BookingForm from './BookingForm/BookingForm';
import BookingResult from './BookingResult/BookingResult';
import Payment from './Payment/Payment';
import { NavLink, useHistory } from 'react-router-dom';
import { showConfirm } from './../../components/ConfirmAntd/ConfirmAntd';



export default function BookingMovie(props) {


    const {thongTinPhongVe, arrGheDangChon, currentPage} = useSelector(state => state.QuanLyDatVeReducer);
    // console.log("thongTinPhongVe", thongTinPhongVe);
    // console.log("currentPage", currentPage)

    const {profile} = useSelector((state) => state.authReducer);
    console.log("profile", profile)
    const history = useHistory();


    const dispatch = useDispatch();
    

    useEffect(() => {
        const {maLichChieu} = props.match.params;
        if (Object.keys(profile).length !== 0) {
            //nếu user đã đăng nhập rồi thì mới lấy thông tin phòng vé
            dispatch(layDanhSachPhongVeAction(maLichChieu));
        }
    }, [])



    if (Object.keys(profile).length === 0) {
        showConfirm("Bạn chưa đăng nhập?",
        <p>Bạn cần đăng nhập để đặt vé</p>,
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


    return (
        <div className="booking_movie_section">
            <div className="booking_movie_bg"></div>
            
            <BookingProgress
                 currentPage={currentPage}
            />


            <div className="booking_movie_content">

                    {
                        currentPage === "chonGhe" && (
                            <>
                                <TicketRoom thongTinPhongVe={thongTinPhongVe}/>
                            </>
                        )
                    }

                    {
                        currentPage === "payment" && (
                            <Payment thongTinPhongVe={thongTinPhongVe}/>
                            )
                        }

                    {
                        currentPage === "result" && (
                            <BookingResult thongTinPhongVe={thongTinPhongVe}/>
                            )
                    }
                   
                        <BookingForm thongTinPhongVe={thongTinPhongVe}/>
                
                
            </div>
        </div>
    )
}
