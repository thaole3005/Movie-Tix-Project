import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import BookingProgress from './BookingProgress/BookingProgress';
import TicketRoom from './TicketRoom/TicketRoom';
import BookingForm from './BookingForm/BookingForm';

export default function BookingMovie(props) {


    const {thongTinPhongVe, arrGheDangChon} = useSelector(state => state.QuanLyDatVeReducer);
    console.log("thongTinPhongVe", thongTinPhongVe)
    const dispatch = useDispatch();

  const [changePage, setChangePage] = useState("chonGhe");





    useEffect(() => {
        const {maLichChieu} = props.match.params;
        dispatch(layDanhSachPhongVeAction(maLichChieu));
    }, [])

    return (
        <div className="booking_movie_section">
            <div className="booking_movie_bg"></div>
            
            <BookingProgress
                 changePage={changePage}
            />


            <div className="booking_movie_content d-flex">
                
                    <TicketRoom thongTinPhongVe={thongTinPhongVe}/>
                   
                
                    <BookingForm/>
                
            </div>
        </div>
    )
}
