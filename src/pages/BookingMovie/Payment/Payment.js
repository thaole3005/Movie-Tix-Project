import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showConfirm } from './../../../components/ConfirmAntd/ConfirmAntd';
import { changePageAction, datVeAction } from './../../../redux/actions/QuanLyDatVeAction';
import { ThongTinDatVe } from './../../../_core/models/ThongTinDatVe';

export default function Payment(props) {

    const { arrGheDangChon} = useSelector(state => state.QuanLyDatVeReducer);
  const { thongTinPhim} = props.thongTinPhongVe;

    let infoThanhToan = {};
    if(localStorage.getItem('info_thanh_toan')) {
        infoThanhToan = JSON.parse(localStorage.getItem('info_thanh_toan'));
    }

    const dispatch = useDispatch();
    

    useEffect(() => {
        showConfirm("Xác nhận thanh toán", renderPaymentInfo(), thanhToan, "Hủy", "Thanh toán")
        
    }, [])
    
    const renderGheDangChon = () => {
            return arrGheDangChon.map((gheDangChon, index) => {
                return <span key={index}>{` ${gheDangChon.tenGheForm}, `}</span>
            })
      
    }

    const thanhToan = async () => {
        //call api tiến hành đặt vé
        const thongTinDatVe = new ThongTinDatVe();
        thongTinDatVe.maLichChieu = thongTinPhim.maLichChieu;
        thongTinDatVe.danhSachVe = arrGheDangChon;

        dispatch(datVeAction(thongTinDatVe));
        // dispatch(changePageAction("result"));
    }


    const renderPaymentInfo = () => {
        return (
            <div className="infor_payment d-flex">
            <div>
                <p>Ghế đã đặt</p>
                <p>Giá</p>
                <p>Hình thức thanh toán</p>
            </div>

            <div className="ml-auto">
                <p>
                    {renderGheDangChon()}
                </p>
                <p>{infoThanhToan.tongTien} VND</p>
                <p>{infoThanhToan.howtopay}</p>
            </div>
        </div>
        )
    }

    return (
        <>

        </>
    )
}
