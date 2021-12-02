import React, { useMemo, useState, useEffect } from 'react';
import Radio from '../../../components/Radio/Radio';
import {useSelector, useDispatch} from 'react-redux';
import { showConfirm } from '../../../components/ConfirmAntd/ConfirmAntd'; 
import { changePageAction } from './../../../redux/actions/QuanLyDatVeAction';


const voucherList = ["tix1", "tix2", "tix3"];

export default function BookingForm(props) {

    const { arrGheDangChon} = useSelector(state => state.QuanLyDatVeReducer);
    const {thongTinPhim} = props.thongTinPhongVe;
    // console.log("tiepTucMuaVe", tiepTucMuaVe)


    const dispatch = useDispatch();


    const [voucherValue, setVoucherValue] = useState("");
    const [isVoucher, setIsVoucher] = useState(true);
    const [voucherAlert, setVoucherAlert] = useState(false);
    const [howtopay, setHowtopay] = useState("");
    // console.log("howtopay", howtopay);

    // if(tiepTucMuaVe) {
    //     setVoucherValue("");
    //     // setHowtopay("");
    //     // window.location.reload();
    // }

    const [tongTien, setTongTien] = useState(0);

    const renderGheDangChon = () => {
        if (arrGheDangChon.length > 0) {
            return arrGheDangChon.map((gheDangChon, index) => {
                return <span key={index}>{` ${gheDangChon.tenGheForm}, `}</span>
            })
        } else {
            return <p>Vui lòng chọn ghế</p>
        }
    }


    useEffect(() => {
        tinhTongTien();
    }, [arrGheDangChon, voucherValue])

    const handleChangeVoucher = (e) => {
        console.log("vouchervalue", e.target.value);
        let voucherValue = e.target.value;
        setVoucherValue(voucherValue);
        if(voucherList.some(item => item === voucherValue)) {
            setIsVoucher(true);
            setVoucherAlert(false);

        } else {
            setVoucherAlert(true);
        }
    }

    const applyVoucher = () => {
        let newTongTien=0;
        // console.log("voucherValue", voucherValue);
            switch(voucherValue) {
            case "tix1": {
                newTongTien = tongTien - tongTien*0.1 ;
                break;
            }
            case "tix2": {
                newTongTien = tongTien - tongTien*0.2 ;
                break;
            }
            case "tix3": {
                newTongTien = tongTien - tongTien*0.3 ;
                break;
            }

            default: {
                return tongTien;
            }
        }
        // console.log("newTongTien", newTongTien);
        setIsVoucher(false);   //apply voucher này xong thhif k apply voucher khác nữa(chỉ đc apply 1 voucher)
        setTongTien(newTongTien.toLocaleString());
    }

    const handleChangeHowtopay = (e) => {
        // console.log("howtopay", e.target.value);
        setHowtopay(e.target.value);
    }


    const tinhTongTien = () => {
        
       const tongGiaVe = arrGheDangChon.reduce((tongTien, gheDangChon, index) => {
            return tongTien += gheDangChon.giaVe;
        },0);
        setTongTien(tongGiaVe);

    }


    const datVe = () => {
        dispatch(changePageAction("payment"));
    }

    return (
        <div className="booking_form_container bg-white">
            <div className="booking_form_content">
                <div className="booking_form_info">
                    <div className ="booking_total">
                        <h3>
                            {tongTien} đ
                        </h3>

                    </div>
                    <hr/>
                    <div className="movie_info">
                        <p className="movie_name">{thongTinPhim?.tenPhim}</p>
                        <p>{thongTinPhim?.tenCumRap}</p>
                        <p>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu} - {thongTinPhim?.tenCumRap}</p>
                    </div>
                    <hr/>
                   
                    <div className="ghe_da_chon_group d-flex">
                        <div className="">
                            <span>Ghế:</span>
                            {
                                renderGheDangChon()
                            }
                        </div>
                        <p className="tong_gia_ghe ml-auto">
                            {
                                  
                                arrGheDangChon.reduce((tongTien, gheDangChon, index) => {
                                    return tongTien += gheDangChon.giaVe;
                                },0).toLocaleString()
                                
                            }
                        </p>
                    </div>
                    
                    <div className="chon_combo d-flex justify-content-between">
                        <p>Chọn Combo</p>
                        <p className="tong_gia_combo">
                          0đ
                        </p>
                    </div>

                    <div className="uu_dai mt-2">
                        <input placeholder="Nhập mã giảm giá" 
                        className="form-control"
                        disabled = {arrGheDangChon.length===0 || !isVoucher}
                        onChange = {handleChangeVoucher}
                        value = {voucherValue}
                        />
                        <button className="btn btn-success ap_dung"
                        disabled = {arrGheDangChon.length===0 || voucherAlert || !isVoucher}
                        onClick={() => {
                            applyVoucher();
                        }}
                        >Áp dụng</button>
                        <div>
                            {
                                voucherAlert ? 
                                <div className="alert alert-danger" role="alert">
                                 Voucher này không tồn tại
                                </div> : ""
                            }
                        </div>
                    </div>
                    <hr/>

                    <div className="hinh_thuc_thanh_toan">
                        <Radio name="howtopay" value="ATM" handleChangeHowtopay = {handleChangeHowtopay}/>
                        <Radio name="howtopay" value="VISA" handleChangeHowtopay = {handleChangeHowtopay}/>
                        <Radio name="howtopay" value="CASH" handleChangeHowtopay = {handleChangeHowtopay}/>
                        <div>
                            {
                                howtopay === "" ? 
                                <div className="alert alert-danger" role="alert">
                                 Bạn cần chọn phương thức thanh toán
                                </div> : ""
                            }
                        </div>
                    </div>

                    <hr/>

                    <div className="notice">
                        <p>
                            Vé đã mua không thể đổi hoặc hoàn tiền
                        </p>
                        <br/>
                        <p>Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.</p>

                    </div>

                </div>
                
                <div className="dat_ve">
                    <button className="btn btn-success w-100"
                    disabled = {arrGheDangChon.length===0 || howtopay ===""}
                    onClick={() => {
                        showConfirm("Bạn vui lòng xác nhận thông tin", thongTinDatVe(thongTinPhim, renderGheDangChon, tongTien), datVe, "Hủy", "Xác nhận");
                        localStorage.setItem("info_thanh_toan", JSON.stringify({
                            howtopay: howtopay,
                            tongTien: tongTien,
                        }))
                    }}
                    >Đặt vé</button>
                </div>
            </div>

        </div>
    )
}




const thongTinDatVe = (thongTinPhim, renderGheDangChon, tongTien) => {
  

    return <div className="infor_booking_container">
        <div className="infor_booking_content d-flex">
            <div>
                <p>Tên phim</p>
                <p>Cụm Rạp</p>
                <p>Thời gian chiếu</p>
                <p>Ghế</p>
                <p>Gía vé </p>
            </div>
            <div className="ml-auto">
                        <p className="movie_name">{thongTinPhim?.tenPhim}</p>
                        <p>{thongTinPhim?.tenCumRap}</p>
                        <p>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                        <p>
                            {
                                renderGheDangChon()
                            }
                        </p>
                        <p>{tongTien.toLocaleString()}</p>
            </div>
        </div>
    </div>
}

