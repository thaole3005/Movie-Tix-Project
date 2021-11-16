import React, { useState, useEffect } from 'react'
import { layThongTinLichChieuPhim } from './../../../redux/actions/QuanLyRapAction';
import { useDispatch, useSelector } from 'react-redux';
import UnSelectedItem from './UnSelectedItem';

export default function SearchBar(props) {
    const {arrMovie} = props;
    const {thongTinLichChieuPhim} = useSelector(state => state.QuanLyRapReducer);
    console.log("thongTinLichChieuPhim", thongTinLichChieuPhim);

    const [arrCumRap, setArrCumRap] = useState([]);
    console.log("arrCumRap", arrCumRap);

    const [valueObject, setValueObject] = useState({
        phim: "",
        cumRap: "",
        suatChieu: "",
    })

    const dispatch = useDispatch();

    useEffect(() => {
        //nếu ng dùng đã select phim => gtri thongTinLichChieuPhim đc biding lại từ reducer => vào call back này
        let arrCumRapResult = [];
        //!tạo ra mảng các cụm rạp chỉ gồm maCumRap và tenCumRap
        thongTinLichChieuPhim.heThongRapChieu?.forEach(htr => {
            let arrCumRap = htr.cumRapChieu.reduce((arrCumRap, cumRap ) => {
                return arrCumRap = [...arrCumRap, 
                                        {"maCumRap": cumRap.maCumRap, "tenCumRap": cumRap.tenCumRap}]
            }, []);
            arrCumRapResult = [...arrCumRapResult, ...arrCumRap];
        });
        // console.log("arrCumRapResult",arrCumRapResult);
        
        setArrCumRap(arrCumRapResult);

    }, [thongTinLichChieuPhim])


    const handleChange = async (e) => {
        let {name, value} = e.target;
        switch (name) {
            case "phim": {
                  // console.log("name", name);
            // console.log("valueMovie", value);
            await setValueObject({
                ...valueObject,
                [name]: value,
            });
            const maPhim = Number(value);
            //lấy thông tin lịch chiếu phim (các rạp và ngày chiếu ứng vs phim mà ng dùng select);
            dispatch(layThongTinLichChieuPhim(maPhim))
            break;
            }

            case "cumRap": {

                break;
            }
        }
       
    }


    return (
        <div className="search_bar_container">
            <div className="search_bar">
                <select className="select_search_item search_movie form-control"
                name ="phim" value ={valueObject.phim} onChange ={handleChange}
                >
                    <option value="-1">Phim</option>
                    {
                        arrMovie.map((phim, index) => {
                            return <option key={index} value={phim.maPhim}>{phim.tenPhim}</option>
                        })
                    }
                </select>

                <select className="select_search_item search_rap form-control"
                name ="cumRap" onChange={handleChange}
                >   
                 
                    {
                        arrCumRap.length > 0 ? 
                            arrCumRap?.map((cumRap, index) => {
                                return <option key={index} value={cumRap.maCumRap}>{cumRap.tenCumRap}</option>
                            })
                            : <UnSelectedItem label ="Cụm rạp" message ="Bạn cần chọn phim"/>
                    }
                  
                </select>
                <select className="select_search_item search_time form-control">
                    <option value ={1}>thứ 2</option>
                    <option value ={2}>thứ 3</option>
                    <option value ={3}>thứ 4</option>
                    <option value ={4}>thứ 5</option>
                </select>
                <div className="mua_ve">
                    <button className="mua_ve_btn_enabled" >MUA VÉ NGAY</button>
                </div>
            </div>
        </div>
      
    )
}
