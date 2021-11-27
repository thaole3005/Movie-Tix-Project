import React from 'react';
import Radio from '../../../components/Radio/Radio';
import {useSelector, useDispatch} from 'react-redux';

export default function BookingForm(props) {
    const { arrGheDangChon} = useSelector(state => state.QuanLyDatVeReducer);

    const renderGheDangChon = () => {
        if (arrGheDangChon.length > 0) {
            return arrGheDangChon.map((gheDangChon, index) => {
                return <span>{`, ${gheDangChon.tenGheForm}`}</span>
            })
        } else {
            return <p>Vui lòng chọn ghế</p>
        }
    }



    return (
        <div className="booking_form_container bg-white">
            <div className="booking_form_content">
                <div className="booking_form_info">
                    <div className ="booking_total">
                        <h3>0đ</h3>

                    </div>
                    <hr/>
                    <div className="movie_info">
                        <p className="movie_name">Conan movie</p>
                        <p>CNS - Hai Bà Trưng</p>
                        <p>10/11/2021 - 08:11 - Rạp 5</p>
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
                        <input placeholder="Nhập mã giảm giá" className="form-control"/>
                        <button className="btn btn-success ap_dung">Áp dụng</button>
                    </div>
                    <hr/>

                    <div className="hinh_thuc_thanh_toan">
                        <Radio name="howtopay" value="ATM" />
                        <Radio name="howtopay" value="VISA" />
                        <Radio name="howtopay" value="CASH" />
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
                    <button class="btn btn-success w-100">Đặt vé</button>
                </div>
            </div>

        </div>
    )
}
