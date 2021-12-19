import React, {memo, useEffect} from "react";
import { useSelector } from "react-redux";
import screen from '../../../assets/img/screen.png';
import _ from 'lodash';
import SeatRow from './SeatRow';
import SeatNote from './SeatNote';

function TicketRoom(props) {

    const {thongTinPhim, danhSachGhe} = props.thongTinPhongVe;
    console.log("thongTinPhim", thongTinPhim);
    const { arrGheDangChon} = useSelector(state => state.QuanLyDatVeReducer);
    // console.log("arrGheDangChon", arrGheDangChon);
    
   let danhSachGheChunk = _.chunk(danhSachGhe, 16);
   console.log("danhSachGheChunk", danhSachGheChunk)

  return (
    <div className="ticket_room_container bg-white">
        <div className="ticket_room_content">

            <div className="ticket_room_header">
                <div className="d-flex align-items-center">
                    <div className="logo_rap">
                        <img src={thongTinPhim?.hinhAnh} style={{width:50, height:70}} alt={thongTinPhim?.tenPhim}/>
                    </div>
                    <div className="movie_info ml-2">
                        <p>{thongTinPhim?.tenPhim}</p>
                        <p>{thongTinPhim?.tenCumRap}</p>
                        <p>100 phút - {thongTinPhim?.gioChieu} - {thongTinPhim?.tenRap}</p>
                        <p>Ngày chiếu - {thongTinPhim?.ngayChieu}</p>
                    </div>
                    <div className="ml-auto">
                        <p>Thời gian giữ ghế</p>
                    </div>
                </div>

                <div className="man_hinh mt-4 text-center">
                    <img src ={screen}/>
                </div>
            </div>

            <div className="ticket_room_seats_container">
                <div className="ticket_room_seats">
                    {
                        danhSachGheChunk.map((arayItem, indexRow) => {
                            return (
                                <div className="seat_row" key={indexRow}>
                                    <SeatRow arayItem={arayItem} indexRow ={indexRow} arrGheDangChon={arrGheDangChon} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="seat_note">
                    <SeatNote/>
                </div>
               
            </div>
        </div>

    </div>
  );
}


export default memo(TicketRoom);